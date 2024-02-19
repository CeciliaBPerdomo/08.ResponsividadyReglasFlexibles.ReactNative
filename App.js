import { StyleSheet, StatusBar, SafeAreaView } from 'react-native'
import {  useState } from 'react'

import Home from './src/screen/Home'
import ProductsByCategory from './src/screen/ProductsByCategory'
import ProductDetail from './src/screen/ProductDetail'

import { useFonts } from "expo-font"
import { fontCollection } from './src/utils/global/fonts'
import colors from './src/utils/global/colors'


const App = () => {
  const [categorySelected, setCategorySelected] = useState("")
  const [fontsLoaded] = useFonts(fontCollection)
  const [productId, setProductId] = useState(0)

  if (!fontsLoaded) return null //Si no esta cargada que no devuelva nada

  const selectedCategoryState = (category) => {
    setCategorySelected(category)
  }

  const selectedProductId = (id) => {
    setProductId(id)
  }

  return (
    <>
      <StatusBar
        backgroundColor={colors.green1}
        barStyle={"dark-content"}
      />

      <SafeAreaView style={styles.container}>
        {categorySelected ?
          productId ?
            <ProductDetail productId={productId} />
            :
            <ProductsByCategory
              selectedProductId={selectedProductId}
              categorySelected={categorySelected}
            />
          :
          <Home selectedCategoryState={selectedCategoryState} />
        }
      </SafeAreaView>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})