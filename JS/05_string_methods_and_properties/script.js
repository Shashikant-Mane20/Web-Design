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


// const number = 100+''
// console.log(number)