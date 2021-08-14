import React from 'react'
import {Link} from 'react-router-dom'
import Loading from '../components/Loading/Loading'

export default function withProduct(WrappedComponent) {

const WithProduct=({data,loading,errorMessage,error})=>{

//     if(Object.keys(data).length==0 || loading==true){
// if(loading==true){
//     return <div>loading</div>
// }else{
//     return <div>Please write the correct city name</div>}
//     }else{

//      return   <WrappedComponent data={data}/>
//     }


if(loading==true){
    return <div><Loading></Loading></div>
}else {
    if(error){
        return <div className="text-center mt-4">{errorMessage}</div>
    }else{
        if(Object.keys(data).length==0 ){
            return <div className="text-center mt-4">Please write the  city name</div>
           
        }else{
            return   <WrappedComponent data={data}/>
        }

    }
}
}

return WithProduct

}
