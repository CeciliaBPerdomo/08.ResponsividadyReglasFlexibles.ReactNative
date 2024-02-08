import { StyleSheet, Text, View, Pressable } from 'react-native'
import colors from '../utils/global/colors'
import { AntDesign } from "@expo/vector-icons" //Iconos

const Headers = ({ title }) => {
    return (
        <View style={styles.container}>
            {/* <Pressable
                onPress={handleCategory}
            >
                <AntDesign name="back" size={30} color={"blue"} style={styles.flecha} />
            </Pressable> */}

            <Text style={styles.text}>
                {title}
            </Text>

        </View>
    )
}

export default Headers

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green1,
        height: 80,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        // flexDirection: "row",
        // justifyContent: "space-start",
        // padding: 10,
        // gap: 5,
    },

    text: {
        fontSize: 30,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 60
    }
})