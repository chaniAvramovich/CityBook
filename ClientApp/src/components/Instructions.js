import React, { useContext } from 'react'
import { applicationContext } from '../App'

export const Instructions = () => {
    const { user } = useContext(applicationContext)
    return (
        <div >
            <h1>{`Hello ${user.firstName} ${user.lastName}`}</h1>
        </div>
    )
}
