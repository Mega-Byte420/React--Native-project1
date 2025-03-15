import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import Child from './Child'

const Pare = () => {
    const [count ,setCount] =useState (0);

  return (
    <View>
      <Text>Pare</Text>
      <Button title='Press Count' onPress={()=>{setCount(count+1)}}/>
      <Child data ={count}/>
    </View>
  )
}

export default Pare