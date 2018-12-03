const express = require('express')
const graphqlHTTP = require('express-graphql')
const secrets = require('../secrets')
const R = require('ramda')
var bodyParser = require('body-parser')
const cors = require('cors')
const axios = require('axios')
const {
  buildSchema,
  printSchema,
  graphql,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLFloat,
  GraphQLSchema,
} = require('graphql')

const mysql = require('mysql')
const { GraphQLDateTime } = require('graphql-iso-date')

const connection = mysql.createConnection({
  host: secrets.HOST,
  user: secrets.USER,
  password: secrets.PASSWORD,
  database: secrets.DB_NAME,
})

connection.connect()

const getData = () => {
  console.log('getting data')
  return new Promise((resolve, reject) =>
    connection.query(
      'SELECT * FROM marshfield ORDER BY ID DESC LIMIT 1',
      (error, results) => {
        if (error) {
          console
            .error(`error connecting: ${error.stack}`)
            .reject(error)
        }
        console.log('resolving with', [results])
        return resolve(results[0])
      },
    ),
  )
}

var app = express()

app.get('/latest', async (req, res, next) => {
  const data = await getData()
  res.header('Access-Control-Allow-Origin', '*')
  res.json(data)
  next()
})

app.listen(process.env.PORT)
console.log(`running on ${process.env.PORT}`)
