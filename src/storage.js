const storage = {
    cards: [],
    archivedCards: []
}

const cardObject = {
    id: 0,
    title: 'Nulla quis lorem ut libero malesuada feugiat.',
    body: 'Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat.',
    date: '23 Сентября'
}

const cardObjects = [];

for (let i = 0; i < 5; i++) {
    const card = Object.assign({}, cardObject)
    card.id = i;
    cardObjects.push(card);
}

const archivedCards = [];

for (let i = 1000; i < 1005; i++) {
    const card = Object.assign({}, cardObject)
    card.id = i;
    archivedCards.push(card);
}

storage.cards = cardObjects;
storage.archivedCards = archivedCards;
export default storage
