import React from 'react'
import {Spinner} from './Spinner'
import './FullPageLoader.css'

export const FullPageLoader = (props) => {
    const {
        className,
        ...otherProps
    }=props
    return(
        <div
        className={'loader'}
        {...otherProps}
        >
           <Spinner
           className={'spinner'}
           />
        </div>
    )
}
export default FullPageLoader