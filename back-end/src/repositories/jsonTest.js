const error = require("../errorHandling/error");

const itens = [
    {
      "id": "0",
      "nameitem": "item0",
      "price": "363",
      "qtd": "89",
      "descricao": "gNuPhqEmeGTvMKlWRJLcYeSxMkpsNokVyZFSmwCEzBVtKrADqw",
      "img": "GzQmzvTVYFjzjjgUzGjo",
      "categoria": "jXU"
    },
    {
      "id": "1",
      "nameitem": "item1",
      "price": "238",
      "qtd": "31",
      "descricao": "gNuPhqEmeGTvMKlWRJLcYeSxMkpsNokVyZFSmwCEzBVtKrADqw",
      "img": "GzQmzvTVYFjzjjgUzGjo",
      "categoria": "jXU"
    },
    {
      "id": "2",
      "nameitem": "item2",
      "price": "768",
      "qtd": "79",
      "descricao": "gNuPhqEmeGTvMKlWRJLcYeSxMkpsNokVyZFSmwCEzBVtKrADqw",
      "img": "GzQmzvTVYFjzjjgUzGjo",
      "categoria": "jXU"
    },
    {
      "id": "3",
      "nameitem": "item3",
      "price": "651",
      "qtd": "21",
      "descricao": "gNuPhqEmeGTvMKlWRJLcYeSxMkpsNokVyZFSmwCEzBVtKrADqw",
      "img": "GzQmzvTVYFjzjjgUzGjo",
      "categoria": "jXU"
    },
    {
      "id": "4",
      "nameitem": "item4",
      "price": "486",
      "qtd": "44",
      "descricao": "gNuPhqEmeGTvMKlWRJLcYeSxMkpsNokVyZFSmwCEzBVtKrADqw",
      "img": "GzQmzvTVYFjzjjgUzGjo",
      "categoria": "jXU"
    },
    {
      "id": "5",
      "nameitem": "item5",
      "price": "807",
      "qtd": "5",
      "descricao": "gNuPhqEmeGTvMKlWRJLcYeSxMkpsNokVyZFSmwCEzBVtKrADqw",
      "img": "GzQmzvTVYFjzjjgUzGjo",
      "categoria": "jXU"
    },
    {
      "id": "6",
      "nameitem": "item6",
      "price": "936",
      "qtd": "97",
      "descricao": "gNuPhqEmeGTvMKlWRJLcYeSxMkpsNokVyZFSmwCEzBVtKrADqw",
      "img": "GzQmzvTVYFjzjjgUzGjo",
      "categoria": "jXU"
    },
    {
      "id": "7",
      "nameitem": "item7",
      "price": "637",
      "qtd": "80",
      "descricao": "gNuPhqEmeGTvMKlWRJLcYeSxMkpsNokVyZFSmwCEzBVtKrADqw",
      "img": "GzQmzvTVYFjzjjgUzGjo",
      "categoria": "jXU"
    },
    {
      "id": "8",
      "nameitem": "item8",
      "price": "463",
      "qtd": "14",
      "descricao": "gNuPhqEmeGTvMKlWRJLcYeSxMkpsNokVyZFSmwCEzBVtKrADqw",
      "img": "GzQmzvTVYFjzjjgUzGjo",
      "categoria": "jXU"
    },
    {
      "id": "9",
      "nameitem": "item9",
      "price": "352",
      "qtd": "62",
      "descricao": "gNuPhqEmeGTvMKlWRJLcYeSxMkpsNokVyZFSmwCEzBVtKrADqw",
      "img": "GzQmzvTVYFjzjjgUzGjo",
      "categoria": "jXU"
    }
  ];


  module.exports = {
    allItems: () => {
      return [...itens]; // Retorna uma cópia para evitar manipulações indesejadas
    },
    addItem: (item) => {
      itens.push(item);
    },
    updateItem: (itemId, updatedItem) => {
      itens = itens.map(item => (item.id === itemId ? { ...item, ...updatedItem } : item));
    }, 
    findItem: (itemId) => {
      const item = itens.find(item => item.id === itemId)
      if(!item){
        throw new Error('');
      }
      return itens.find(item => item.id === itemId);
    },
  };
