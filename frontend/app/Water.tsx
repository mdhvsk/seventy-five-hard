import { LinearGradient } from 'expo-linear-gradient'
import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import CircularProgress from 'react-native-circular-progress-indicator'
import { Picker } from '@react-native-picker/picker';

type Props = {}

type Unit = "mL" | "oz" | "cups";

const conversionRates = {
    mL: {
        toML: 1,
        toOz: 1 / 29.5735,
        toCups: 1 / 240,
    },
    oz: {
        toML: 29.5735,
        toOz: 1,
        toCups: 29.5735 / 240,
    },
    cups: {
        toML: 240,
        toOz: 240 / 29.5735,
        toCups: 1,
    },
};


const Water = (props: Props) => {

    const [consumed, setConsumed] = useState<number>(0);
    const [totalWaterInGallon, setTotalWaterInGallon] = useState(3700)
    const [unit, setUnit] = useState<Unit>("mL")
    const [singleDrink, setSingleDrink] = useState<number>(200)

    const convertUnits = (value: number, prevUnit: Unit, newUnit: Unit): number => {
        if (prevUnit === newUnit) return value;
        if(newUnit === "cups"){
            return Math.ceil(value * conversionRates[prevUnit].toCups)
        } else if (newUnit === "mL"){
            return Math.ceil(value * conversionRates[prevUnit].toML)
        } else {
            return Math.ceil(value * conversionRates[prevUnit].toOz)
        }
        
    }

    const handleUnitChange = (newUnit: Unit): void  => {
        const newTotalWaterConsumed = convertUnits(consumed, unit, newUnit);
        const newTotalWaterInGallon = convertUnits(totalWaterInGallon, unit, newUnit);
        const newSingleDrink = convertUnits(singleDrink, unit, newUnit)
        setConsumed(newTotalWaterConsumed)
        setTotalWaterInGallon(newTotalWaterInGallon)
        setSingleDrink(newSingleDrink)
        setUnit(newUnit)
    }

    const drinkWater = () => {
        let totalConsumed = consumed + singleDrink
        if (totalConsumed > totalWaterInGallon) {
            setConsumed(totalWaterInGallon)
            return
        }
        setConsumed(totalConsumed)

        // add water log
    }

    useEffect(() => {
        console.log('totalWaterInGallon changed:', totalWaterInGallon);
      }, [totalWaterInGallon]);
    
      useEffect(() => {
        console.log('consumed changed:', consumed);
      }, [consumed]);

    return (

        <LinearGradient
            colors={['#E6EFF0', '#EADDF6']} // Adjust colors as per your design
            style={styles.page}
        >
            <View style={styles.content}>
                <View style={styles.panel}>
                    <CircularProgress
                        value={consumed}
                        maxValue={totalWaterInGallon}
                        activeStrokeColor={'#E6EFF0'}
                        activeStrokeSecondaryColor={'#EADDF6'}
                    />

                    <Text>Units: {unit}</Text>
                    <Text>Quantity: {singleDrink}</Text>
                    <Text>Total: {totalWaterInGallon}</Text>


                    <Picker
                        selectedValue={unit}
                        onValueChange={(itemValue, itemIndex) =>
                            handleUnitChange(itemValue)
                        }>
                        <Picker.Item label="mL" value="mL" />
                        <Picker.Item label="cups" value="cups" />
                        <Picker.Item label="oz" value="oz" />

                    </Picker>

                    <Button title="Drink Water" onPress={drinkWater} />
                </View>


            </View>


        </LinearGradient>

    )
}

export default Water


const styles = StyleSheet.create({
    page: {
        flex: 1
    },

    content: {
        marginTop: 50,
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