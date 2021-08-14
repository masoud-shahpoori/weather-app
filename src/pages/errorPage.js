import React from 'react'
import {Link} from 'react-router-dom'

export default function ErrorPage() {
    return (
        <div className='text-center container my-5'>
            <h3>404</h3>
            <h4>File not found
</h4>
<p>
<Link to='/' className='btn btn-danger '>Back Home</Link> 

</p>
        </div>
    )
}
