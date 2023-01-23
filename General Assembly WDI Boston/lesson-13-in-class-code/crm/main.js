const promptSync = require('prompt-sync');
const prompt = promptSync({ sigint: true })

let contacts = [
  { id: 1, name: 'Bruce Wayne', phone: '555-123-4567', email: 'bruce@wayne.com' },
  { id: 2, name: 'Clark Kent', phone: '555-222-3333', email: 'clark@dailyplanet.com' },
  { id: 3, name: 'Diana Prince', phone: '555-444-5555', email: 'diana@amazon.com' }
];
let nextId = 4;

const findContactIndex = () => {
  const id = Number(prompt('Enter the id number of the contact: '));
  let idx;
  for (let i=0; i<contacts.length; ++i)
    if (contacts[i].id === id) idx = i;
  if (idx === undefined) {
    console.log('\nContact Not Found!\n');
    return;
  }
  return idx;
}

const showContacts = () => {
  console.log();
  for (contact of contacts)
    console.log(`${contact.id}: ${contact.name}`);
  console.log();
}

const showContact = () => {
  const id = Number(prompt('Enter the id number of the contact: '));
  let idx;
  for (let i=0; i<contacts.length; ++i)
    if (contacts[i].id === id) idx = i;
  if (idx === undefined) {
    console.log('\nContact Not Found!\n');
    return;
  }
  const contact = contacts[idx];
  console.log();
  console.log('id:', contact.id);
  console.log('name:', contact.name);
  console.log('phone:', contact.phone);
  console.log('email:', contact.email);
  console.log();
}

const addContact = () => {
  const name  = prompt('Enter name: ').trim();
  const phone = prompt('Enter phone: ').trim();
  const email = prompt('Enter email: ').trim();
  const newContact = {
    id: nextId,
    name: name,
    phone: phone,
    email: email
  }
  ++nextId;
  contacts.push(newContact);
  console.log(`\n${newContact.name} was added.\n`)
}

const modifyContact = () => {


}

const deleteContact = () => {
  // 1. Find the index of the contact
  const idx = findContactIndex();
  // 2. If it doesnt exist, get out of here
  if (idx === undefined) return;
  // 3. If it does exist, remove it from the array
  const contactName = contacts[idx].name;
  contacts.splice(idx, 1);
  // 4. Acknowledge the action
  console.log(`\n${contactName} was deleted.\n`)
}

const main = () => {

  const mainMenu = () => {
    console.log('[1] Display all contacts');
    console.log('[2] Display details of one contact');
    console.log('[3] Add a new contact');
    console.log('[4] Modify an existing contact');
    console.log('[5] Delete a contact');
    console.log('[6] Exit');
  }

  while(true) {
    mainMenu();
    const selection = Number(prompt('Enter a selection: '));

    switch(selection) {
      case 1: showContacts();  break;
      case 2: showContact();   break;
      case 3: addContact();    break;
      case 4: modifyContact(); break;
      case 5: deleteContact(); break;
      case 6:
        process.exit();
        break;
      default:
        console.log('\nThat selection is not valid, please try again!\n');
    }
  }
}

main();
