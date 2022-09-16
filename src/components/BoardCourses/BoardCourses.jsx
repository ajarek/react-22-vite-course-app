import React, { Children } from 'react'
import { AppBar } from '../../components/AppBar/AppBar'
import { Avatar } from '../../components/Avatar/Avatar'
import { ListItem } from '../../components/ListItem/ListItem'
import { Search } from '../../components/Search/Search'

import { FullPageLayout } from '../../components/FullPageLayout/FullPageLayout'

import classes from './styles.module.css'

export const BoardCourses = props => {
  const {children, className, src, email, nameUser,contentList,onClick,onClickBackToLogin,onClickHideList,value,
    onChange, ...otherProps } = props

  return (
    <FullPageLayout
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
            <ListItem
            onClickBackToLogin={onClickBackToLogin}
            onClickHideList={onClickHideList}
            />
          </div>
          :
          null
      }
      
      </AppBar>
   <Search
   value={value}
   onChange={onChange}
   />
     <div
      className='wrapperCourses'>
         {children}
      </div>
    </FullPageLayout>
  )
}
export default BoardCourses
