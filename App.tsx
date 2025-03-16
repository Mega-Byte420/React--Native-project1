import { View, Text, Button } from 'react-native';
import React from 'react';
import First from './src/components/First';
import JSx from './src/components/JSx';
import OnPress from './src/components/OnPress';
import Pare from './src/components/Pare';
import TextIn from './src/components/TextIn';
import Styling from './src/components/Styling';
import Flatelist from './src/components/Flatelist';


const App = () => {
  return (
    <View style={{padding:10}}>
      {/* <Text style={{fontSize:50}}>App</Text>
      <Text style={{fontSize:50}}>Abdullah</Text>
      <Button title='Press Here' />
      <First/>
      <JSx/>
      <OnPress/>
      <Pare/> 
      <TextIn/>
      <Styling/>*/}
      <Flatelist/>
    </View>
  );
};


export default App;