import React from 'react'
import ReactDOM from 'react-dom'

const createDIVContainer = () => {
  const newContainer = document.createElement('DIV')
  newContainer.style.position = 'fixed'
  newContainer.style.height = '100%'
  newContainer.style.width = '100%'
  newContainer.style.top = '0'
  newContainer.style.left = '0'
  return newContainer
}

const createComponentContainer = (() => {
  let secondaryRootContainer: HTMLElement | null = null

  return () => {
    if (secondaryRootContainer === null) {
      secondaryRootContainer = createDIVContainer()
      document.body.appendChild(secondaryRootContainer)
    }

    const componentContainer = createDIVContainer()
    secondaryRootContainer.appendChild(componentContainer)

    return componentContainer
  }
})()

const renderSeparately = (component: React.ReactElement) => {
  const componentContainer = createComponentContainer()
  const destroyRenderer = () => {
    ReactDOM.unmountComponentAtNode(componentContainer)
    componentContainer.remove()
  }
  ReactDOM.render(component, componentContainer)

  return destroyRenderer
}

export default renderSeparately
