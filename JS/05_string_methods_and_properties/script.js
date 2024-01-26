const message= "Hello My name is Shashikant";
console.log(message[4]) 
// property 
console.log('Length:',message.length)

// methods
console.log('toUpperCase:',message.toUpperCase());
console.log('toLowerCase:',message.toLowerCase());

const faltuMessage= '       Hi, I m Shashikant     '
console.log('trim:',faltuMessage.trim())
console.log('trimstart:',faltuMessage.trimStart())
console.log('trimend:',faltuMessage.trimEnd())

console.log(faltuMessage.includes('m'))

// console.log(message.indexOf('z')) it will give -1 because it does not exist
console.log(message.indexOf('t'))

console.log(message.replace("Hello","Hi"))
console.log(message.replace("Bye","Hello")) 
console.log(message.replace('Shashikant','Shruti'))

console.log(message.replaceAll('a','A'))

const firstName = 'Shashikant'
const lastName = 'Mane'
console.log(firstName+' '+lastName)
console.log(firstName.concat(lastName))

const lastFourDigits = '7856'
console.log('MaskedAccountNumber',lastFourDigits.padStart(16,'*'));
console.log(lastFourDigits.padStart(8,'.'));

console.log(message.charAt(4))

//ASCII Code
console.log(message.charCodeAt(3))

console.log(message.split(' '))
const fullName= 'ShaShikant$mane'
console.log(fullName.split('$'))

// const number = 100+''
// console.log(number)

//Template string
const concatenatedString =`Last four digit of my account number is`.concat(' ',lastFourDigits)
const templateString =`My account number is ${lastFourDigits.padStart(16,"*")}.`

const bankBalance = 987
const templateString2 = `I have $${bankBalance} in my account.`

const addedString= `I have $`+bankBalance+` in my account`