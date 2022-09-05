import React from "react"
import Typography from '../Typography/Typography'
import  classes from './styles.module.css'
export const Button = (props) => {
  const {variant,color,className, children, ...otherProps } = props
 const variantClass = classes[variant]
  const colorClass = classes[color]
  return (
    
      <button
      {...otherProps}
      className={`${classes.root}${className ? ` ${className}` : ''}${variantClass ? ` ${variantClass}` : ''}${colorClass ? ` ${colorClass}` : ''}`}
      >
        <Typography
        className="button"
        >
            {children}
        </Typography>
      </button>
   
  )
}
export default Button