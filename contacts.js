// mengimport core module yang dibutuhkan
const fs = require('fs');
const readline = require('readline');

// jika tidak ada folder data maka buat foldernya
if (!fs.existsSync('./data')) {
  fs.mkdirSync('data');
}

// jika tidak ada file contacts.json dalam folder data maka buat filenya
if (!fs.existsSync('./data/contacts.json')) {
  fs.writeFileSync('data/contacts.json', '[]');
}

// membuat interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// membuat fungsi pertanyaan
const createQuestion = (pertanyaan) => {
  return new Promise((resolve, reject) => {
    rl.question(pertanyaan, (jawaban) => {
      resolve(jawaban);
    });
  });
};

// membuat fungsi menyimpan contacts
const saveContacts = (name, email, nomorhp) => {
  const contact = { name, email, nomorhp }; //menyimpan object dari parameter fungsi ke variabel contact
  const file = fs.readFileSync('data/contacts.json', 'utf-8'); //membaca file contacts dari folder data
  const contacts = JSON.parse(file); //memparsing data contacts ke object
  contacts.push(contact); //menambahkan data contact baru ke variable contacts
  fs.writeFileSync('data/contacts.json', JSON.stringify(contacts)); //menulis data contacts ke file contacts.json
  console.log('Terima kasih sudah memasukkan data!'); //memberitahu bahwa data contact telah dimasukkan
  rl.close();
};

// mengekspor fungsi-fungsi
module.exports = { saveContacts, createQuestion };
