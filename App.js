import { StyleSheet, Text, View } from 'react-native'
import Home from './src/screen/Home'
import ProductsByCategory from './src/screen/ProductsByCategory'
import { useEffect, useState } from 'react'
import { useFonts } from "expo-font"
import { fontCollection } from './src/utils/global/fonts'


const App = () => {
  const [categorySelected, setCategorySelected] = useState("")
  const [ fontsLoaded ] = useFonts({fontCollection})

  // if (!fontsLoaded) return null //Si no esta cargada que no devuelva nada
  
  // useEffect(() => {
  //   console.log(categorySelected)
  // }, [categorySelected])

  const selectedCategoryState = (category) => {
    setCategorySelected(category)
  }

  return (
    <>
      {categorySelected ?
        <ProductsByCategory categorySelected={categorySelected}/> :
        <Home selectedCategoryState={selectedCategoryState} />
      }
    </>
  )
}

export default App

const styles = StyleSheet.create({})