require('dotenv').config();
const client = require('../db-client');

client.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      email VARCHAR(256) NOT NULL,
      name VARCHAR(256),
      password VARCHAR(256) NOT NULL
    );

    CREATE TABLE IF NOT EXISTS quadrants (
      id SERIAL PRIMARY KEY,
      name VARCHAR(256) NOT NULL,
      direction VARCHAR(8) UNIQUE NOT NULL
    );

    CREATE TABLE IF NOT EXISTS neighborhoods (
      id SERIAL PRIMARY KEY,
      name VARCHAR(256),
      quadrant_id INTEGER NOT NULL REFERENCES quadrants(id),
      population INTEGER,
      founded INTEGER,
      description VARCHAR(1024)
    );

    CREATE TABLE IF NOT EXISTS restaurants (
      id SERIAL PRIMARY KEY,
      name VARCHAR(256),
      neighborhood_id INTEGER NOT NULL REFERENCES neighborhoods(id),
      cuisine VARCHAR(256)
    )
`)
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });