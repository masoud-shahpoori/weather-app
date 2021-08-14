import React, { useEffect } from "react";
import { connect } from "react-redux";
import Product from "../components/Product/Product";
import { handleGetDetailOfDay } from "../redux/Action/productAction";
import { bindActionCreators } from "redux";
import { useParams, useLocation,Link } from "react-router-dom";
import Loading from "../components/Loading/Loading"

function DayDetail({
  dayDetails,
  loading,
  handleGetDetailOfDay,
  error,
  errorMessage,
}) {
  var location = useLocation();
  var { id } = useParams();
  var params = new URLSearchParams(location.search);
  var dayDataArray = [];
  useEffect(() => {
    handleGetDetailOfDay(id, params.get("city"));

    setTimeout(() => {
      window.location.reload();
    },30000)
  }, []);

  var speceficDayDetails = [];

  if (Object.keys(dayDetails).length !== 0) {
    speceficDayDetails = dayDetails.list.filter(
      (item) => item.dt_txt.split(" ")[0] == id
    );
    let numberOfDay = new Date(id);
    if (speceficDayDetails.length !== 0) {
        let averageTemp=0
        let a = [],
        b = [],
        arr = [], 
        prev,
        tempArray=[];

        speceficDayDetails.map((item) =>{
            averageTemp+=item.main.temp
            arr.push(item.weather[0].id)
            tempArray.push(item.main.temp)

        })
       let avTemp=(averageTemp/Object.keys(speceficDayDetails).length).toFixed(2)


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
       
           let weatherAveraged =speceficDayDetails.find(item => item.weather[0].id === a[indexOfArr]).weather
        
           tempArray.sort()
      dayDataArray = {
        date: speceficDayDetails[0].dt_txt.split(" ")[0],
        day: numberOfDay.toString().split(" ")[0],
        weather: weatherAveraged,
        temp: avTemp,
        minTemp:tempArray[0],
        maxTemp:tempArray[tempArray.length - 1]
      };
    }
  } 

  return (
    <div>
        <section className='main-section'></section>
      {loading == true ? (
        <Loading></Loading>
      ) : (
        <>
          {error ? (
            <div className='text-center mt-4'>{errorMessage}

            </div>
          ) : (
            <>
              {" "}
              {speceficDayDetails.length == 0 ? (
                <div className='text-center mt-4'>OPS! We can't find any Data with this URL
                </div>
              ) : (
                <>
                  <Product
                    data={dayDetails}
                    dayDataArray={dayDataArray}
                  ></Product>
                </>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}
const mapStateToProps = ({
  product: { dayDetails, loading, error, errorMessage },
}) => ({
  dayDetails: dayDetails,
  loading: loading,
  error,
  errorMessage,
});
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ handleGetDetailOfDay }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(DayDetail);
