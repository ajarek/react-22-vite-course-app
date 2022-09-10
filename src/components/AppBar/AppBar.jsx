import React from 'react'
import Logo from '../../components/Logo/Logo'
import classes from './styles.module.css'

export const AppBar = (props) => {
  const {
    className,
    children,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <Logo/>
  {children}
  
    </div>
  )
}
export default AppBar
