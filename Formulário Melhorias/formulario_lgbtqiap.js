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

// Função para armazenar dados no localStorage
function saveLGBTQData() {
    const age = document.getElementById('age').value;
    const income = document.getElementById('income').value;
    const specialties = [];
    const otherHealthDescription = document.getElementById('otherHealthDescription').value;
    const issues = document.getElementById('issues').value;
    const inclusivitySuggestions = document.getElementById('inclusivitySuggestions').value;

    // Captura as especialidades de saúde selecionadas
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        if (checkbox.checked && checkbox.value !== 'outro') {
            specialties.push(checkbox.value);
        }
    });

    // Adiciona a descrição se "Outro" foi selecionado
    if (otherHealthCheckbox.checked) {
        specialties.push(otherHealthDescription);
    }

    // Cria um objeto com os dados do formulário
    const formData = {
        age: age,
        income: income,
        specialties: specialties,
        issues: issues,
        inclusivitySuggestions: inclusivitySuggestions,
    };

    // Recupera dados existentes do localStorage
    const existingData = JSON.parse(localStorage.getItem('lgbtqData')) || [];
    
    // Adiciona a nova entrada ao array
    existingData.push(formData);

    // Armazena os dados atualizados no localStorage
    localStorage.setItem('lgbtqData', JSON.stringify(existingData));
    
    console.log('Dados salvos:', formData); // Para depuração
    alert('Informações salvas com sucesso!');

    // Redireciona para a página de dados salvos
    window.location.href = 'dadosSalvos.html';
}

// Adiciona um listener ao formulário para o evento de envio
document.getElementById('lgbtqiapForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    saveLGBTQData(); // Chama a função para salvar os dados
});