const fs = require('fs/promises')
const resolveRoot = require('../../helpers/resolveRoot')
const firstCharUpperCase = require('../../helpers/firstCharUpperCase')
const componentTemplate = require('./templates/componentTemplate')
const storyComponent = require('./templates/storyTemplate')
const styleTemplate = require('./templates/styleTemplate')

module.exports = async (layer, sliceName) => {
  const resolveUIPath = (...segments) => resolveRoot('src', layer, sliceName, 'ui', ...segments)

  const createUIDir = async () => {
    try {
      await fs.mkdir(resolveUIPath())
    } catch (e) {
      console.log('Не удалось создать UI директорию')
    }
  }

  const createComponent = async () => {
    try {
      const componentName = firstCharUpperCase(sliceName)

      await fs.mkdir(resolveUIPath(componentName))

      await fs.writeFile(
        resolveUIPath(componentName, `${componentName}.tsx`),
        componentTemplate(componentName)
      )
      await fs.writeFile(
        resolveUIPath(componentName, `${componentName}.stories.tsx`),
        storyComponent(layer, componentName),
      )
      await fs.writeFile(
        resolveUIPath(componentName, `${componentName}.module.scss`),
        styleTemplate(componentName),
      )
    } catch (e) {
      console.log('Не удалось создать компонент')
    }
  }

  await createUIDir()
  await createComponent()
}