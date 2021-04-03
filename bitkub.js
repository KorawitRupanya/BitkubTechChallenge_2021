const axios = require('axios');
var { graphql, buildSchema } = require('graphql');

axios.get('https://api-ropsten.etherscan.io/api?module=account&action=tokentx&address=0xEcA19B1a87442b0c25801B809bf567A6ca87B1da&startblock=0&endblock=999999999&sort=asc&apikey=76EFBMQQ6N921F8CJ4F1SUAKM2T5EBDCHJ').then(resp => {

    console.log(resp.data);
});

var schema = buildSchema(`
  type Query {
    dataPromise: String
  }
`);
 
var root = { dataPromise: () => 'Hello world!' };
 
graphql(schema, '{ dataPromise }', root).then((response) => {
  console.log(response);
});