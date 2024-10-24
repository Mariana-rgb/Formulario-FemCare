const otherHealthCheckbox = document.getElementById('health5');
const otherHealthContainer = document.getElementById('otherHealthContainer');

otherHealthCheckbox.addEventListener('change', function() {
    if (this.checked) {
        otherHealthContainer.style.display = 'block';
    } else {
        otherHealthContainer.style.display = 'none';
    }
});

// Função para obter parâmetros da URL
function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        age: params.get('age'),
        income: params.get('income')
    };
}

document.addEventListener('DOMContentLoaded', function() {
    const params = getUrlParams();

    // Preenche os campos de idade e renda
    if (params.age) {
        document.getElementById('age').value = params.age;
    }
    if (params.income) {
        document.getElementById('income').value = params.income;
    }
});

// Função para armazenar dados do formulário de melhorias
function saveCisData() {
    const age = document.getElementById('age').value;
    const income = document.getElementById('income').value;
    const specialties = [];
    const issues = document.getElementById('websiteIssues').value; // Corrigido
    const navigationImprovements = document.getElementById('navigationImprovements').value; // Corrigido
    const otherHealthDescription = document.getElementById('otherHealthDescription').value;

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        if (checkbox.checked && checkbox.value !== 'outro') {
            specialties.push(checkbox.value);
        }
    });

    if (otherHealthCheckbox.checked) {
        specialties.push(otherHealthDescription);
    }

    const formData = {
        age: age,
        income: income,
        specialties: specialties,
        issues: issues,
        navigationImprovements: navigationImprovements // Corrigido
    };

    const existingData = JSON.parse(localStorage.getItem('cisData')) || [];
    existingData.push(formData);
    localStorage.setItem('cisData', JSON.stringify(existingData));

    alert('Informações salvas com sucesso!');
    window.location.href = 'dadosSalvos.html';
}

// Listener para o envio do formulário
document.getElementById('cisForm').addEventListener('submit', function(event) {
    event.preventDefault();
    saveCisData();
});