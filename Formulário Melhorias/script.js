document.getElementById('transCommunity').addEventListener('change', function() {
    const transIdentityContainer = document.getElementById('transIdentityContainer');
    if (this.value === 'sim') {
        transIdentityContainer.style.display = 'block';
    } else {
        transIdentityContainer.style.display = 'none';
    }
});

document.getElementById('initialForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const ageRange = document.getElementById('ageRange').value;
    const income = document.getElementById('income').value;
    const transCommunity = document.getElementById('transCommunity').value;

    // Redireciona com parâmetros na URL
    const url = `formulario_melhorias.html?age=${encodeURIComponent(ageRange)}&income=${encodeURIComponent(income)}`;
    window.location.href = transCommunity === 'sim' ? `formulario_lgbtqiap.html?age=${encodeURIComponent(ageRange)}&income=${encodeURIComponent(income)}` : url;

});