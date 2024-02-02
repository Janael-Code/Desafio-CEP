// consultaCEP.js teste Janael

async function consultarCEP() {
    const CEP = document.getElementById('CEP');
    const resultadoConsulta = document.getElementById('resultadoConsulta');
  
    try {
      const response = await axios.get(`https://brasilapi.com.br/api/cep/v1/${CEP.value}`);
      const { state, city, neighborhood, street } = response.data;
      
  
      // Exibir os resultados formatados com classes CSS
      resultadoConsulta.innerHTML = `
        <div class="resultado-item resultado-titulo">Segue os dados abaixo!<br></div>
        <div class="resultado-item">CEP consultado: <span class="resultado-cep">${CEP.value}</span></div>
        <div class="resultado-item">Estado: ${state}</div>
        <div class="resultado-item">Cidade: ${city}</div>
        <div class="resultado-item">Bairro: ${neighborhood}</div>
        <div class="resultado-item">Rua: ${street}</div>
      `;
    } catch (error) {
      // Caso aconteça algum ero ele apresentará esse resultado.
      resultadoConsulta.innerHTML = '<div class="resultado-item resultado-titulo">CEP informado não é válido</div>';
    }
  }
  