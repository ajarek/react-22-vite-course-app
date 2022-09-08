import React from 'react'
import { Spinner } from './Spinner'
import classes from './styles.module.css'
import FullPageLayout from '../../components/FullPageLayout/FullPageLayout'

export const FullPageLoader = props => {
  const { className, ...otherProps } = props
  return (
    <FullPageLayout {...otherProps}>
      <Spinner className={classes.spinner} />
    </FullPageLayout>
  )
}
export default FullPageLoader
