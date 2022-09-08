import React from 'react'

import classes from './styles.module.css'

export const TextField = props => {
  const { className, ...otherProps } = props

  return (
    <input
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    />
  )
}
export default TextField
