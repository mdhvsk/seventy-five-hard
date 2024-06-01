// import { Text, View } from "react-native";

// export default function Index() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Text>Edit app/index.tsx to edit this screen.</Text>
//     </View>
//   );
// }


import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import { useRouter } from 'expo-router';




const LoginPage = () => {
  const router = useRouter();
  return (
    <LinearGradient
      colors={['#E6EFF0', '#EADDF6']} // Adjust colors as per your design
      style={styles.container}
    >


    <View style={styles.content}>
      <Text style={styles.logo}>75 Hard</Text>
      <View style={styles.tabContainer}>
        <Text style={styles.activeTab}>Login</Text>
        <TouchableOpacity style={styles.inactiveTabButton} onPress={() => router.push('/signup')}>
          <Text style={styles.inactiveTab}>Signup</Text>
        </TouchableOpacity>      
        </View>
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
      />
      <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.button}>
        <TouchableOpacity  onPress={() => router.push('/progress')}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </LinearGradient>
      <TouchableOpacity onPress={() => router.push('/Dashboard')}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
      <View style={styles.socialLoginContainer}>
        <TouchableOpacity>
          <Image source={require('@/assets/images/google-icon.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('@/assets/images/facebook-icon.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('@/assets/images/apple-icon.png')} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>
    </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
      },
  content:{
    alignItems: 'center',
    paddingTop: 60,
  },
  logo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 30,
    display: 'flex',
    justifyContent: 'space-around' 
  },
  activeTab: {
    fontSize: 18,
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderBottomColor: '#3b5998',
    paddingBottom: 5,
    marginRight: 20,
    width: '50%',
    textAlign: 'center'
  },
  inactiveTab: {
    fontSize: 18,
    color: '#888',
    textAlign: 'center'
  },
  inactiveTabButton: {
    width: '50%'
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: 'white'
  },
  button: {
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#3b5998',
    marginBottom: 30,
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  socialIcon: {
    width: 40,
    height: 40,
  },
});

export default LoginPage;
