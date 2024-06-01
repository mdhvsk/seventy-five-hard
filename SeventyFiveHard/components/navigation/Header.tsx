import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons/faCircleUser'

type Props = {}
const { width } = Dimensions.get('window');


const Header = (props: Props) => {

    return (
        <View style={styles.content}>
            <Text style={styles.title}>
                75 Hard
            </Text>
            {/* <FontAwesomeIcon style={styles.icon} icon={faCircleUser} size={36} /> */}

        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    content: {
        width: '100%',
        height: 50, // Adjust height as needed
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    title: {
        fontSize: 36,
        position: 'absolute',
        left: width / 2,
        textAlign: 'center',
    },
    icon: {
        position: 'absolute',
        right: 20,   
    }
})