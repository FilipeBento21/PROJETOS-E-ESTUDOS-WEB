document.addEventListener('DOMContentLoaded', () => {
    const artistsData = [
        {name: "Herique & Juliano", image: './assets/imgs/artista-henrique-juliano.jpg'},
        {name: "Jorge & Mateus", image: './assets/imgs/artista-jorge-mateus.jpg'},
        {name: "Zé Neto & cristiano", image: './assets/imgs/artista-ze-neto.jpg'},
        {name: "Gustavo Limma", image: './assets/imgs/artista-gustavo-limma.jpg'},
        {name: "Luan Santana", image: './assets/imgs/artista-luan-santana.jpg'},
        {name: "Matheus & Kauan", image: './assets/imgs/artista-mateus-kauan.jpg'},
    ];

    const albumsData = [
        {name: "White Noise (Sleep & Relaxation Sounds)", artist: "Sleepy Jhon", image:'./assets/imgs/album-white-noise.jpg'},
        {name: "O Céu Explica Tudo (Ao Vivo)", artist:"Herique & Juliano", image:'./assets/imgs/album-ceu-explica.jpg'},
        {name: "Nada como um dia após o outro", artist:'Racinais', image: './assets/imgs/album-racionais.jpg'},
        {name: "HIT ME HARD AND SOFT", artist: 'Billie Eilish', image: './assets/imgs/album-hit-me.jpg'},
        {name: "CAJU", artist:'Liniker' , image: './assets/imgs/album-caju.jpg'},
        {name: "Escândalo Íntimo", artist:'Luísa Sonza' , image: './assets/imgs/artista-mateus-kauan.jpg'},
    ]

    const artistGrid = document.querySelector('.artists-grid')
    const albumsGrid = document.querySelector('.albums-grid')

    artistsData.forEach( artist => {
        const artistCard = document.createElement('div')
        artistCard.classList.add('artist-card')

        artistCard.innerHTML = `
            <img src= '${artist.image}' alt= 'imagem do ${artist.name}'>
            <h3>${artist.name}</h3>
            <p>artista</p>
        `

        artistGrid.appendChild(artistCard)
    })

    albumsData.forEach( album => {
        const albumCard = document.createElement('div')
        albumCard.classList.add('album-card')

        albumCard.innerHTML = `
            <img src='${album.image}' alt='Imagem do ${album.name}'>
            <p>${album.name}</p>
        `

        albumsGrid.appendChild(albumCard)
    })



})