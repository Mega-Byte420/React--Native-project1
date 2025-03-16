import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const TextIn = () => {
const [text ,setText] = useState('');
;  return (
    <View>
      <Text>{text}</Text>
      <TextInput onChangeText={(value)=>{setText(value)}} style={{borderWidth:1 , borderRadius:10}} placeholder='type here ' value={text}/>
      <Button title='Press me' onPress={()=>{setText()}}/>
    </View>
  )
}

export default TextIn