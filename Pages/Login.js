import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, Image, Alert } from 'react-native';
import axios from 'axios';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  componentDidMount = () =>{


  }

  componentWillUnmount = () =>{

  }

  setUsername = (username) => {
    this.setState({ username });
  };

  setPassword = (password) => {
    this.setState({ password });
  };

  login = async () => {
    const { username, password } = this.state;

    const validUsername = 'Admin';
    const validPassword = 'Admin@123';

    if (username === validUsername && password === validPassword) {
      await AsyncStorage.setItem('Login', '');
      const apiKey = '3d6e95a238f678f877ba4cd59591b50d';
      const seriesId = '1399'; 


      const url = `https://api.themoviedb.org/3/tv/${seriesId}?api_key=${apiKey}`;

      axios.get(url)
        .then(response => {
          // handle the response, e.g., navigate to HomePage with data
          this.props.navigation.navigate('HomePage', { data: response.data });
          Toast.show('Login Successfull');
          
          
        })
        
        .catch(error => {
          // handle the error
          Alert.alert('Error', 'Failed to fetch data');
          console.error(error);
        });

        
    } else {
      Alert.alert('Error', 'Invalid username or password');
    }
  };

  render() {
    return (
      <View style={styles.outerContainer}>
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
        
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <Text style={styles.title}>Sign In</Text>
            <Text style={styles.subtitle}>Sign In To Your Self Service Portal</Text>
            <TextInput
              style={styles.input}
              placeholder="Username"
              value={this.state.username}
              onChangeText={this.setUsername}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={this.state.password}
              onChangeText={this.setPassword}
              secureTextEntry
            />
            <TouchableOpacity style={styles.button} onPress={this.login}>
              <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#fff', // Outer container background color
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
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0D111C', // Container background color
  },
  innerContainer: {
    width: '90%',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Inner container background color
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#263E60',
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 12,
    backgroundColor: 'white',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#FF7D65',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginScreen;






///Method 2

// import React, { Component } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, Image, Alert } from 'react-native';
// import axios from 'axios';
// import Toast from 'react-native-simple-toast';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

// class LoginScreen extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: '',
//       password: '',
//     };
//   }

//   componentDidMount = () => {
//     this.checkLoginStatus();
//   }

//   componentWillUnmount = () =>{

//   }

//   setUsername = (username) => {
//     this.setState({ username });
//   };

//   setPassword = (password) => {
//     this.setState({ password });
//   };

//   login = async () => {
//     const { username, password } = this.state;

//     const validUsername = 'Movies';
//     const validPassword = 'Movie@123';

//     if (username === validUsername && password === validPassword) {
//       const apiKey = '3d6e95a238f678f877ba4cd59591b50d';
//       const seriesId = '1399'; // Replace with your actual series_id (example: Game of Thrones ID)

//       // Constructing the correct API URL
//       const url = `https://api.themoviedb.org/3/tv/${seriesId}?api_key=${apiKey}`;

//       axios.get(url)
//         .then(response => {
//           // handle the response, e.g., navigate to HomePage with data
//           this.props.navigation.navigate('HomePage', { data: response.data });
//           Toast.show('Login Successfull');
//           AsyncStorage.setItem('isLoggedIn', 'true');
//         })
//         .catch(error => {
//           // handle the error
//           Alert.alert('Error', 'Failed to fetch data');
//           console.error(error);
//         });
//     } else {
//       Alert.alert('Error', 'Invalid username or password');
//     }
//   };

//   checkLoginStatus = async () => {
//     const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
//     if (isLoggedIn === 'true') {
//       // User is already logged in, navigate to HomePage
//       this.props.navigation.navigate('HomePage');
//     }
//   }

//   render() {
//     return (
//       <View style={styles.outerContainer}>
//         <View style={styles.header}>
//           <View style={styles.titleContainer}>
//             <Image
//               source={require('./assets/toppng.png')}
//               style={{
//                 width: 30,
//                 height: 40,
//                 position: 'absolute',
//                 left: '5%',
//               }}
//             />
//           </View>
//         </View>
        
//         <View style={styles.container}>
//           <View style={styles.innerContainer}>
//             <Text style={styles.title}>Sign In</Text>
//             <Text style={styles.subtitle}>Sign In To Your Self Service Portal</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Username"
//               value={this.state.username}
//               onChangeText={this.setUsername}
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="Password"
//               value={this.state.password}
//               onChangeText={this.setPassword}
//               secureTextEntry
//             />
//             <TouchableOpacity style={styles.button} onPress={this.login}>
//               <Text style={styles.buttonText}>LOGIN</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   outerContainer: {
//     flex: 1,
//     backgroundColor: '#fff', // Outer container background color
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
//   headerText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#0D111C', // Container background color
//   },
//   innerContainer: {
//     width: '90%',
//     padding: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'white', // Inner container background color
//     borderRadius: 10,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 8,
//     color: '#263E60',
//   },
//   subtitle: {
//     fontSize: 14,
//     color: '#888',
//     marginBottom: 24,
//     textAlign: 'center',
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginBottom: 12,
//     backgroundColor: 'white',
//   },
//   button: {
//     width: '100%',
//     height: 50,
//     backgroundColor: '#ff6b5c',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 10,
//     marginTop: 12,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default LoginScreen;




