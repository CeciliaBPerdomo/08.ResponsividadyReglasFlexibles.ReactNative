import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ShadowPrimary from './wrappers/ShadowPrimary'
import colors from '../utils/global/colors'

const CardCategory = ({ item }) => {
    return (
        <ShadowPrimary style={styles.container}>
            <Text style={styles.texto}>
                {item}
            </Text>
        </ShadowPrimary>
    )
}

export default CardCategory

const styles = StyleSheet.create({
    container: {
        width: "80%",
        backgroundColor: colors.green2,
        marginHorizontal: 40,
        marginVertical: 10,
        padding: 20,
        alignItems: "center",
        borderRadius: 10,
       justifyContent: "center"
    },

    texto: {

    }
})