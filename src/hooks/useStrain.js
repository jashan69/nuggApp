import {useState, useEffect} from'react';
import strainApi from '../api/strain'

export default() => {
    const [result, setResult] = useState([])
    const apiRequest = async() => {
        const response = await strainApi.get('/strain')
        setResult(response.data)
    };

   useEffect(()=>{
    apiRequest();
   }, [])

    return[result, apiRequest];
};
