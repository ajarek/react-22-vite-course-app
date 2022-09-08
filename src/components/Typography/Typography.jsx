import React from 'react'
import classes from './styles.module.css'
export const Typography = props => {
  const { variant, className, children, ...otherProps } = props
  const variantClass = classes[variant]
  return (
    <span
      {...otherProps}
      className={`${classes.root}${className ? ` ${className}` : ''}${
        variantClass ? ` ${variantClass}` : ''
      }`}>
      {children}
    </span>
  )
}
export default Typography
