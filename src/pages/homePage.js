
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import React,{ useEffect} from 'react'
import {handleSearch,resetResult} from '../redux/Action/productAction'
import ProductList from '../product/productList'




function HomePage({handleSearch,result,loading,resetResult,searchValue,error,errorMessage}) {

  useEffect(() =>{
    setTimeout(() => {
      window.location.reload();
    },30000)
  },[])


  return (
    <div className="">
      <div className="text-center main-section">
      <div className="container-search-input">
        <p className="text-left">please enter city</p>
                <input type="text" onChange={(e) => handleSearch(e.target.value)} value={searchValue}/>

      </div>

      </div>

      <ProductList data={result} loading={loading} error={error} errorMessage={errorMessage}></ProductList>
    </div>
  );
}

const mapStateToProps = ({product:{result,loading,error,errorMessage}})=>({
  result,
  loading,
  error,
  errorMessage
})
const mapDispatchToProps = dispatch =>{

  return bindActionCreators({handleSearch,resetResult}, dispatch);

}

export default connect(mapStateToProps,mapDispatchToProps)(HomePage)  ;
