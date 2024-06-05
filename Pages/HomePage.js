



import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  Dimensions,
  Image,
  FlatList,
  Linking,
  TextInput
} from 'react-native';
import SQLite from 'react-native-sqlite-storage';
import { BackHandler } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Notification from './Notification';
const db = SQLite.openDatabase({ name: 'mydb.db', location: 'default' });
import GridItem from './GridItem';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DATA = [
  { id: '1', title: 'Stranger Things', image: require('./assets/movie_image.png'), rating: 5, language: 'English', releaseDate: '24.1.25', description: " HBO's animated history of Westeros brings to life all the events that shaped the Seven Kingdoms in the thousands of years before Game of Thrones' story begins." , url:'b9EkMc79ZSU'}, 
  { id: '2', title: 'Vikings', image: require('./assets/movie2.png'), rating: 4, language: 'English', releaseDate: '24.1.25', url:'9GgxinPwAGc',description: " HBO's animated history of Westeros brings to life all the events that shaped the Seven Kingdoms in the thousands of years before Game of Thrones' story begins." , },
  { id: '3', title: 'Stranger Things', image: require('./assets/movie3.png'), rating: 5, language: 'English', releaseDate: '24.1.25', url:'d9MyW72ELq0',description: " HBO's animated history of Westeros brings to life all the events that shaped the Seven Kingdoms in the thousands of years before Game of Thrones' story begins." ,},
  { id: '4', title: 'Stranger Things', image: require('./assets/movie4.png'), rating: 4, language: 'English', releaseDate: '24.1.25', url:'xo7kna3JPk0',description: " HBO's animated history of Westeros brings to life all the events that shaped the Seven Kingdoms in the thousands of years before Game of Thrones' story begins." ,},
  { id: '5', title: 'Furiosa', image: require('./assets/movie5.jpg'), rating: 4, language: 'English', releaseDate: '24.1.25', url:'FVswuip0-co',description: " HBO's animated history of Westeros brings to life all the events that shaped the Seven Kingdoms in the thousands of years before Game of Thrones' story begins." ,},
  { id: '6', title: 'Eric', image: require('./assets/movie6.jpeg'), rating: 3, language: 'English', releaseDate: '24.1.25', url:'eGaAl_8QW2c', description: " HBO's animated history of Westeros brings to life all the events that shaped the Seven Kingdoms in the thousands of years before Game of Thrones' story begins." ,},
  { id: '7', title: 'Venom', image: require('./assets/movie7.jpeg'), rating: 4, language: 'English', releaseDate: '24.1.25', url:'__2bjWbetsA', description: " HBO's animated history of Westeros brings to life all the events that shaped the Seven Kingdoms in the thousands of years before Game of Thrones' story begins." ,},
  { id: '8', title: 'Atlas', image: require('./assets/movie8.jpeg'), rating: 3, language: 'English', releaseDate: '24.1.25', url:'Jokpt_LJpbw', description: " HBO's animated history of Westeros brings to life all the events that shaped the Seven Kingdoms in the thousands of years before Game of Thrones' story begins." , },
 
];

const numColumns = 2;

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.backButtonClick = this.backButtonClick.bind(this);
  }

  componentDidMount = async () => {
    const data = await AsyncStorage.getItem('TableCreate');

    BackHandler.addEventListener('hardwareBackPress', this.backButtonClick);
  };

  componentWillUnmount = () => {
    BackHandler.removeEventListener('hardwareBackPress', this.backButtonClick);
  };

  backButtonClick() {
    Alert.alert(
      'Exit App',
      'Do you want to exit?',
      [
        { text: 'Yes', onPress: () => BackHandler.exitApp() },
        { text: 'No', onPress: () => console.log('NO Pressed') },
      ],
      { cancelable: false }
    );

    return true;
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


  handleSearch = (text) => {
    this.setState({ searchText: text });
    const filteredData = DATA.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    this.setState({ filteredData });
  };

  renderItem = ({ item }) => <GridItem item={item} navigation={this.props.navigation} />;

  render() {
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

          {/* <TouchableOpacity style={styles.searchButton}>
            <Image
              source={require('./assets/Search_icon.png')} // Replace with your icon source
              style={styles.searchIcon}
            />
          </TouchableOpacity> */}

  {/* Search Input */}
  {/* <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search Movies"
              onChangeText={this.handleSearch}
              // value={searchText}
            />
            <Image
              source={require('./assets/Search_icon.png')} // Replace with your icon source
              style={styles.searchIcon}
            />
          </View> */}



          <View>
            <TouchableOpacity onPress={this.logout}>
            <Text style={{color:'#FFFFFF',fontWeight:'bold'}}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.container}>
          <TouchableOpacity  onPress={() => Linking.openURL('https://www.themoviedb.org/')}>
          <Image
            source={require('./assets/Home_Image.png')}
            style={styles.homeImage}
          />
          </TouchableOpacity>

          <FlatList
            data={DATA}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.id}
            numColumns={numColumns}
            key={numColumns}
          />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 50,
    width: windowWidth,
    backgroundColor: '#263E60', // Steel Blue
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  backButton: {
    width: 50,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backImage: {
    width: 24,
    height: 24,
    tintColor: 'white',
  },
  headerTitle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  container: {
    flex: 1,
    // padding: 16,
    padding: 0,
    backgroundColor: '#0D111C', // Light Gray
  },
  homeImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    // marginBottom: 16,
    bottom:10,
  },
  gridItem: {
    width: '45%',
    aspectRatio: 1,
    backgroundColor: '#FFFFFF',
    marginVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#4682B4', // Steel Blue
    elevation: 3, // Shadow effect
  },
  gridText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4682B4', // Steel Blue
  },



  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#F5F5F5', // Light Gray background for search
    borderRadius: 5,
  },


  searchInput: {
    flex: 1,
    // padding: 8,
    padding: 1,
    fontSize: 16,
  },






  searchButton: {
    position: 'absolute',
    right: 80, // Adjust position as needed
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIcon: {
    width: 24,
    height: 24,
    // tintColor: 'white', // Adjust color as needed
  },
});

