const generateRandomInteger = (min, max) => {
  return Math.floor(max - Math.random() * (max - min))
}

const setImg = (src, el) => {
  el.setAttribute('src', src)
}

exports.rndm = generateRandomInteger
exports.setImg = setImg
