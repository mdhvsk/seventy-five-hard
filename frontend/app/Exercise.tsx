import { LinearGradient } from 'expo-linear-gradient'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SwipeButton from 'rn-swipe-button';
import { faPersonRunning } from '@fortawesome/free-solid-svg-icons/faPersonRunning'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'


type Props = {}

const Exercise = (props: Props) => {

    const defaultStatusMessage = 'swipe status appears here';
    const [swipeStatusMessage, setSwipeStatusMessage] = useState(
        defaultStatusMessage,)

    const updateSwipeStatusMessage = (message: string) => setSwipeStatusMessage(message);
    const CheckoutButton = () => {
        return (
            <View style={{ width: 100, height: 30, backgroundColor: '#C70039', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#ffffff' }}>Checkout</Text>
            </View>
        );
    }
    return (

        <LinearGradient
            colors={['#E6EFF0', '#EADDF6']} // Adjust colors as per your design
            style={styles.page}
        >
            <View style={styles.content}>
                <View style={styles.panel}>
                    <SwipeButton
                        onSwipeSuccess={() => updateSwipeStatusMessage('Slide success!')}
                        railBackgroundColor="#a493d6"
                        thumbIconBackgroundColor="#FFFFFF"
                        title="Slide to unlock"
                    />
                </View>

            </View>
        </LinearGradient>

    )
}

export default Exercise


const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    content: {
        marginTop: 50
    },
    panel: {
        backgroundColor: 'white',
        marginVertical: 75,
        borderRadius: 20,
        marginHorizontal: 25,
        paddingHorizontal: 25,
        paddingVertical: 75,
    }

})