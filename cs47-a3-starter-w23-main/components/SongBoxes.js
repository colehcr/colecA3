import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';

const { windowHeight, windowWidth } = Dimensions.get('window');

export default function SongBoxes({ id, name, artist, album, duration, quantity, imageUrl }) {
  return (
    <View style={styles.item}>
      
         <Text style = {styles.index}>{id}</Text>
         
      
      <Image style={styles.image} source={{uri:imageUrl}}/>
      <View style = {styles.textSection} numberOfLines={1}>
          <Text style = {styles.whitecolor} numberOfLines={1}>{name}  </Text>
          <Text style = {styles.artistcolor}>{artist}</Text>
      </View>
      <View style = {styles.album}>
          <Text style = {styles.whitecolor}>{album}</Text>
      </View>
      <View style = {styles.duration}>
          <Text style = {styles.whitecolor}>{duration}</Text>
          </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  artistcolor: {
    color: '#B3B3B3'
  },

  whitecolor: {
    color: 'white'
  },

  index: {
    height: '20%',
    width: '5%',
    color: 'white',
  },

  album: {
    color: 'white',
    marginHorizontal: 10,
  },
  duration: {
    padding: 10,
  },

  item: {
    backgroundColor: '121212',
    padding: 8,
    marginVertical: 8,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    borderRadius: 10,
    color: 'white',
  },
  textSection: {
    padding: 0,
    marginVertical: 8,
    height: '40%',
    width: '40%',
    //flex: 1,
    //flexDirection: 'column',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    color: 'white',
    padding: 4,
  },
  image: {
    width: 75,
    height: 75,
    padding: 15,
    marginHorizontal: 10,
  }
});