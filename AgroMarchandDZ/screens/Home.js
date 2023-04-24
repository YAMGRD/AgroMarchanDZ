import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();



export default function Home({navigation}) {

  return (
    <View style={styles.container}>
      <View>
<Tab.Navigator>
  <Tab.Screen name="Screen1" component={ReviewDetails} />
</Tab.Navigator>
        
        <TouchableOpacity   >
          <Text>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin:20,
    marginTop:30,
    backgroundColor: '#fff',
    justifyContent: 'center',
    
  },
  
});
