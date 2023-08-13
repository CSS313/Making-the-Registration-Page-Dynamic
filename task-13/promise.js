console.log('person1 shows ticket');
console.log('person2 shows ticket');

const preMovie = async () => {

    const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
    });
    const getPopcorn =  new Promise((resolve, reject) => {
        setTimeout(() => resolve('popcorn'), 3000);
    });

    const addButter =  new Promise((resolve, reject) => {
    setTimeout(() => resolve('butter'), 3000);
    });

    const getColdDrinks =  new Promise((resolve, reject) => {
        setTimeout(() => resolve('coke'), 3000);
    });

    let ticket = await person3PromiseToShowTicketWhenWifeArrives;

    let [ popcorn, butter, coke ] =
    await Promise.all([ getPopcorn, addButter, getColdDrinks  ]);

    console.log(`got ${popcorn}, ${butter}, ${coke}`);


    return ticket;

};

preMovie().then((t) => console.log(`person4 shows ${t}`));

console.log('person4 shows ticket');
