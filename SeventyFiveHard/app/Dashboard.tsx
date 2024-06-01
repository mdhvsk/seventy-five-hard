import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faGlassWaterDroplet } from '@fortawesome/free-solid-svg-icons/faGlassWaterDroplet'
import { faCamera } from '@fortawesome/free-solid-svg-icons/faCamera'
import { faUtensils } from '@fortawesome/free-solid-svg-icons/faUtensils'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons/faBookOpen'
import { faPersonRunning } from '@fortawesome/free-solid-svg-icons/faPersonRunning'
import { useRouter } from 'expo-router'
import Header from '@/components/navigation/Header'

type Props = {}

const Dashboard = (props: Props) => {
    const router = useRouter();

    return (

        <LinearGradient
            colors={['#E6EFF0', '#EADDF6']} // Adjust colors as per your design
            style={styles.page}
        >
            <View style={styles.content}>
            <Header/>

                <Text style={styles.header}>
                    Welcome Back
                </Text>
                <View style={styles.component}>
                </View>
                <Text style={styles.header}>
                        Today's Goals
                    </Text>
                <View style={styles.component}>
                    
                    <TouchableOpacity style={styles.icon} onPress={() => router.push('/Water')}>
                        <FontAwesomeIcon icon={faGlassWaterDroplet} size={24} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icon} onPress={() => router.push('/Exercise')}>
                        <FontAwesomeIcon icon={faPersonRunning} size={24} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icon}>
                        <FontAwesomeIcon icon={faBookOpen} size={24} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icon}>
                        <FontAwesomeIcon icon={faUtensils} size={24} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icon}>
                        <FontAwesomeIcon icon={faCamera} size={24} />
                    </TouchableOpacity>

                </View>
            </View>

        </LinearGradient>

    )
}

export default Dashboard


const styles = StyleSheet.create({

    page: {
        flex: 1
    },
    content: {
        marginTop: 50,

    },
    component: {
        backgroundColor: 'white',
        marginVertical: 10,
        borderRadius: 10,
        marginHorizontal: 25,
        paddingHorizontal: 25,
        paddingVertical: 75,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    header: {
        fontSize: 25,
        paddingHorizontal: 25,
        fontWeight: '400'
    },
    icon: {
        borderColor: 'black',
        borderWidth: 5,
        padding: 10,
        borderRadius: 50

    }

})