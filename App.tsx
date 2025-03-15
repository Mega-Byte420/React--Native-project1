import { View, Text, Button } from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={{padding:10}}>
      <Text style={{fontSize:50}}>App</Text>
      <Text style={{fontSize:50}}>Abdullah</Text>
      <Button title='Press Here' />
      <First/>
    </View>
  );
};

const First = ()=>{
  <Text style={{fontSize:50}}>This is a second component</Text>;

};

export default App;