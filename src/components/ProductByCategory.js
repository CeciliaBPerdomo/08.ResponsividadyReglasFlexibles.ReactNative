import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import colors from '../utils/global/colors'

const ProductByCategory = ({ item }) => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: item.thumbnail }}
                style={styles.imagen}
                resizeMode="cover"
            />
            <Text style={styles.texto}>{item.id} - {item.title}</Text>
        </View>
    )
}

export default ProductByCategory

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green3,
        width: "80%",
        marginHorizontal: "10%",
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        gap: 20
    },

    texto: {
        width: "60%",
        fontSize: 16,
        color: "white"
        // fontFamily: fonts.Josefin
    },

    imagen: {
        width: 90,
        height: 90,
        borderRadius: 5
    }
})