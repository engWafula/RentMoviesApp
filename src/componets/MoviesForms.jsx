import React from 'react'

export default function  MoviesForms({match,history}) {
    return (
        <div>
            <h1>MoviesForms:{match.params.id}</h1>
            <button className="btn btn-primary" onClick={()=>history.push('/Movies')}>Save</button>
        </div>
    )
}
