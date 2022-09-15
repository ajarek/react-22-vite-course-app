import React from 'react'

import classes from './styles.module.css'

export const Search = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
    <input
      className={`${classes.input}${className ? ` ${className}` : ''}`}
      {...otherProps}
      placeholder={'search'}
    />
    </div>
  )
}
export default Search
