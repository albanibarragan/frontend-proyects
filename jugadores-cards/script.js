const players = [
    {
        name: 'Vinícius Júnior',
        age: 24,
        position: 'Delantero',
        photo: 'https://i.pinimg.com/736x/69/26/7b/69267bce1de448c6808b0d979b591226.jpg'
    },
    {
        name: 'Jude Bellingham',
        age: 21,
        position: 'Centrocampista',
        photo: 'https://i.pinimg.com/736x/83/41/70/8341702baa7e00370df5fb0120fd536d.jpg'
    },
    {
        name: 'Arda Güler',
        age: 20,
        position: 'Centrocampista ofensivo',
        photo: 'https://i.pinimg.com/736x/95/9a/96/959a96628934fe1cfbf6acc5162c71a0.jpg'
    },
    {
        name: 'Federico Valverde',
        age: 25,
        position: 'Centrocampista',
        photo: 'https://i.pinimg.com/736x/c4/ca/2a/c4ca2a8ba787bcf0ff2e4952b3b9b5f3.jpg'
    },
    {
        name: 'Antonio Rüdiger',
        age: 32,
        position: 'Defensor central',
        photo: 'https://i.pinimg.com/736x/1b/c4/4a/1bc44ad80b5486d05340e7c3624c1730.jpg'
    }
];

// acceder al contenedor 
const container = document.getElementById("players-container");

let cardsHTML = '';
// recorrer el array 
players.forEach(player => {
  cardsHTML += `
  <div class="card">
    <img src="${player.photo}" alt="${player.name}" class="card-img"/>
    <div class="card-body">
      <h2>${player.name}</h2>
      <p>Edad: ${player.age}</p>
      <p>Posición: ${player.position}</p>
    </div>
  </div>
`;
});

container.innerHTML = cardsHTML
