const mailAutorizzate = [
  'ad@gm.com',
  'il@gm.com',
  'sy@gm.com',
  'fi@gm.com',
  'ed@gm.com'
]

const userMail = 'sy@gm.com'

let mailTrovata = false

for(i = 0; i<mailAutorizzate.length; i++) {
  if(userMail === mailAutorizzate[i]){
    mailTrovata = true;
  }
}

if(mailTrovata){
  console.log('yes')
}else{
  console.log('no')
}

const num1 = Math.ceil(Math.random() * 6);
const num2 = Math.ceil(Math.random() * 6);

console.log(num1, num2);

if(num1 > num2) {
  console.log('hai vinto');
}else if(num1 < num2) {
  console.log('hai perso')
}else{
  console.log('hai pareggiato');
}