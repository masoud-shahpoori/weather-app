import React from 'react'
import withProduct from './withProduct'
import {Link} from 'react-router-dom';
import  Product from '../components/Product/Product'




const productList=({data})=> {
    var dateArray=[]
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
today =  yyyy+ '-' +mm  + '-' + dd

for (let i=0; i<Object.keys(data.list).length; i++) {
    let dateOfList = data.list[i].dt_txt
let checkIsDateExist= dateArray.find(item=>item.date===dateOfList.split(" ")[0])


if (checkIsDateExist==undefined) {
    
if(dateOfList.split(" ")[0]==today){
    dateArray.push({id:i,date:dateOfList.split(" ")[0],day:'Today',weather:data.list[i].weather,temp:data.list[i].main.temp})
}else{
    let numberOfDay=new Date(dateOfList.split(" ")[0]);

    dateArray.push({id:i,date:dateOfList.split(" ")[0],day:numberOfDay.toString().split(' ')[0]})

}

}

}


var finaldateArray=[]
for(var i=0; i<Object.keys(dateArray).length; i++){
    let averageTemp=0
    let tempArray=[]
    let filterList = data.list.filter(item=> item.dt_txt.split(' ')[0]==dateArray[i].date)

    //for average temp
    filterList.map(item=> {
    averageTemp+=item.main.temp 
    tempArray.push(item.main.temp)
    })
let lastIndex=tempArray.length
let soretTempArray =tempArray.sort()
let avTemp= (averageTemp/Object.keys(filterList).length).toFixed(2)
//for average icon

let a = [],
b = [],
arr = [], 
prev;

filterList.map(item=> {
arr.push(item.weather[0].id)
})

arr.sort();
for (let element of arr) {
  if (element !== prev) {
    a.push(element);
    b.push(1);
  }
  else ++b[b.length - 1];
  prev = element;
}

let indexOfArr = b.indexOf(Math.max(...b))

    let weatherAveraged =filterList.find(item => item.weather[0].id === a[indexOfArr]).weather
    



if(dateArray[i].temp){

    finaldateArray.push({id:dateArray[i].id,date:dateArray[i].date,day:dateArray[i].day,weather:dateArray[i].weather,temp:dateArray[i].temp,minTemp:soretTempArray[0],maxTemp:soretTempArray[lastIndex-1]})

}else{
    finaldateArray.push({id:dateArray[i].id,date:dateArray[i].date,day:dateArray[i].day,weather:dateArray[i].weather,temp:avTemp,minTemp:soretTempArray[0],maxTemp:soretTempArray[lastIndex-1],weather:weatherAveraged})

}

}
var todayDataArray=finaldateArray.find(item=> item.day=='Today')


    return (
        <>
   <Product dayDataArray={todayDataArray} data={data}></Product>
        <div className="container">
            <div className="row">
   {finaldateArray.filter(item => item.day!=='Today').map(item=>
                {
                    return  <div key={item.id}  className="col col-6 col-sm-4 col-lg-2 inline-div text-center">
                        <Link to={`/detail/${item.date}?city=${data.city.name}`} className="container-daily-forecast">
                        <p> {item.day} <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt="" /></p>
                        <h5> {item.temp} C</h5>
                        <p>{item.minTemp} - {item.maxTemp} C</p>
                           
                        </Link>
                    </div>
                })}
            </div>
        </div>
        </>
    )
}

export default withProduct(productList)