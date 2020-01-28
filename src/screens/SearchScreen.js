import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';
import { ScrollView } from 'react-native-gesture-handler';

const SearchScreen = () => {

    const [termino, setTermino] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    // Otra opcion es pasar la lista completa a los 3 ResultList y 
    // cada componente se encarga de filtrar o mostrar lo que le interesa
    const filterResultsByPrice = (price) => {
        return results.filter(result => result.price === price)
    }

    return (
        <>
            <SearchBar
                term={termino}
                onTermChange={setTermino}
                onTermSubmit={() => searchApi(termino)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text style={{ alignSelf: 'center', marginBottom: 10 }}>Se encontraron: {results.length} restaurantes</Text>
            <ScrollView>
                <ResultList
                    results={filterResultsByPrice('$')}
                    title="Barato"
                />
                <ResultList
                    results={filterResultsByPrice('$$')}
                    title="No tan barato" />
                <ResultList
                    results={filterResultsByPrice('$$$')}
                    title="Costoso" />
                <ResultList
                    results={filterResultsByPrice('$$$$')}
                    title="No entres ahí"
                />
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({});

export default SearchScreen;