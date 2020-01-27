import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp'
import { FlatList } from 'react-native-gesture-handler';

const SearchScreen = () => {

    const [termino, setTermino] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async () => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    // Si el parametro que le pasamos es igual a la key se puede usar term en vez de term: term
                    term: termino,
                    location: 'buenos aires'
                }
            });
            setResults(response.data.businesses);
        } catch (e) {
            setErrorMessage('Algo salió mal');
        }
    }

    return (
        <View>
            <SearchBar
                term={termino}
                onTermChange={setTermino}
                onTermSubmit={searchApi}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>Se encontraron: {results.length} restaurantes</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default SearchScreen;