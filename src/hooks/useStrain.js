import {useState, useEffect} from'react';
import strainApi from '../api/strain'
import Axios from 'axios';


export default() => {
  const [result, setResult] = useState([])
  useEffect(()=>{
    const source = Axios.CancelToken.source()
    const apiRequest = async() => {
      try {

        const response = await strainApi.get('/strain',{cancelToken:source.token,})
        setResult(response.data)
      }catch(error){
        if(Axios.isCancel(error)){}else{
          throw error
        }
      }
    }
    apiRequest()
    return()=>{
      source.cancel()
    }
  },[])

  return[result]
}
