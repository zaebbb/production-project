const createTemplate = require('./functions/createTemplate')

const layer = process.argv[2]
const sliceName = process.argv[3]

const layers = ['features', 'entities', 'pages']

if (!layer || !layers.includes(layer)) {
  throw new Error(`Укажите слов ${layers.join(' или ')}`)
}

if (!sliceName) {
  throw new Error('Укажите название слайса')
}

createTemplate(layer, sliceName)
