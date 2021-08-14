
const initalState={
    loading: false,
    searchValue:'',
    result : [],
    dayDetails: [],
    error:false,
    errorMessage:''
}

const productReducer = (state=initalState,action)=>{
switch(action.type){
    case 'SEARCHSTART':return{...state, loading:true,error:false,searchValue:action.query};
    case 'getDayDetail':return{...state, loading:true,error:false};
    // case 'SEARCHFINISHED':return{...state};
    case 'finishedFetch':return{...state,loading:false,result:action.payload,error:false,errorMessage:''};
    case 'finishedFetchDayDetail':return{...state,loading:false,dayDetails:action.payload,error:false,errorMessage:''};

    case 'getError':return{...state, loading:false,error:true,errorMessage:action.message};
    case'resetResult':return{...state, loading:false,result:[]}
    default:return{...state}
}


}
export default productReducer