import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {

    const [result, setResult] = useState(null);

    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <>
            <Text style={styles.title}>{result.name}</Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                style={{ alignSelf: "center" }}
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return (
                        <Image
                            style={styles.image}
                            source={{ uri: item }}
                        />
                    )
                }}
            />
        </>
    )
}
const styles = StyleSheet.create({
    image: {
        height: 250,
        width: 300,
        margin: 5
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        margin: 10
    }
})

export default ResultsShowScreen;