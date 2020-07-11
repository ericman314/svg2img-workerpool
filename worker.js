const svg2img = require('svg2img')
const fs = require('fs').promises
const workerpool = require('workerpool')
const path = require('path')

workerpool.worker({
  convertSvg
})

async function convertSvg(basename) {
  console.log('Converting ' + basename)
  const svgString = await fs.readFile(path.join(__dirname , `${basename}.svg`))
  let pngBuffer = await new Promise((resolve, reject) => {
    svg2img(svgString, (error, buffer) => {
      if (error) {
        reject(error)
      } else {
        resolve(buffer)
      }
    })
  })
  await fs.writeFile(path.join(__dirname, `${basename}.png`), pngBuffer)
  console.log('Done with ' + basename)
}
