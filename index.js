let count = 0
createStyleTag()

function useCSS(styles) {
  const className = insertStyles(styles)
  return className
}

function createStyleTag() {
  const container = document.head.querySelector('#usecss')

  if (!container) {
    const container = document.createElement('style')
    container.id = 'usecss'
    document.head.append(container)
  }

  return container
}

const stylesArray = []

function getExistingClassName(styles) {
  const existingStyles = stylesArray.find(function(pair) {
    return pair.styles === styles
  })

  if (existingStyles) return existingStyles.className
  else return false
}

function insertStyles(styles) {
  const existingClassName = getExistingClassName(styles)

  if (existingClassName) return existingClassName

  const className = 'c' + count++

  const raw = `.${className} {${styles}}`
  stylesArray.push({ className, styles })

  const container = document.head.querySelector('#usecss')
  container.append(raw)

  return className
}

export default useCSS
