import React from "react"
import ErrorIcon from "./ErrorIcon"
import InfoIcon from "./InfoIcon"
import { Typography } from "../Typography/Typography"
import { Button } from "../Button/Button"
import "./FullPageMessage.css"
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
    <div className={"messageWrapper"}>
      {iconVariant === "info" ? (
        <InfoIcon />
      ) : iconVariant === "error" ? (
        <ErrorIcon />
      ) : null}
      <Typography className={"h3"}>{message}</Typography>
      <Button
       className={"root contained primary"}
       onClick={onButtonClick}
       >
        <Typography className={"button"}>{buttonLabel}</Typography>
      </Button>
    </div>
  )
}

export default FullPageMessage
