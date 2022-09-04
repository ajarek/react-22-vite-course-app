import React from "react"
import  "./Typography.css"
export const Typography = (props) => {
  const { className, children, ...otherProps } = props
 
  return (
    
      <span
      {...otherProps}
      className={className}
      >{children}
      </span>
   
  )
}
export default Typography