import React from 'react'
import classes from './styles.module.css'
import defaultAvatarSrc from '../../assets/Vector.svg'

export const Avatar = (props) => {
  const {
    className,
    src,
    ...otherProps
  } = props

  return (
    <img
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      alt={'avatar'}
      src={src||defaultAvatarSrc}
      {...otherProps}
    >

    </img>
  )
}
export default Avatar
