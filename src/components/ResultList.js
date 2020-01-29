import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import ResultsDetail from './ResultsDetail'
import { withNavigation } from 'react-navigation';

const ResultList = ({ title, results, navigation }) => {

    if (!results.length) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
            {/* {results.length == 0 ? <Text style={styles.alert}>No hay restaurantes en esta categoria</Text> : null} */}
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={result => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id })}>
                            <ResultsDetail result={item} />
                        </TouchableOpacity>)
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 15
    },
    container: {
        marginBottom: 10
    },
    alert: {
        alignSelf: 'center',
        backgroundColor: '#fffed9',
        color: '#b8b443',
        padding: 20
    }
})

export default withNavigation(ResultList);