const { spawn } = require('child_process')

// git log --pretty=format:"%aN %ae"
const child = spawn('git', ['log', '--pretty=format:%aN %ae'])

child.stdout.on('data', data => {
  console.log('data', data.toString())
})

child.stdout.on('close', data => {
  console.log('close', data.toString())
})

// Recreate the output of `git shortlog -s -n` using the above as a starting point
