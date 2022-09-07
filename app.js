// mengimport fungsi-fungsi dari file function.js
const { createQuestion, saveContacts } = require('./contacts.js');

// membuat fungsi asynchronous
const main = async () => {
  const name = await createQuestion('What is your name? ');
  const email = await createQuestion('What is your email? ');
  const nomorhp = await createQuestion('What is your phone nomor? ');
  saveContacts(name, email, nomorhp);
};

main();
