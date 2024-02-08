import { Keyboard, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { AntDesign } from "@expo/vector-icons" //Iconos
import colors from '../../utils/global/colors'
import { useState } from 'react'

const Search = ({ handlerKeyWord }) => {
    const [input, setInput] = useState("")
    const [error, setError] = useState("")

    const handlerInput = (t) => {
        setInput(t)
    }

    const busqueda = () => {
        const expression = /[/.*@.*\(.*\).*/]/  //Revisa que no tenga esas expresiones regulares
        if (expression.test(input)) {
            setError("Caracteres no válidos")
            return
        } else {
            handlerKeyWord(input)
            Keyboard.dismiss() //cierra el teclado
            setError("")
        }
    }

    const reset = () => {
        handlerKeyWord("")
        handlerInput("")
        setError("")
    }

    return (
        <View>
            <View style={styles.container}>

                <TextInput
                    placeholder='Buscar'
                    style={styles.input}
                    value={input}
                    onChangeText={handlerInput}
                />

                <Pressable onPress={busqueda}>
                    {/* Lupa */}
                    <AntDesign name="search1" size={30} color={"black"} />
                </Pressable>

                <Pressable onPress={reset}>
                    {/* Cruz */}
                    <AntDesign name="closecircle" size={30} color={"black"} />
                </Pressable>
            </View>
            
            {error ?
                <Text style={styles.errorText}>{error}</Text>
                : null
            }

        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    input: {
        flex: 1,
        borderWidth: 2,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
    },

    container: {
        backgroundColor: colors.green1,
        alignItems: "center",
        flexDirection: "row",
        padding: 10,
    }, 

    errorText: {
        backgroundColor: colors.green1,
        color: "red",
        paddingHorizontal: 10,
        paddingVertical: 2
    }
})