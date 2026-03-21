import { View, Text, Button, StyleSheet, FlatList } from 'react-native'

import tailwind from 'twrnc'
import EmptyList from '../components/EmptyList'
import ExpenseItemCard from '../components/ExpenseItemCard'

export const expensesData = [
  {
    id: "1",
    icon: "🛒",
    title: "Grocery Shopping",
    category: "Groceries",
    amount: 250.0,
    date: "2026-03-01",
    color: "#FFD700",
  },
  {
    id: "2",
    icon: "☕",
    title: "Coffee",
    category: "Beverages",
    amount: 100.0,
    date: "2026-03-02",
    color: "#FFA500",
  },
  {
    id: "3",
    icon: "🍔",
    title: "Lunch",
    category: "Food",
    amount: 180.0,
    date: "2026-03-03",
    color: "#FF8C00",
  },
  {
    id: "4",
    icon: "🚕",
    title: "Taxi Ride",
    category: "Travel",
    amount: 320.0,
    date: "2026-03-04",
    color: "#1E90FF",
  },
  {
    id: "5",
    icon: "🎬",
    title: "Movie Ticket",
    category: "Entertainment",
    amount: 450.0,
    date: "2026-03-05",
    color: "#9370DB",
  },
  {
    id: "6",
    icon: "💡",
    title: "Electricity Bill",
    category: "Utilities",
    amount: 1200.0,
    date: "2026-03-06",
    color: "#FFD700",
  },
  {
    id: "7",
    icon: "🛍️",
    title: "Clothing",
    category: "Shopping",
    amount: 900.0,
    date: "2026-03-07",
    color: "#FF69B4",
  },
  {
    id: "8",
    icon: "⛽",
    title: "Fuel",
    category: "Transport",
    amount: 700.0,
    date: "2026-03-08",
    color: "#DC143C",
  },
];

export default function Home({ navigation }) {

  const totalAmt = expensesData.reduce((sum,item)=> sum + item.amount, 0);

  return (
    <View style={tailwind`flex-1`}>
      <View style={tailwind`px-5 pt-5 pb-3`}>
        <Text style={tailwind`font-bold text-4xl text-black`}>Hello👋</Text>
        <Text style={tailwind`text-base text-gray-500 mt-1`}>Start tracking your expenses easily</Text>
      </View>

      <View style={tailwind`bg-black rounded-3xl p-6 my-5 mx-5 items-center shadow-lg`}>
        <Text style={tailwind`text-base text-gray-400`}>Spent so far</Text>
        <Text style={tailwind`text-base text-white text-4xl font-bold mt-2 `}>{totalAmt.toFixed(2)}</Text>
      </View>

      <FlatList
        data = {expensesData}
        renderItem = {({item})=> <ExpenseItemCard item={item}/>}
        keyExtractor = {(item)=> item.id}
        contentContainerStyle = {{paddingBottem : 20}}
        ListEmptyComponent={<EmptyList/>}
      >

      </FlatList>
      {/*<Button title='Go to Profile'  onPress={() => navigation.navigate("Profile")}/>*/}
    </View>
  )
}