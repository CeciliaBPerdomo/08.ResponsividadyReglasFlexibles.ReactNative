import { StyleSheet, Text, View, FlatList } from 'react-native'
import Headers from '../components/Headers'
import Categories from '../components/Categories'


const Home = ({ selectedCategoryState }) => {

    return (
        <View>
            <Headers title="Mi e-commerce" />
            <Categories selectedCategoryState={selectedCategoryState} />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})