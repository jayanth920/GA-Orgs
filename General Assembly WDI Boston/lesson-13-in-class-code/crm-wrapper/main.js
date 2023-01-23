//https://github.com/heapwolf/prompt-sync
const promptSync = require('prompt-sync');
const prompt = promptSync({ sigint: true });
const Contact = require('./contact');
const findContact = async () => {
  const id = Number(prompt('Enter the id number of the contact: '));
  const contact = await Contact.show(id);
  if (!contact) {
    console.log('\nContact Not Found!\n');
    return;
  }
  return contact;
}
const showContacts = async () => {
  const contacts = await Contact.index();
  console.log();
  for (contact of contacts)
    console.log(`${contact.id}: ${contact.name}`);
  console.log();
}
const showContact = async () => {
  const contact = await findContact();
  if (!contact) return;
  console.log();
  console.log('id:', contact.id);
  console.log('name:', contact.name);
  console.log('phone:', contact.phone);
  console.log('email:', contact.email);
  console.log();
}
const addContact = async () => {
  const name  = prompt('Enter name: ').trim();
  const phone = prompt('Enter phone: ').trim();
  const email = prompt('Enter email: ').trim();
  const newContact = {
    name: name,
    phone: phone,
    email: email
  }
  const result = await Contact.create(newContact);
  console.log(`\n${result.name} was added.\n`);
}
const modifyContact = async () => {
  // 1. Find the contact
  const contact  = await findContact();
  // 2. If it doesnt exist, get out of here
  if (!contact) return;
  // 3. If it does exist, ask the user for what they want to change
  const choice = Number(prompt('What would you like to change? 1. Name, 2. Phone, 3. Email: '));
  const value = prompt("What's the new value? ").trim();
  // 4. update that particular contact with new info
  const fields = Object.keys(contact);
  const changes = {};
  changes[fields[choice]] = value;
  const result = await Contact.update(contact.id, changes);
  // 5. report on the action
  console.log(`\n${result.name} was modified.\n`)
}
const deleteContact = async () => {
  // 1. Find the contact from the DB
  const contact = await findContact();
  // 2. If it doesnt exist, get out of here
  if (!contact) return;
  // 3. If it does exist, remove it from the DB
  const result = await Contact.destroy(contact.id);
  // 4. Acknowledge the action
  console.log(`\n${result.name} was deleted.\n`)
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
      case 2: await showContact();   break;
      case 3: await addContact();    break;
      case 4: await modifyContact(); break;
      case 5: await deleteContact(); break;
      case 6:
        process.exit();
        break;
      default:
        console.log('\nThat selection is not valid, please try again!\n');
    }
  }
}
main();