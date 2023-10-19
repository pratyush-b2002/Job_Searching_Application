import { useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { useRouter } from 'expo-router';
import { icons, SIZES } from '../../../constants';  

import styles from './welcome.style'

const jobTypes = ["Full-Time","Part-Time","Contractual Basis"];

const Welcome = ( {searchTerm , setSearchTerm, handleClick} ) => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState('Full-Time')

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Pratyush !</Text>
        <Text style={styles.welcomeMessage}>Find your dream job!</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) =>setSearchTerm(text)}
            placeholder="What would you like to search?"
          />

        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source = {icons.search}
            resideMode = "contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>

      </View>

      <View style = {styles.tabsContainer}>
        <FlatList
         data={jobTypes}
         renderItem={({item}) =>(
          <TouchableOpacity
            style={styles.tab(activeJobType, item)}
            onPress={() =>{
              setActiveJobType(item);
              router.push('/search/${item}')
            

            }}
          >
            <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
          </TouchableOpacity>
         )}
         keyExtractor = {item => item}
         contentContainerStyle = {{columnGap: SIZES.small}}
         horizontal 
        
         
        />
      </View>
    </View>
  )
}

export default Welcome