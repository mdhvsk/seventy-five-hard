
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router';



const SignupPage = () => {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>75 Hard</Text>
            <View style={styles.tabContainer}>
                <TouchableOpacity style={styles.inactiveTabButton} onPress={() => router.push('/progress')}>
                    <Text style={styles.inactiveTab}>Login</Text>
                </TouchableOpacity>         
                <Text style={styles.activeTab}>Signup</Text>
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
            <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                secureTextEntry
            />
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.button}>
                <TouchableOpacity>
                    <Text style={styles.buttonText}>Signup</Text>
                </TouchableOpacity>
            </LinearGradient>
            <TouchableOpacity>
            </TouchableOpacity>

        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 60,
        backgroundColor: '#fff',
    },
    logo: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#3b5998',
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
export default SignupPage;
