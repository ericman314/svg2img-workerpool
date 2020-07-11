const workerpool = require('workerpool')

const pool = workerpool.pool(__dirname + '/worker.js')

let files = [
  'triangle',
  'square',
  'circle'
]

// Execute all at once
function runParallel() {
  files.forEach(async (file) => {
    await pool.exec('convertSvg', [file])
  })
}

// Execute one at a time
async function runSeries() {
  for (let file of files) {
    await pool.exec('convertSvg', [file])
  }
}

/*** Comment one or the other function call ***/

// runSeries()
runParallel()

