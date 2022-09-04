import React from 'react'
import ErrorIcon from './ErrorIcon'
import InfoIcon from './InfoIcon'
export const FullPageMassage = () => {
    // const {
    //   className,
    //   message,
    //   buttonLabel = 'GO BACK',
    //   iconVariant = 'info',
    //   onButtonClick,
    //   ...otherProps
    // } = props
    return(
        <div>
            <InfoIcon/>
            <ErrorIcon
            />
        </div>
    )
}

export default FullPageMassage