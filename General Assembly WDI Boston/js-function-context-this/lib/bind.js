'use strict'

// uncomment this code when ready:

// const blackHole = {
//   escaped: 'Whew! Our heroes escaped the black hole.',
//   tryToEscape: () => {
//     console.log(this)
//     console.log(this.escaped)
//   }
// }

const escapeWithWarpDrive = function () {
  console.log(this.escaped)
}

// don't change anything above this line
// use `.bind` somewhere below this line to save our intrepid astronauts
const escapeFromBlackHole = escapeWithWarpDrive

escapeFromBlackHole()