export default HomePage;




////method 2
// import React, { Component } from 'react';
// import {
//   View,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   Alert,
//   Dimensions,
//   Image,
//   FlatList,
//   Linking,
//   TextInput,
// } from 'react-native';
// import SQLite from 'react-native-sqlite-storage';
// import { BackHandler } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Notification from './Notification';
// const db = SQLite.openDatabase({ name: 'mydb.db', location: 'default' });
// import GridItem from './GridItem'; // Assuming GridItem component is imported

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

// // Replace with your actual movie data
// const DATA = [
//   { id: '1', title: 'Stranger Things', image: require('./assets/movie_image.png'), rating: 5, language: 'English', releaseDate: '24.1.25', description: " HBO's animated history of Westeros brings to life all the events that shaped the Seven Kingdoms in the thousands of years before Game of Thrones' story begins." , url:'b9EkMc79ZSU'}, 
//   { id: '2', title: 'Vikings', image: require('./assets/movie2.png'), rating: 4, language: 'English', releaseDate: '24.1.25', url:'9GgxinPwAGc',description: " HBO's animated history of Westeros brings to life all the events that shaped the Seven Kingdoms in the thousands of years before Game of Thrones' story begins." , },
//   { id: '3', title: 'Stranger Things', image: require('./assets/movie3.png'), rating: 5, language: 'English', releaseDate: '24.1.25', url:'d9MyW72ELq0',description: " HBO's animated history of Westeros brings to life all the events that shaped the Seven Kingdoms in the thousands of years before Game of Thrones' story begins." ,},
//   { id: '4', title: 'Stranger Things', image: require('./assets/movie4.png'), rating: 4, language: 'English', releaseDate: '24.1.25', url:'xo7kna3JPk0',description: " HBO's animated history of Westeros brings to life all the events that shaped the Seven Kingdoms in the thousands of years before Game of Thrones' story begins." ,},
//   { id: '5', title: 'Furiosa', image: require('./assets/movie5.jpg'), rating: 4, language: 'English', releaseDate: '24.1.25', url:'FVswuip0-co',description: " HBO's animated history of Westeros brings to life all the events that shaped the Seven Kingdoms in the thousands of years before Game of Thrones' story begins." ,},
//   { id: '6', title: 'Eric', image: require('./assets/movie6.jpeg'), rating: 3, language: 'English', releaseDate: '24.1.25', url:'eGaAl_8QW2c', description: " HBO's animated history of Westeros brings to life all the events that shaped the Seven Kingdoms in the thousands of years before Game of Thrones' story begins." ,},
//   { id: '7', title: 'Venom', image: require('./assets/movie7.jpeg'), rating: 4, language: 'English', releaseDate: '24.1.25', url:'__2bjWbetsA', description: " HBO's animated history of Westeros brings to life all the events that shaped the Seven Kingdoms in the thousands of years before Game of Thrones' story begins." ,},
//   { id: '8', title: 'Atlas', image: require('./assets/movie8.jpeg'), rating: 3, language: 'English', releaseDate: '24.1.25', url:'Jokpt_LJpbw', description: " HBO's animated history of Westeros brings to life all the events that shaped the Seven Kingdoms in the thousands of years before Game of Thrones' story begins." , },
 
