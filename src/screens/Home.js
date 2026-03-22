import { View, Text, FlatList } from 'react-native'

import tailwind from 'twrnc'
import EmptyList from '../components/EmptyList'
import ExpenseItemCard from '../components/ExpenseItemCard'
import { useExpense } from '../context/ExpenseContext'


export default function Home({ navigation }) {

  const {expenses} = useExpense();
  const totalAmt = expenses.reduce((sum,item)=> sum + item.amount, 0);

  return (
    <View style={tailwind`flex-1`}>
      <View style={tailwind`px-5 pt-5 pb-3`}>
        <Text style={tailwind`font-bold text-4xl text-black`}>Hello👋</Text>
        <Text style={tailwind`text-base text-gray-500 mt-1`}>Start tracking your expenses easily</Text>
      </View>

      <View style={tailwind`bg-black rounded-3xl p-6 my-5 mx-5 items-center shadow-lg`}>
        <Text style={tailwind`text-base text-gray-400`}>Spent so far</Text>
        <Text style={tailwind`text-base text-white text-4xl font-bold mt-2 `}>{"₹ " + totalAmt.toFixed(2)}</Text>
      </View>

      <FlatList
        data = {expenses}
        renderItem = {({item})=> <ExpenseItemCard item={item}/>}
        keyExtractor = {(item)=> item.id}
        contentContainerStyle = {{paddingBottem : 20}}
        ListEmptyComponent={<EmptyList/>}
      >

      </FlatList>
    </View>
  )
}