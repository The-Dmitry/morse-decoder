const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let divided = []
    for(let i = 0; i < expr.length; i +=10) {
        divided.push(expr.slice(i, i+10))
    }
    let filtered = divided.map(el => el.replaceAll('00', ''))
    let dashed = filtered.map(el => el.replaceAll('11', '-'))
    let dashedAndDotted = dashed.map(el => el.replaceAll('10', '.'))
    return dashedAndDotted.map(el => MORSE_TABLE[el]).map(item => typeof item == 'undefined' ? ' ' : item).join('')
}


module.exports = {
    decode
}