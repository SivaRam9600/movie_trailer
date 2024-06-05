

//method 2


import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, Dimensions } from 'react-native';
import YoutubeIframe from 'react-native-youtube-iframe';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const GridItem = ({ item, navigation }) => {
  const [isFullScreen, setIsFullScreen] = useState(false); // State to manage full-screen mode

  const handleTrailerPress = () => {
    setIsFullScreen(true); // Enter full-screen mode on play icon press
  };

  const handleCloseFullScreen = () => {
    setIsFullScreen(false); // Exit full-screen mode
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Details', { item })}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>

        <View style={styles.ratingContainer}>
          {Array.from({ length: 5 }, (_, index) => (
            <Text key={index} style={styles.star}>
              {index < item.rating ? '★' : '☆'}
            </Text>
          ))}

          <TouchableOpacity style={styles.playIconContainer} onPress={handleTrailerPress}>
            <Image source={require('./assets/play_icon.png')} style={styles.playIcon} />
           
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      <Modal visible={isFullScreen} animationType="slide">

      <View style={styles.header}>
       <View style={styles.titleContainer}>
         <Image
          source={require('./assets/toppng.png')}
          style={{
            width: 30,
            height: 40,
            position: 'absolute',
            left: '5%',
          }}
        />
      </View>
    </View>



        <View style={styles.fullScreenContainer}>
          <YoutubeIframe
            height={Dimensions.get('window').height}
            width={Dimensions.get('window').width}
            videoId={item.url} // Assuming item.url is the YouTube video ID
            play={true}
            onChangeState={event => {
              if (event === 'ended') {
                handleCloseFullScreen();
              }
            }}
          />
          <TouchableOpacity style={styles.closeButton} onPress={handleCloseFullScreen}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    aspectRatio: 0.7,
    backgroundColor: '#24446B',
  },
  image: {
    width: '100%',
    height: '70%',
    borderRadius: 5,
  },
  title: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  star: {
    color: '#ffd700',
    marginHorizontal: 2,
  },
  playIconContainer: {
    position: 'absolute',
    right: '5%',
    bottom: 0,
  },
  playIcon: {
    width: 40,
    height: 40,
  },
  fullScreenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    marginTop:40,
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },

    header: {
    flexDirection: 'row',
    height: 50,
    width: windowWidth,
    backgroundColor: '#263E60', // Steel Blue
    alignItems: 'center',
    paddingHorizontal: 16,
  },

  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GridItem;


