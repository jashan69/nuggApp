import {useState} from'react';
import strainApi from '../api/strain'

export default(id) => {
    const[result, setResult] = useState([])
    const searchApi = async () => {
        const response = await strainApi.get(`/recipe/${id}`);
        setResult(response.data) 
    }
    return[searchApi(id)]
}
