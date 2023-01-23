const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMzU5NTQ0NywiZXhwIjoxOTM5MTcxNDQ3fQ.AQh6kptDzhUHWcoLUXW4u7DAQJQz-VeWoEyKJf8pIuU'
const SUPABASE_URL = 'https://kfxzmuwgcicdwrspveqv.supabase.co';

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY); 


const index = () => {
  return supabaseClient.from('boards')
    .select('*')
    .then( (results) => { return results.data; } );
}

const show = (Name) => {
  return supabaseClient.from('boards')
    .select('*')
    .eq('Name', Name)
    .then( (results) => { return results.data[0]; } );
}

const create = (Name) => {
  return supabaseClient.from('boards')
    .insert([Name])
    .then( (results) => { return results.data[0]; } );
}

const destroy = (Name) => {
  return supabaseClient.from('boards')
    .delete()
    .eq('Name', Name)
    .then( (results) => { return results.data[0]; } );
}

const update = (Name, changes) => {
  return supabaseClient.from('boards')
    .update(changes)
    .eq('Name', Name)
    .then( (results) => { return results.data[0]; } );
}
