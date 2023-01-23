const SUPABASE_URL = 'https://hvtrjyevdtnfrhghoqjr.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMjgyNTAxNiwiZXhwIjoxOTM4NDAxMDE2fQ.RfRrEI8esT3wLwazNw9l8GrSmjitHTt1gPOclAlozi4'

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const index = () => {
  return supabaseClient.from('todos')
    .select('*')
    .then( (results) => { return results.data; } );
}

const show = (id) => {
  return supabaseClient.from('todos')
    .select('*')
    .eq('id', id)
    .then( (results) => { return results.data[0]; } );
}

const create = (todo) => {
  return supabaseClient.from('todos')
    .insert([todo])
    .then( (results) => { return results.data[0]; } );
}

const destroy = (id) => {
  return supabaseClient.from('todos')
    .delete()
    .eq('id', id)
    .then( (results) => { return results.data[0]; } );
}

const update = (id, changes) => {
  return supabaseClient.from('todos')
    .update(changes)
    .eq('id', id)
    .then( (results) => { return results.data[0]; } );
}


