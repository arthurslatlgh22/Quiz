function mostrarResposta(opcao) {
    const resultado = document.getElementById("resultado");
  
    if (opcao === 1) {
      resultado.textContent = "Errado! mas basquete é bom";
    } else if (opcao === 2) {
      resultado.textContent = "Correto! Futebol é o mais famoso";
    } else if (opcao === 3) {
      resultado.textContent = "Errado! Ta louco em escolher volei?";
    } else if (opcao === 4) {
      resultado.textContent = "Quase acertou, esse é o 2 mais famoso";
    }
  }