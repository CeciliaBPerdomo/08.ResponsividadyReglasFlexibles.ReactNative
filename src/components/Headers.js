import { StyleSheet, Text, View } from 'react-native'

const Headers = ({ title}) => {
    return (
        <View style={styles.container}>

            <Text style={styles.text}>
                {title}
            </Text>

        </View>
    )
}

export default Headers

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F4D678",
        height: 80,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },

    text: {
        fontSize: 30
    }
})