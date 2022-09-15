import React from 'react'

import classes from './styles.module.css'
import LogOutIcon from './LogOutIcon'
import ProfileIcon from './ProfileIcon'
import Typography from '../../components/Typography/Typography'
export const ListItem = props => {
  const { className,onClickBackToLogin, ...otherProps } = props

  return (
    <ul
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}>
      <li className={classes.list1}>
        <ProfileIcon />
        <Typography variant={'button'}>Profile</Typography>
      </li>
      <li className={classes.list2}
      onClick={onClickBackToLogin}
      >
        <LogOutIcon />
        <Typography variant={'button'}>Log out</Typography>
      </li>
    </ul>
  )
}
export default ListItem
