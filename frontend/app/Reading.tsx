import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { StyleSheet, View } from 'react-native'

type Props = {}

const Reading = (props: Props) => {
    return (

        <LinearGradient
            colors={['#E6EFF0', '#EADDF6']} // Adjust colors as per your design
            style={styles.page}
        >
            <View>
                
            </View>
        </LinearGradient>

    )
}

export default Reading


const styles = StyleSheet.create({
    page: {
        flex: 1
    },

})