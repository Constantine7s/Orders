const express = require('express');
const config = require('../../knexfile');

const environment = process.env.DATABASE_URL ? "production" : "development"


const knex = require('knex')(config[environment]);
const router = express.Router();
const cors = require('cors');
router.use(cors());

require('dotenv').config({
  path: '.../.env',
});
router.use(express.urlencoded({ extended: true }));

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
  
});

router.get('/', (req, res) => {
  res.status(200).send('something?');
});

router.get('/api', async (req, res) => {
  const results = await knex.select('*').from('orders');
  res.status(200).send(JSON.stringify(results));
});

router.post('/neworder', async (req, res) => {
  await knex('orders').insert({
    name: req.body.name,
    drink: req.body.drink,
    size: req.body.size,
  });
});

router.delete('/del/:input', async (req, res) => {
  const input = parseInt(req.params.input);
  await knex('orders').where({ id: input }).del();
  res.status(200).send();
});

module.exports = router;
