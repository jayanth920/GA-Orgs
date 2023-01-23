//https://github.com/motdotla/dotenv
require('dotenv').config();
//https://github.com/node-fetch/node-fetch
const fetch = require('node-fetch');

const SUPABASE_URL = 'https://kwogaasbtpvzfajbxobq.supabase.co';

const SUPABASE_AUTH_HEADERS = {
  apikey: process.env.SUPABASE_KEY,
  Authorization: `Bearer ${process.env.SUPABASE_KEY}`
}
const index = () => {
  const url = SUPABASE_URL + '/rest/v1/contacts?select=*';
  const options = { headers: SUPABASE_AUTH_HEADERS };
  return fetch(url, options).then( (result) => { return result.json(); } )
}
module.exports = {
  index: index
};
const main = async () => {
  const results = await index();
  console.log(results);
}
main();