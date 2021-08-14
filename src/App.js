// import logo from './logo.svg';
// import './App.css';
// import {connect} from 'react-redux'
// import {bindActionCreators} from 'redux';
// import React from 'react'
// import {handleSearch} from './redux/Action/productAction'
// import ProductList from './product/productList'
// 
// 
// // 



// function App({handleSearch,result,loading}) {



//   return (
//     <div className="App">
//       <div className="text-center main-section">
//       <div className="container-search-input">
//         <p className="text-left">please enter city</p>
//                 <input type="text" onChange={(e) => handleSearch(e.target.value)} />

//       </div>

//       </div>

//       <ProductList data={result} loading={loading}></ProductList>
//     </div>
//   );
// }

// const mapStateToProps = ({product:{result,loading}})=>({
//   result:result,
//   loading:loading
// })
// const mapDispatchToProps = dispatch =>{

//   return bindActionCreators({handleSearch}, dispatch);

// }

// export default connect(mapStateToProps,mapDispatchToProps)(App)  ;

// npm i redux react-redux redux-logger redux-thunk axios bootstrap sass react-bootstrap-icons react-router-dom
import React from 'react'
import {
  Switch,
  Route,

} from "react-router-dom";
import HomePage from './pages/homePage'
import DayDetail from './pages/dayDetail'
import ErrorPage from './pages/errorPage'
import './Style/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App() {
  return (
    <Switch>
    <Route exact path="/detail/:id">
      <DayDetail />
    </Route>

    <Route exact path="/">
      <HomePage />
    </Route>
    <Route>
      <ErrorPage/>
    </Route>
  </Switch>
  )
}
