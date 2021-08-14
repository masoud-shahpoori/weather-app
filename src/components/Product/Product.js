import React from 'react'
import { Wind } from 'react-bootstrap-icons';
import { Droplet } from 'react-bootstrap-icons';
export default function Product({dayDataArray,data}) {

    return (
        <div className='container my-3'>
        <div className="row">

        
        <div className="col col-12 col-md-4 inline-div">
            <div className="container-total-inf-today">
                
                <p>
                                       {dayDataArray.day} 
                                       <img src={`https://openweathermap.org/img/wn/${dayDataArray.weather[0].icon}.png`} alt="" />

                </p>
                <h4> {dayDataArray.temp} C</h4>
                <p> {dayDataArray.minTemp} - {dayDataArray.maxTemp} C</p>
                <p className="container-city-name">{data.city.name},{data.city.country}</p>
            </div>
        </div>
        <div className=" col col-12 col-md-8 inline-div">
        <div className="container-hourlu-inf-today text-center">
                {data.list.filter(dataItem => dataItem.dt_txt.split(' ')[0] ===dayDataArray.date).map(dataItemFiltered =>{
                    return <div key={dataItemFiltered.dt} className="col-3 col-sm-2 inline-div ">
                        <div className="container-forecast-hourly">

                        <span className="d-block">
                        <img src={`https://openweathermap.org/img/wn/${dataItemFiltered.weather[0].icon}.png`} alt="" />
                        
                        </span>
                   
                        <span className="d-block">
                        {dataItemFiltered.dt_txt.split(' ')[1].substring(0,5)}
                        </span>
                        <h6 className="d-block">
                        {dataItemFiltered.main.temp} C
                        </h6>
                        <span className="d-block">
     <Wind></Wind>   {' '}                 
{dataItemFiltered.wind.speed} km/h

                        </span>
                        <span className="d-block">
                    <Droplet/> 
{dataItemFiltered.main.humidity}%

                        </span>

                        </div>
                        </div>
                })}
            </div>
        </div>
     
    </div>
    </div>

    )
}
