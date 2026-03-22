import { StyleSheet, Text, View, ScrollView, TextInput, Pressable, Alert } from 'react-native'
import { useState, useEffect } from 'react';
import tailwind from 'twrnc'
import { useExpense } from '../context/ExpenseContext';
import { CATEGORIES } from '../../constants';


const Create = ({navigation, route}) => 
  {
    const [amount,setAmount] = useState(null);
    const [title,setTitle] = useState("");
    const [category,setCategory] = useState({});

    const {addExpense} = useExpense()
    const handleAddExpense = ()=>
    {
        if(!amount || !title || !category)
        {
            Alert.alert("All fields are required");
            return;
        }

        addExpense({
          title,
          amount,
          category
        });

        navigation.goBack();
  };

    useEffect(()=> {
      if(route.params?.category){
          setCategory(route.params?.category)
        }
    },[route.params?.category])

  const handleCategoryInput = () => {
      navigation.navigate("Category");
  }

  return (
    <View>
      <ScrollView contentContainerStyle={tailwind`p-6`}>
        {/*Header Section*/}
        <Text style={tailwind`text-3xl font-bold text-black`}>Add new expense</Text>
        <Text style={tailwind`text-base text-gray-500 mt-2 mb-8`}>Enter the details of your expense to help you track your expenses</Text>
        {/*Expense Form Section*/}

        <View style={tailwind`mb-5`}>
          <Text style={tailwind`text-xl font-semibold text-gray-600 mb-2`}>
            Enter amount
          </Text>
          <TextInput 
              placeholder="$0.00" 
              style={tailwind`border-2 border-gray-300 p-4 rounded-xl text-xl`}
              value = {amount}
              onChangeText ={setAmount}
              />
        </View>

        <View style={tailwind`mb-5`}>
          <Text style={tailwind`text-xl font-semibold text-gray-600 mb-2`}>
            Title
          </Text>
          <TextInput 
              placeholder="What was this for?" 
              style={tailwind`border-2 border-gray-300 p-4 rounded-xl text-xl`}
              value = {title}
              onChangeText ={setTitle}
              />
        </View>
        {/*Input 3- category tbd*/}
        <View style={tailwind`mb-5`}>
          <Text style={tailwind`text-xl font-semibold text-gray-600 mb-2`}>
            Category
          </Text>
          <Pressable 
          style={tailwind`border border-gray-400 p-4 rounded-xl flex-row justify-between items-center`}
          onPress={handleCategoryInput}
          >
            <View style={tailwind`flex-row items-center`}>
              <Text style={tailwind`text-2xl mr-3`}>{category.icon || "🍜"}</Text>
              <Text style={tailwind`text-lg`}>{category.name || "Food"}</Text>
            </View>
            <Text style={tailwind`text-2xl`}>&gt;</Text>
          </Pressable>
        </View>

        {/*Footer Section*/}
        <Pressable style={tailwind`bg-black p-4 rounded-lg mt-8`} onPress={handleAddExpense}>
          <Text style={tailwind`text-white text-center text-lg font-bold`}>Add Expense</Text>
        </Pressable>
      </ScrollView>
    </View>
  ) 
}

export default Create

const styles = StyleSheet.create({})