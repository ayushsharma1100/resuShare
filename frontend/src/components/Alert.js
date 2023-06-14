import React from 'react'

export default function Alert(props) {
    return (
        <div className={`alert alert-${props.alert.type} w-100`} style={{position: "absolute"}} role="alert">
            {props.alert.message}
        </div>
    )
}
