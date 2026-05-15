function adicionarEventoClique(cartao) {
    cartao.addEventListener('click', () => {
      const nomeAlbum = cartao.querySelector('h2').innerText;
      const nomeArtista = cartao.querySelector('h3').innerText;
      alert(`Bela escolha! Você clicou no álbum "${nomeAlbum}" de ${nomeArtista}.`);
    });
  }
  
  const cartoes = document.querySelectorAll('.album-card');
  cartoes.forEach(cartao => adicionarEventoClique(cartao));
  
  const formulario = document.getElementById('form');
  
  formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
  
    const novo = {
      tituloD:document.getElementById("titulo").value,
      imagemD:document.getElementById("imagem").value,
      artistaD:document.getElementById("artista").value,
      anoD:document.getElementById("ano").value
    };
  
    const novoCartao = document.createElement('article');
    novoCartao.classList.add('album-card');
  
    novoCartao.innerHTML = `
      <div class="image-wrapper">
        <img src="${novo.imagemD}" alt="Capa do Álbum ${novo.tituloD}">
      </div>
      <div class="album-info">
        <h2>${novo.tituloD}</h2>
        <h3>${novo.artistaD}</h3>
        <span class="year">${novo.anoD}</span>
      </div>
    `;
  
    adicionarEventoClique(novoCartao);
  
    const galeria = document.querySelector('.gallery-container');
    galeria.appendChild(novoCartao);
  
    formulario.reset();
  });
