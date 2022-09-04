import React from "react"
import Typography from '../Typography/Typography'
import  "./Button.css"
export const Button = (props) => {
  const { className, children, ...otherProps } = props
 
  return (
    
      <button
      {...otherProps}
      className={className}
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