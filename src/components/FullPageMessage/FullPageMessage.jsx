import React from "react"
import ErrorIcon from "./ErrorIcon"
import InfoIcon from "./InfoIcon"
import { Typography } from "../Typography/Typography"
import { Button } from "../Button/Button"
import classes from './styles.module.css'
import {FullPageLayout} from '../../components/FullPageLayout/FullPageLayout'
export const FullPageMessage = (props) => {
  const {
    className,
      message,
      buttonLabel = 'GO BACK',
    iconVariant = "info",
      onButtonClick,
    ...otherProps
  } = props
  return (
    <FullPageLayout
     {...otherProps}
     >
      {iconVariant === "info" ? (
        <InfoIcon />
      ) : iconVariant === "error" ? (
        <ErrorIcon />
      ) : null}
      <Typography variant={"h3"}>{message}</Typography>
      <Button
       variant={'contained'}
       color={'primary'}
       onClick={onButtonClick}
       >
        <Typography variant={"button"}>{buttonLabel}</Typography>
      </Button>
    </FullPageLayout>
  )
}

export default FullPageMessage
