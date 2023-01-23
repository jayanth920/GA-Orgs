//https://github.com/heapwolf/prompt-sync
const promptSync = require('prompt-sync');
const prompt = promptSync({ sigint: true });
const Contact = require('./contact');
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
const showContacts = async () => {
  const contacts = await Contact.index();
  console.log();
  for (contact of contacts)
    console.log(`${contact.id}: ${contact.name}`);
  console.log();
}
const showContact = () => {
  const idx = findContactIndex();
  if (idx === undefined) return;
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
  console.log(`\n${newContact.name} was added.\n`);
}
const modifyContact = () => {
  // 1. Find the index of the contact
  const idx = findContactIndex();
  // 2. If it doesnt exist, get out of here
  if (idx === undefined) return;
  // 3. If it does exist, ask the user for what they want to change
  const choice = Number(prompt('What would you like to change? 1. Name, 2. Phone, 3. Email: '));
  const value = prompt("What's the new value? ").trim();
  // 4. update that particular contact with new info
  const contact = contacts[idx];
  const fields = Object.keys(contact);
  contact[fields[choice]] = value;
  // 5. report on the action
  console.log(`\n${contact.name} was modified.\n`)
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
const main = async () => {
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
      case 1: await showContacts();  break;
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