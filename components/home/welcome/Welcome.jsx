import React, { useState } from 'react'
import { 
  View, 
  Text,
  TouchableOpacity,
  FlatList,
TextInput,
Image, } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './welcome.style'
import { SIZES, icons } from '../../../constants'

const jobTypes = [ 'Full-time', 'Part-time', 'Contract' ]

const Welcome = ({ searchTerm, setSearchTerm, handClick }) => {
  const router = useRouter()
  const [activeJobType, setactiveJobType] = useState('Full-time')

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}> Hello Iysah!</Text>
        <Text style={styles.welcomeMessage}> Find your perfect Job today</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
          style={styles.searchInput}
          value={searchTerm}
          onChangeText={ (text) => setSearchTerm(text)}
          placeholder='What are you Looking for?' />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handClick}>
          <Image source={icons.search} 
          resizeMode='contain'
          style={styles.searchBtnImage} />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList 
        data={jobTypes}
        renderItem={({ item }) => (
          <TouchableOpacity 
          style={styles.tab(activeJobType, item)}
          onPress={() => { 
            setactiveJobType(item);
            router.push(`/search/${item}`)
          }}
          >
            <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item }
        contentContainerStyle={{ columnGap: SIZES.small}}
        horizontal/>
      </View>
    </View>
  )
}

export default Welcome