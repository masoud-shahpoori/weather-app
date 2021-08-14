import React from 'react'
import  LoadingImg  from '../../image/Loading.jpg'

export default function Loading() {
    return (
        <div className="container-loading text-center">
            <img src={LoadingImg} alt="" />
        </div>
    )
}
