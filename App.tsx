import { View, Text, Button } from 'react-native';
import React from 'react';
import First from './src/components/First';
import JSx from './src/components/JSx';
import OnPress from './src/components/OnPress';
import Pare from './src/components/Pare';


const App = () => {
  return (
    <View style={{padding:10}}>
      <Text style={{fontSize:50}}>App</Text>
      <Text style={{fontSize:50}}>Abdullah</Text>
      <Button title='Press Here' />
      <First/>
      <JSx/>
      <OnPress/>
      <Pare/>
      
    </View>
  );
};


export default App;