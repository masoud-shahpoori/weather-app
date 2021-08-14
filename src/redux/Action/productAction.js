// export const ProductActioin={

// }

// export const searchStart = () => ({
//     type: 'SEARCHSTART',

// })
// const finishFetch = (payload) => ({
//     type: 'finishedFetch',
//     payload: payload,
// })

// export const  fetchProduct= () => {
// return (dispatch) =>{
//     dispatch(searchStart())
//     fetch('https://api.openweathermap.org/data/2.5/forecast?q=london&appid=74008333cb37777333559d6b1df88691')
//     .then(response => response.json())
//     .then(json => dispatch(finishFetch(json)) )

//     }
// }

// export const  handleSearch= (query) => {
// return (dispatch) =>{
//     dispatch(searchStart())
//     fetch('https://api.openweathermap.org/data/2.5/forecast?q=london&appid=74008333cb37777333559d6b1df88691')
//     .then(json => dispatch(finishFetch(json)) )
//     }
// }

import axios from "axios";

const startFetch = (query) => ({
  type: "SEARCHSTART",
  query
});
const finishFetch = (payload) => ({
  type: "finishedFetch",
  payload: payload,
});
const getError = (message) => ({
  type: "getError",
  message:message,
});

var cancel;
var CancelToken = axios.CancelToken;

export const handleSearch = (query) => {
  return (dispatch) => {
    dispatch(startFetch(query));

    const searchUrl = `
    https://api.openweathermap.org/data/2.5/forecast?q=${query}&units=metric&appid=74008333cb37777333559d6b1df88691
    `;
    let preApiCall = () => {
      if (cancel != undefined) {
        cancel();
        
      }
    };
    preApiCall();
    axios({
      method: "get",
      url: searchUrl,
      cancelToken: new CancelToken(function executor(c) {
        cancel = c;
      }),
    })
      .then((response) => {
        // setTimeout(() => {
          dispatch(finishFetch(response.data));
        // }, 1000);
      })
      .catch((error) => {
        dispatch(finishFetch([]));
        dispatch(getError("We Can't Find Any City"));
        // console.log(error.response.data.cod)
        
     
        
        
      });
  };
};

const startFetchDayDetail = () => ({
  type: "getDayDetail",
});
const finishFetchDayDetail = (payload) => ({
  type: "finishedFetchDayDetail",
  payload: payload,
});
export const handleGetDetailOfDay = (date, city) => {
  return (dispatch) => {
    dispatch(startFetchDayDetail());

    const searchUrl = `
      https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=74008333cb37777333559d6b1df88691
      `;


    axios({
      method: "get",
      url: searchUrl,
    })
      .then((response) => {
        setTimeout(() => {
          dispatch(finishFetchDayDetail(response.data));
        }, 1500);
      })
      .catch((error) => {
        
        setTimeout(() => {
          dispatch(finishFetch([]));
          dispatch(getError("can't fetch data"));
        }, 1000);
      });
  };
};

export const resetResult = () => ({
  type: "resetResult",
});