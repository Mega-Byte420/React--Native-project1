import { View, Text } from 'react-native'
import React from 'react'

const First = () => {
    let name  = "Abdulah";
    // JSX ME HAM EXPRESION KI RETURN VALUE DISPLAY KAR SAKTY HAN STATEMENT KI NAHE KYUN KE WO KUCH RETURN NAHE KARTA HA 
  return (
    <View>
      <Text style ={{fontWeight :"700", fontSize:40 }}>First {name}</Text>
    </View>
  );
};

export default First;