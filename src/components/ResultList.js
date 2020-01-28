import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ResultsDetail from './ResultsDetail'

const ResultList = ({ title, results }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
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
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 15,
    },
    container: {
        marginBottom: 10
    }
})

export default ResultList;