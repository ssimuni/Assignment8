import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div>
            <h2>Oooppsss!!!</h2>
            <Link to="/">Go back to home</Link>
        </div>
    )
}

export default Error