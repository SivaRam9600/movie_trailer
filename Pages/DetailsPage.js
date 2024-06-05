

// No play icon Correct Code

// import React, { Component } from 'react';
// import { View, Text, Image, StyleSheet, BackHandler, Dimensions } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import YoutubePlayer from 'react-native-youtube-iframe';


// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

// class DetailsPage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       playVideo: false,
//       isFullScreen: false,
//     };

//     this.backButtonClick = this.backButtonClick.bind(this);
//   }

//   componentDidMount() {
//     BackHandler.addEventListener('hardwareBackPress', this.backButtonClick);
//   }

//   componentWillUnmount() {
//     BackHandler.removeEventListener('hardwareBackPress', this.backButtonClick);
//   }

//   backButtonClick() {
//     this.props.navigation.goBack(null);
//     return true;
//   }

//   trialer = () => {
//     this.setState({ playVideo: true, isFullScreen: true });
//   }

//   render() {
//     const { item } = this.props.route.params;
//     const { playVideo, isFullScreen } = this.state;

//     const screenHeight = Dimensions.get('window').height;
//     const screenWidth = Dimensions.get('window').width;

//     return (
// <>

//       <View style={styles.header}>
//       <View style={styles.titleContainer}>
//         <Image
//           source={require('./assets/toppng.png')}
//           style={{
//             width: 30,
//             height: 40,
//             position: 'absolute',
//             left: '5%',
//           }}
//         />
//       </View>
//     </View>
//       <View style={isFullScreen ? styles.fullScreenContainer : styles.container}>
//         <View style={isFullScreen ? styles.fullScreenVideoContainer : styles.imageContainer}>
//           {!playVideo ? (
//             <TouchableOpacity onPress={this.trialer}>
//               <Image source={item.image} style={styles.image} />
            

//             </TouchableOpacity>
//           ) : (
//             <YoutubePlayer
//               height={isFullScreen ? screenHeight : 300}
//               width={isFullScreen ? screenWidth : '100%'}
//               play={true}
//               videoId={item.url}
//             />
//           )}
//         </View>

        



//         {!isFullScreen && (
//           <View style={styles.detailsContainer}>
//             <Text style={styles.title}>{item.title}</Text>
//             <Text style={styles.detailText}>Rating: {item.rating} / 5</Text>
//             <Text style={styles.detailText}>Language: {item.language}</Text>
//             <Text style={styles.detailText}>Release Date: {item.releaseDate}</Text>

//             <Text style={styles.description}>{item.description}</Text>
           
//           </View>
          
//         )}
      
//       </View>
      
//       </>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     backgroundColor: '#24446B',
//     padding: 10,
//   },

//   header: {
//     flexDirection: 'row',
//     height: 50,
//     width: windowWidth,
//     backgroundColor: '#263E60', // Steel Blue
//     alignItems: 'center',
//     paddingHorizontal: 16,
//   },

//   titleContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },




//   fullScreenContainer: {
//     flex: 1,
//     backgroundColor: '#000',
//     marginTop:40,
//   },
//   imageContainer: {
//     width: '40%',
//   },
//   fullScreenVideoContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   image: {
//     width: '100%',
//     height: undefined,
//     aspectRatio: 1,
//   },
//   detailsContainer: {
//     width: '60%',
//     paddingLeft: 10,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginBottom: 10,
//   },
//   detailText: {
//     fontSize: 16,
//     color: '#fff',
//     marginBottom: 5,
//   },
//   description: {
//     width: '100%',
//     fontSize: 14,
//     color: '#fff',
//     // marginTop: 20,
//     // left: 0,
//   },
// });

// export default DetailsPage;





///The Play Icon Image 


import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, BackHandler, Dimensions,Alert} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import YoutubePlayer from 'react-native-youtube-iframe';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class DetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playVideo: false,
      isFullScreen: false,
    };

    this.backButtonClick = this.backButtonClick.bind(this);
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backButtonClick);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backButtonClick);
  }

  backButtonClick() {
    this.props.navigation.goBack(null);
    return true;
  }

  trialer = () => {
    this.setState({ playVideo: true, isFullScreen: true });
  }


  logout = () =>{

    Alert.alert(
      'Logout',
      'Do you want log out page',
      [
        { text: 'Yes', onPress: () => this.props.navigation.navigate('Login') },
        { text: 'No', onPress: () => console.log('NO Pressed') },
      ],
      { cancelable: false }
    );

    return true;
    }

  render() {
    const { item } = this.props.route.params;
    const { playVideo, isFullScreen } = this.state;

    const screenHeight = Dimensions.get('window').height;
    const screenWidth = Dimensions.get('window').width;

    return (
      <>
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

          <View>
            <TouchableOpacity onPress={this.logout}>
            <Text style={{color:'#FFFFFF',fontWeight:'bold'}}>Log Out</Text>
            </TouchableOpacity>
          </View>



        </View>
        <View style={isFullScreen ? styles.fullScreenContainer : styles.container}>
          <View style={isFullScreen ? styles.fullScreenVideoContainer : styles.imageContainer}>
            {!playVideo ? (
              <>
              <TouchableOpacity onPress={this.trialer} style={styles.imageWrapper}>
                <Image source={item.image} style={styles.image} />
                <Image source={require('./assets/play_icon.png')} style={styles.playIcon} />
              </TouchableOpacity>
              <View style={{marginVertical:10,}}>
              <Text style={styles.description}>{item.description}</Text> 
              </View>
              </>
            ) : (
              <YoutubePlayer
                height={isFullScreen ? screenHeight : 300}
                width={isFullScreen ? screenWidth : '100%'}
                play={true}
                videoId={item.url}
              />
            )}
          </View>
          {!isFullScreen && (
            <View style={styles.detailsContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.detailText}>Rating: {item.rating} / 5</Text>
              <Text style={styles.detailText}>Language: {item.language}</Text>
              <Text style={styles.detailText}>Release Date: {item.releaseDate}</Text>
              {/* <Text style={styles.description}>{item.description}</Text> */}
            </View>
          )}
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#24446B',
    padding: 10,
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
  fullScreenContainer: {
    flex: 1,
    backgroundColor: '#000',
    marginTop: 40,
  },
  imageContainer: {
    width: '40%',
    position: 'relative',
  },
  fullScreenVideoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    position: 'relative',
    // width: '100%',
    // height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  playIcon: {
    position: 'absolute',
    width: 40,
    height: 40,
  },
  detailsContainer: {
    width: '60%',
    paddingLeft: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  detailText: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 5,
  },
  description: {
    width: '250%',
    fontSize: 14,
     color: '#fff',
  },
});

export default DetailsPage;




