const qs = require('qs');

const params = () => qs.stringify(
  {
     populate: "*"
  }
);

const ID = 3;
const CONTENT_TYPE = "cases"
const BASE_URL = `http://localhost:1338/api/${CONTENT_TYPE}/${ID}?`


const QUERY_1 = BASE_URL + params();


console.log(QUERY_1) // No Populate Flags