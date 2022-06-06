import React from 'react'
import { Link } from 'react-router-dom'
function ErrorPage() {
    return (
        <div>
            <h2 style={{ marginTop: "98px" }}>
                <p>Sorry....Page not found</p>
                <Link to="/">Home</Link>
            </h2>

        </div>
    )
}

export default ErrorPage
