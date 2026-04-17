// 1. O 'document' representa a nossa página HTML inteira.
// O 'querySelectorAll' busca todos os elementos que têm a classe '.album-card'
// e os guarda em uma lista que chamamos de 'cartoes'.
const cartoes = document.querySelectorAll('.album-card');

// 2. O 'forEach' é um laço de repetição. Ele diz: "Para cada 'cartao' dentro da nossa lista..."
cartoes.forEach(cartao => {
    
    // 3. Adicionamos um "ouvinte de eventos" (addEventListener).
    // Ele fica esperando o usuário dar um 'click' neste cartão específico.
    cartao.addEventListener('click', () => {
        
        // 4. Quando o clique acontece, nós procuramos dentro DENTRO DESTE CARTÃO
        // a tag <h2> (nome do álbum) e a tag <h3> (nome do artista) e pegamos o texto delas.
        const nomeAlbum = cartao.querySelector('h2').innerText;
        const nomeArtista = cartao.querySelector('h3').innerText;
        
        // 5. Por fim, disparamos um alerta na tela juntando os textos que pegamos.
        // Usamos as crases (``) para poder colocar as variáveis dentro do texto usando ${}.
        alert(`Bela escolha! Você clicou no álbum "${nomeAlbum}" de ${nomeArtista}.`);
    });
    
});