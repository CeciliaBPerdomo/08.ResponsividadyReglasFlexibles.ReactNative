import { FlatList, StyleSheet, Text, View } from 'react-native'
import Headers from '../components/Headers'
import products from "../utils/data/productos.json"
import { useEffect, useState } from 'react'
import ProductByCategory from '../components/ProductByCategory'

const ProductsByCategory = ({ categorySelected }) => {

  const [productsFiltered, setProductsFiltered] = useState([])

  useEffect(() => {
    setProductsFiltered(products.filter(product => product.category === categorySelected))
  }, [categorySelected])

  return (
    <>
      <Headers title={categorySelected || "Productos"} />
      {/* <Search handlerKeyWord={handlerKeyWord} />*/}
      <FlatList
        style={styles.container}
        data={productsFiltered}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ProductByCategory item={item}/>}
      />
    </>
  )
}

export default ProductsByCategory

const styles = StyleSheet.create({
  container: {}
})