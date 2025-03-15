import { View, Text, Button, Alert } from 'react-native'
import React, { useState } from 'react'

const OnPress = () => {
    const [name, setname] = useState ('Muhammad');
    const onAction = (name)=>{
        setname(name)
        Alert.alert(`My name is ${name}`)
    }
  return (
    <View>
    <Text style ={{fontSize:10}}>{name}</Text>
      <Button title='Press Me' onPress={()=>onAction('Abdullah') }/>
    </View>
  )
}

export default OnPress