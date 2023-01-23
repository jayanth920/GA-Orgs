'use strict'

console.log('all of our arguments:\n', process.argv)
console.log('our first argument (path to node executable): ', process.argv[0])
console.log('our second argument (always the script): ', process.argv[1])
console.log('our third argument: ', process.argv[2])
console.log('our fourth argument: ', process.argv[3])
console.log('our fifth argument: ', process.argv[4])

// try running this script with `node path/to/process-argv.js "something" "something else"`
