const express = require("express")
const app = express()
const port = 3000

/**
 * @type { import("knex").Knex } knex
 */
const knex = require("./knex")

app.get('/', async (req, res) => {
    const data = ['<h1>Full Cycle Rocks!</h1>'];

    const rows = await knex.select('*').from('people');

    rows.forEach(row => {
        data.push(`<p>id: ${row.id}, name: ${row.name}</p>`);
    })


    res.send(data.join(''))
})

app.listen(port, async () => {
    await knex('people').insert({ name: 'Thiago Pereira'})

    console.log("servidor rodando na porta:", port)
})