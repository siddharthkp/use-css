import hash from '@emotion/hash'
import stylis from 'stylis'

// create style tag once.
createStyleTag()

function useCSS(styles) {
  const className = insertStyles(styles)
  return className
}

function insertStyles(styles) {
  const className = getClassName(styles)

  // skip if these styles are already inserted
  if (isAlreadyInserted(className)) return

  insertedClasses.push(className)
  const container = document.head.querySelector('#usecss')

  const raw = stylis(`.` + className, styles)
  container.append(raw)

  return className
}

const insertedClasses = []
function isAlreadyInserted(className) {
  return insertedClasses.find(c => c === className)
}

function getClassName(styles) {
  return 'c' + hash(styles)
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

export default useCSS
