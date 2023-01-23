//https://github.com/motdotla/dotenv
require('dotenv').config();
//https://github.com/supabase/supabase-js
const supabase = require('@supabase/supabase-js');
const SUPABASE_URL = 'https://kwogaasbtpvzfajbxobq.supabase.co';
const supabaseClient = supabase.createClient(SUPABASE_URL, process.env.SUPABASE_KEY);
const index = () => {
  return supabaseClient.from('contacts')
    .select('*')
    .then( (results) => { return results.data; } );
}
const show = (id) => {
  return supabaseClient.from('contacts')
    .select('*')
    .eq('id', id)
    .then( (results) => { return results.data[0]; } );
}
const create = (contact) => {
  return supabaseClient.from('contacts')
    .insert([contact])
    .then( (results) => { return results.data[0]; } );
}
const destroy = (id) => {
  return supabaseClient.from('contacts')
    .delete()
    .eq('id', id)
    .then( (results) => { return results.data[0]; } );
}
const update = (id, changes) => {
  return supabaseClient.from('contacts')
    .update(changes)
    .eq('id', id)
    .then( (results) => { return results.data[0]; } );
}
module.exports = {
  index: index,
  show: show,
  create: create,
  destroy: destroy,
  update: update
};