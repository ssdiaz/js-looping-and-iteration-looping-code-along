// const namesArray = ["Ada", "Brendan", "Ali"]

// for loop
function writeCards( namesArray, event ) {
    let thankYouCards = []
    for ( let i = 0; i < namesArray.length; i++ ) {
      thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
    }
    return thankYouCards
  }

// while loop

function countDown( startingNumber ) {
    while (startingNumber > 0) {
        console.log(startingNumber);
        startingNumber -= 1;
    }
    console.log(startingNumber);
}