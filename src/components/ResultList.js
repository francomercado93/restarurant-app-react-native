import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ResultsDetail from './ResultsDetail'

const ResultList = ({ title, results }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
            {/* <Text>Resultados: {results.length}</Text> */}
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={result => result.id}
                renderItem={({ item }) => {
                    return <ResultsDetail result={item} />
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 15,
        // marginTop: 5
    },
    container: {
        marginBottom: 5
    }
})

export default ResultList;