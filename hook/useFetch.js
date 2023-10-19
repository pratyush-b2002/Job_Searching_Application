
import {useState, useEffect} from 'react';
import axios from 'axios';

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/search/${endpoint}`,
        
        headers: {
          'X-RapidAPI-Key': 'c7920e034dmsh263c0cfd847fefdp16257bjsn53c0ba50fa37',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: { ...query },
    };

    const fetchData = async() =>{
        setIsLoading(true);

        try{
            const response = await axios.request
            (options);

            setData(response.data.data);
            setIsLoading(false);
        } 
        finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    };
    
    return { data, isLoading, refetch};
}

export default useFetch;