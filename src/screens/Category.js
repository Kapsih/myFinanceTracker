import { Pressable, StyleSheet, Text, View , FlatList} from 'react-native'
import React from 'react'
import tailwind from 'twrnc'
import { CATEGORIES } from '../../constants'

const Category = ({navigation}) => {
    const renderItem = ({item}) => {
        return(
            <Pressable 
                onPress={()=> handleSelectedCategory(item)}
                style={tailwind`flex-1 items-center m-2 p-4 bg-white rounded-xl shadow-sm border border-gray-200`}>
                <Text style={tailwind`text-4xl`}>{item.icon}</Text>
                <Text style={tailwind`mt-2 text-center text-sm font-medium text-gray-700`}>{item.name}</Text>
            </Pressable>
        );
    };
    const handleSelectedCategory = (category) =>{
        navigation.popTo("BottomTabs",{
            screen: "Create",
            params: {category}
        });
    };
  
    return (
    <View style={tailwind`flex-1`}>
        <View style={tailwind`p-5`}>
            <Pressable onPress={() => navigation.goBack()}>
                 <Text style={tailwind`text-2xl font-bold`}>X</Text>
            </Pressable>
            <Text style={tailwind`text-3xl font-bold text-black mt-4`}>Select Category</Text>
            <Text style={tailwind`text-base text-gray-500 mb-4 mt-2`}>Select a category that best describes your expense</Text>
        <FlatList 
                data={CATEGORIES} 
                renderItem={renderItem}
                keyExtractor={(item) => item.id }
                numColumns={2}
                contentContainerStyle={tailwind`px-4`}
                ></FlatList>
        </View>
      
    </View>
  )
}

export default Category

const styles = StyleSheet.create({})