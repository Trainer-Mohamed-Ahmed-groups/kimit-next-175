import React from 'react'

export default function Page({params}) {
    
    console.log(params)

    return (
        <div>Page in single user {params.id}</div>
    )
}
