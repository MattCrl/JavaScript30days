const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log('Regular');

// Interpolated
console.log('Bonsoir à %s', 'tous');

// Styled
console.log('%c Ajout de css', 'font-size: 20px; background: red');

// warning!
console.warn('Attention !!');

// Error :|
console.error('Erreur !!');

// Info
console.info('Les crocodiles mangent entre 3 et 4 personnes par an');

// Testing
const p = document.querySelector('p');
console.assert(1 === 2, 'That is wrong !');
console.assert(p.classList.contains('merci'), 'That is wrong too');

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
// console.dir(p);

// Grouping together
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`Ce chien s'appelle ${dog.name}`);
    console.log(`${dog.name} a ${dog.age} ans`);
    console.log(`${dog.name} is ${dog.age * 7} dog years`)
    console.groupEnd(`${dog.name}`);
})

// counting
console.groupCollapsed('Counting');
console.count('Matt');
console.count('Matt');
console.count('Matt');
console.count('Matt');
console.count('Matt');
console.count('Matt');
console.groupEnd('Counting');

// timing
console.time('fetching data')
fetch('https://api.github.com/users/wesbos')
.then(data => data.json())
.then(data => {
    console.timeEnd('fetching data');
    console.log(data)
});

console.table(dogs);
