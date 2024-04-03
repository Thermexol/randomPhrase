const makeRandom = (num) =>{
    let phrase = Math.floor(Math.random()*num.length);
    return num[phrase];
}
let startPhrase = ['A Hero,','A Leader,', 'A Warrior,', 'A true test of a Great Person',
        'A Great Man,', 'A Great Adventurer,'];
let medPhrase = ['will always', 'will never', 'should', 'understands how to'];
let endPhrase = ['succeed', 'rouse the weary and the beleaguered', 
        'has a great companion', 'forge through fire and brimstone'];

console.log(makeRandom(startPhrase),makeRandom(medPhrase),makeRandom(endPhrase))