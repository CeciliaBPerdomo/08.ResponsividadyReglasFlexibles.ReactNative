import { StyleSheet, Text, View } from 'react-native'
import Home from './src/screen/Home'
import ProductsByCategory from './src/screen/ProductsByCategory'
import { useEffect, useState } from 'react'

const App = () => {
  const [categorySelected, setCategorySelected] = useState("")

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