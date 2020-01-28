import React from 'react'
import { View, Text, StyleSheet, Image } from "react-native"


const ResultsDetail = ({ result }) => {
    return (<View style={styles.container}>
        {result.image_url
            ? <Image style={styles.image} source={{ uri: result.image_url }} />
            // Si el restaurant no tiene una imagen se muestra una imagen local
            : <Image style={styles.image} source={require('../../assets/ilustracion-pizza_8319-36.jpg')} />}
        <Text style={styles.name}>{result.name}</Text>
        <Text>{result.rating} Estrellas, {result.review_count} Reviews</Text>
    </View>)
}
const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    image: {
        width: 250,
        height: 150,
        borderRadius: 4,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold',
        fontSize: 18
    }
})

export default ResultsDetail;