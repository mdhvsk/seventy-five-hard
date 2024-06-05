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
import CircularProgress from 'react-native-circular-progress-indicator';
import { SafeAreaView } from 'react-native-safe-area-context'



type Props = {}

const Dashboard = (props: Props) => {
    const router = useRouter();

    return (


        <LinearGradient
            colors={['#E6EFF0', '#EADDF6']} // Adjust colors as per your design
            style={styles.page}
        >
            <View style={styles.content}>
                <Header />

            
                <View style={styles.component}>
                    <CircularProgress
                        value={80}
                        activeStrokeColor={'#E6EFF0'}
                        activeStrokeSecondaryColor={'#EADDF6'}
                        
                    />
                    <Text style={styles.header}>
                    Day 2 
                </Text>
                <Text style={styles.header}>
                    Attempt 2 
                </Text>

                </View>
                <Text style={styles.header}>
                    Today's Goals
                </Text>
                <View style={styles.component}>
                    <View style={styles.task} >
                        <TouchableOpacity style={styles.icon} onPress={() => router.push('/Water')}>
                            <FontAwesomeIcon icon={faGlassWaterDroplet} size={24}/>
                        </TouchableOpacity>
                        <Text style={styles.iconText}>Water</Text>
                    </View>

                    <View style={styles.task} >
                        <TouchableOpacity style={styles.icon} onPress={() => router.push('/Exercise')}>
                            <FontAwesomeIcon icon={faPersonRunning} size={24} />
                        </TouchableOpacity>
                        <Text style={styles.iconText}>Exercise</Text>
                    </View>
                    <View style={styles.task} >
                        <TouchableOpacity style={styles.icon} onPress={() => router.push('/Reading')}>
                            <FontAwesomeIcon icon={faBookOpen} size={24} />
                        </TouchableOpacity>
                        <Text style={styles.iconText}>Reading</Text>
                    </View>
                    <View style={styles.task} >
                        <TouchableOpacity style={styles.icon} onPress={() => router.push('/Diet')}>
                            <FontAwesomeIcon icon={faUtensils} size={24} />
                        </TouchableOpacity>
                        <Text style={styles.iconText}>Diet</Text>
                    </View>
                    <View style={styles.task} >
                        <TouchableOpacity style={styles.icon} onPress={() => router.push('/Photo')}>
                            <FontAwesomeIcon icon={faCamera} size={24} />
                        </TouchableOpacity>
                        <Text style={styles.iconText}>Photo</Text>
                    </View>
                </View>

                <Text style={styles.header}>
                    Today's Logs
                </Text>

                <View style={styles.log}>
                    <View style={styles.time}>
                        <Text style={styles.timeText}>2:00 p.m </Text>
                    </View>
                    <View style={styles.goal}>
                    </View>
                </View>
                <View style={styles.log}>
                    <View style={styles.time}>
                        <Text style={styles.timeText}>2:00 p.m </Text>
                    </View>
                    <View style={styles.goal}>
                    </View>
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
        borderRadius: 20,
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
    task: {
        display: 'flex',
        flexDirection: 'column'
    },
    icon: {
        borderColor: 'black',
        borderWidth: 3,
        padding: 10,
        borderRadius: 50,
        color: 'black',
    },
    iconText: {
        textAlign: 'center'
    },
    log: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 10,
        borderRadius: 20,
        marginHorizontal: 25,
        // borderColor: 'red',
        // borderWidth: 3
    },
    time: {
        // borderColor: 'blue',
        // borderWidth: 1,
        flex: 1
    },
    timeText: {
        textAlign: 'left'
    },
    goal: {
        backgroundColor: 'white',
        borderRadius: 20,
        // borderColor: 'green',
        // borderWidth: 1,
        width: '75%',
        paddingHorizontal: 25,
        paddingVertical: 50,
    }

})