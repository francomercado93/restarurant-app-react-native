import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async searchTerm => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    // Si el parametro que le pasamos es igual a la key se puede usar term en vez de term: term
                    term: searchTerm,
                    location: 'buenos aires'
                }
            });
            setResults(response.data.businesses);
        } catch (e) {
            setErrorMessage('Algo salió mal');
        }
    }

    useEffect(() => {
        searchApi('pasta');
    }, []);

    return [searchApi, results, errorMessage];
}
