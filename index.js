const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000
const pokemons = [{
  id: 1,
  name: 'Bulbasaur',
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'
}, {
  id: 2,
  name: 'Ivysaur',
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png'
}]
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World!'))

// Create Read Update Delete
// x Vista lista (GET /pokemons)
// x Vista detalle (GET /pokemons/123)
// Crear individual (POST /pokemons)
// Actualizar individual (PUT/PATCH /pokemons/123)
// Borrar individual (DELETE /pokemons/123)
// API rest

app.get('/pokemons', (req, res) => {
  res.send(pokemons);
});

app.get('/pokemons/:id', (req, res) => {
  const pokemon = pokemons.find((p) => p.id.toString() === req.params.id)
  if(pokemon) {
    res.send(pokemon)
  } else {
    res.status(404).send({ message: 'Not found' })
  }
})

app.post('/pokemons', (req, res) => {
  pokemons.push(req.body)
  res.send(req.body)
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
