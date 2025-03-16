import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import styles from '../style/style'

const Styling = () => {
    //Inline styling ki precdence sab se pehle ha
    // Internal styling ki precedece ki 2 no par 
  return (
    <View>
      <Text style={styles.text} >External Styling </Text>
      <Text style={{fontSize:30 ,backgroundColor:"green"}} >Inertnal Styling</Text>
      <Text style={{fontSize:30 ,backgroundColor:"green"}} >Styling</Text>
      <Text style={{fontSize:30 ,backgroundColor:"green"}} >Styling</Text>
    
    </View>
  )
}
const style =  StyleSheet.create({

})

export default Styling 