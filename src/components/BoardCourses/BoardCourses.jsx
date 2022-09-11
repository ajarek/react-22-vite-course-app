import React from 'react'
import { AppBar } from '../../components/AppBar/AppBar'
import { Avatar } from '../../components/Avatar/Avatar'
import { ListItem } from '../../components/ListItem/ListItem'
import classes from './styles.module.css'

export const BoardCourses = props => {
  const { className, src, email, nameUser,contentList,onClick, ...otherProps } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}>
      <AppBar>
        <div 
        className={`${classes.wrapperUser}${className ? ` ${className}` : ''}`}
        onClick={onClick}
        {...otherProps}
        > 
         
          <div
           className={`${classes.wrapperNameEmail}${className ? ` ${className}` : ''}`}
          >
            <p className={`${classes.wrapperName}${className ? ` ${className}` : ''}`}>{nameUser}</p>
            <p className={`${classes.wrapperEmail}${className ? ` ${className}` : ''}`}>{email}</p>
          </div>
          <div className={`${classes.wrapper
          }${className ? ` ${className}` : ''}`}>
            <Avatar src={src} />
          </div>
        </div>
        {
        contentList ?
          <div
            className={classes.listContainer}
          >
            <ListItem/>
          </div>
          :
          null
      }
      </AppBar>
     
    </div>
  )
}
export default BoardCourses
