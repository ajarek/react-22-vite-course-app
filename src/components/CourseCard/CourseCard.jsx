import React from 'react'
import Typography from '../Typography/Typography'
import Button from '../Button/Button'
import classes from './styles.module.css'

export const CourseCard = (props) => {
  const {
    className,
    children,
    course={},
    ...otherProps
  } = props
  const {
    category,
    description,
    image,
    title
  } = course
  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
  <div
        className={classes.imageWrapper}
      >
        <div
          className={classes.image}
          style={{
            backgroundImage: `url(${image})`
          }}
        >
        </div>
      </div>
      <div
        className={classes.textWrapper}
      >
        <div
          className={classes.titleWrapper}
        >
          <Typography
            variant={'body1'}
            className={classes.title}
          >
            {title}
          </Typography>
          <Typography
            variant={'body2'}
            className={classes.category}
          >
            {category}
          </Typography>
        </div>
        <div
          className={classes.descriptionWrapper}
        >
          <Typography
            variant={'body2'}
            className={classes.description}
          >
            {description}
          </Typography>
        </div>
      </div>
      <div
        className={classes.actionsWrapper}
      >
        <Button
          icon={'eye'}
          disabled={true}
        >
          VIEW COURSE
        </Button>
      </div>
      {children}
    </div>
  )
}
export default CourseCard