// ];
// const numColumns = 2;

// class HomePage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       searchText: '',
//     };

//     this.backButtonClick = this.backButtonClick.bind(this);
//   }

//   componentDidMount = async () => {
//     const data = await AsyncStorage.getItem('TableCreate');

//     BackHandler.addEventListener('hardwareBackPress', this.backButtonClick);
//   };

//   componentWillUnmount = () => {
//     BackHandler.removeEventListener('hardwareBackPress', this.backButtonClick);
//   };

//   backButtonClick() {
//     Alert.alert(
//       'Exit App',
//       'Do you want to exit?',
//       [
//         { text: 'Yes', onPress: () => BackHandler.exitApp() },
//         { text: 'No', onPress: () => console.log('NO Pressed') },
//       ],
//       { cancelable: false }
//     );

//     return true;
//   }

//   logout = () => {
//     Alert.alert(
//       'Logout',
//       'Do you want log out page',
//       [
//         { text: 'Yes', onPress: () => this.props.navigation.navigate('Login') },
//         { text: 'No', onPress: () => console.log('NO Pressed') },
//       ],
//       { cancelable: false }
//     );

//     return true;
//   };

//   handleSearch = (text) => {
//     this.setState({ searchText: text.toLowerCase() }); // Ensure case-insensitive search
//   };

//   renderItem = ({ item }) => <GridItem item={item} navigation={this.props.navigation} />;

//   render() {
//     const filteredData = this.state.searchText
//       ? DATA.filter((item) =>
//           item.title.toLowerCase().includes(this.state.searchText.toLowerCase())
//         )
//       : DATA; // Apply filtering if searchText exists

//     return (
//       <>
//         <View style={styles.header}>
//           <View style={styles.titleContainer}>
//             <Image
//               source={require('./assets/toppng.png')} // Replace with your image path
//               style={{
//                 width: 30,
//                 height: 40,
//                 position: 'absolute',
//                 left: '5%',
//               }}
//             />
//           </View>

//           <TouchableOpacity onPress={this.logout}>
//             <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Log Out</Text>
//           </TouchableOpacity>
//         </View>

//         <View style={styles.container}>
//           <TouchableOpacity onPress={() => Linking.openURL('https://www.themoviedb.org/')}>
//             <Image
//               source={require('./assets/Home_Image.png')} // Replace with your image path
//               style={styles.homeImage}
//             />
//           </TouchableOpacity>

//           <View style={styles.searchContainer}>
//             <TextInput
//               style={styles.searchInput}
//               placeholder="Search Movies"
//               onChangeText={this.handleSearch}
//               value={this.state.searchText} // Set initial display value
//             />
//             <Image
//               source={require('./assets/Search_icon.png')} // Replace with your image path
//               style={styles.searchIcon}
//             />
//           </View>

//           <FlatList
//             data={filteredData} // Render filtered data if searchText exists
//             renderItem={this.renderItem}
//             keyExtractor={(item) => item.id}
//             numColumns={numColumns}
//             key={numColumns}
//           />
//         </View>
//       </>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   header: {
//     flexDirection: 'row',
//     height: 50,
//     width: windowWidth,
//     backgroundColor: '#263E60', // Steel Blue
//     alignItems: 'center',
//     paddingHorizontal: 16,
//   },
//   backButton: {
//     width: 50,
//     height: '100%',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   backButtonImage: {
//     width: 24,
//     height: 24,
//     tintColor: 'white',
//   },
//   headerTitle: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   titleContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   headerText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   container: {
//     flex: 1,
//     padding: 0, // Adjust padding as needed
//   },
//   homeImage: {
//     width: '100%',
//     height: 200,
//     resizeMode: 'contain',
//     marginBottom: 16,
//   },
//   gridItem: {
//     width: '45%',
//     aspectRatio: 1,
//     backgroundColor: '#FFFFFF',
//     marginVertical: 12,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 10,
//     borderWidth: 2,
//     borderColor: '#4682B4', // Steel Blue
//     elevation: 3, // Shadow effect
//   },
//   gridText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#4682B4', // Steel Blue
//   },

//   // Styles for search functionality
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     flex: 1,
//     backgroundColor: '#F5F5F5', // Light Gray background for search
//     borderRadius: 5,
//     paddingHorizontal: 8, // Adjust padding as needed
//   },
//   searchInput: {
//     flex: 1,
//     padding: 0, // Remove padding for better alignment with icon
//     fontSize: 16,
//   },
//   searchIcon: {
//     width: 24,
//     height: 24,
//     tintColor: '#4682B4', // Adjust color as needed (consider matching Steel Blue)
//   },

// });

// export default HomePage;

