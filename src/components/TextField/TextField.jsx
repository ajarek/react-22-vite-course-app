import React from 'react'

import classes from './styles.module.css'

export const TextField = props => {
  const {validateInput,validateInfo, className, ...otherProps } = props

  return (
    <div
    className={`${classes.root}${className ? ` ${className}` : ''}`}
  >
    <input
      className={`${classes.input}${ !validateInput ? ` ${classes.validateInput}` : ''}`}
      {...otherProps}
    />
     {
         !validateInput ?
          <div
            className={classes. validateInput}
          >
            {validateInfo}
          </div>
          :
          null
      }
    </div>
  )
}
export default TextField
