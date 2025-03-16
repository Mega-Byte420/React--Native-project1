import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'

const Flatelist = () => {
    //Array ki form me data ho ga to kam kare ga wrna nahe kare gi

    const profile = [
        { id: 1, name: "John Doe", address: "123 Main Street, New York, NY" },
        { id: 2, name: "Jane Smith", address: "456 Elm Street, Los Angeles, CA" },
        { id: 3, name: "Michael Johnson", address: "789 Oak Avenue, Chicago, IL" },
        { id: 4, name: "Emily Davis", address: "101 Pine Road, Houston, TX" },
        { id: 5, name: "David Brown", address: "202 Maple Lane, Miami, FL" },
        { id: 6, name: "Olivia Wilson", address: "303 Birch Street, Dallas, TX" },
        { id: 7, name: "James Anderson", address: "404 Cedar Drive, San Francisco, CA" },
        { id: 8, name: "Sophia Martinez", address: "505 Walnut Avenue, Seattle, WA" },
        { id: 9, name: "Benjamin Thomas", address: "606 Cherry Street, Denver, CO" },
        { id: 10, name: "Emma Garcia", address: "707 Poplar Lane, Boston, MA" },
        { id: 11, name: "Liam Rodriguez", address: "808 Redwood Blvd, Phoenix, AZ" },
        { id: 12, name: "Charlotte Lee", address: "909 Hickory Road, Atlanta, GA" },
        { id: 13, name: "William Hernandez", address: "1001 Magnolia Ave, Nashville, TN" },
        { id: 14, name: "Amelia King", address: "1102 Sycamore Street, Austin, TX" },
        { id: 15, name: "Elijah Scott", address: "1203 Pinecrest Drive, Orlando, FL" },
        { id: 16, name: "Mia Perez", address: "1304 Willow Court, Portland, OR" },
        { id: 17, name: "Ethan Adams", address: "1405 Aspen Circle, Charlotte, NC" },
        { id: 18, name: "Harper Nelson", address: "1506 Dogwood Drive, San Diego, CA" },
        { id: 19, name: "Alexander Carter", address: "1607 Alder Road, Columbus, OH" },
        { id: 20, name: "Evelyn Mitchell", address: "1708 Beech Avenue, Kansas City, MO" },
        { id: 21, name: "Daniel Walker", address: "1809 Pinecone Lane, Minneapolis, MN" },
        { id: 22, name: "Avery Hall", address: "1901 Elmwood Street, Indianapolis, IN" },
        { id: 23, name: "Henry Young", address: "2002 Cypress Avenue, Tampa, FL" },
        { id: 24, name: "Scarlett Allen", address: "2103 Spruce Lane, New Orleans, LA" },
        { id: 25, name: "Sebastian Wright", address: "2204 Cedar Crest Drive, St. Louis, MO" },
        { id: 26, name: "Luna Green", address: "2305 Hemlock Blvd, Sacramento, CA" },
        { id: 27, name: "Jack Baker", address: "2406 Maplewood Ave, Salt Lake City, UT" },
        { id: 28, name: "Grace Gonzalez", address: "2507 Pecan Street, Pittsburgh, PA" },
        { id: 29, name: "Lucas Turner", address: "2608 Olive Branch Road, Raleigh, NC" },
        { id: 30, name: "Chloe Phillips", address: "2709 Fir Tree Court, Detroit, MI" }
    ];
    
  const profileItem = ({item})=>(
    <View style={style.container}>
        <Text style={style.title}>
            {item.name}
        </Text>
        <Text style={style.title}>
            {item.addressss}
        </Text>
    </View>
  )



  return (
    <View>
      <FlatList
        data={profile}
        renderItem={profileItem}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

const style = StyleSheet.create({
    container:{
        backgroundColor:"lightgrey",
        borderColor :"red",
        borderWidth:1,
        padding:20,
        borderRadius:4,
        margin:10,
        
    },
    title:{
        color: "red",
        fontSize:8
    }
})



export default Flatelist