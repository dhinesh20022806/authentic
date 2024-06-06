'use strict';
const pg = require('pg');


const { Pool } = pg;

const pool = new Pool();

module.exports = pool;