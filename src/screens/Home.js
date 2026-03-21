import { View, Text, Button, StyleSheet } from 'react-native'

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>

      <Button title='Go to Profile'  onPress={() => navigation.navigate("Profile")}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})