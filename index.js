const util = require('./util')
const rndm = util.rndm
const setImg = util.setImg

const els = document.querySelectorAll('.MORPH')
const timeRange = {
  start: 400,
  end: 1400
}

const morph = (set, el) => {
  const fin = set.length
  let start = 0
  let time = rndm(timeRange.start, timeRange.end)

  setImg(set[start]['image'], el)
  console.log(set[start]['image'])

  const go = () => {
    time = rndm(timeRange.start, timeRange.end)

    clearInterval(run)
    start < fin - 1 ? start++ : start = 0
    setImg(set[start]['image'], el)

    run = setInterval(go, time)
  }

  let run
  run = setInterval(go, time)
}

const init = () => {
  els.forEach(el => {
    const set = JSON.parse(el.getAttribute('data-imgs'))
    const img = el.querySelector('img')
    morph(set, img)
  })
}

module.exports = init
