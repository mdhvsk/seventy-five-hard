import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

const NUM_DAYS = 75;

const CalendarPage: React.FC = () => {
  const [images, setImages] = useState<string[]>(Array(NUM_DAYS).fill(null));

  const handleImagePick = async (index: number) => {
    // Logic to pick image and set it to the specific day
    // const result = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images });
    // if (!result.cancelled) {
    //   const newImages = [...images];
    //   newImages[index] = result.uri;
    //   setImages(newImages);
    // }
  };

  return (
    <LinearGradient
      colors={['#E6EFF0', '#EADDF6']} // Adjust colors as per your design
      style={styles.page}
    >
    <ScrollView contentContainerStyle={styles.container}>
      {Array.from({ length: NUM_DAYS }).map((_, index) => (
        <TouchableOpacity key={index} style={styles.dayContainer} onPress={() => handleImagePick(index)}>
          <View style={styles.imageContainer}>
            {images[index] ? (
              <Image source={{ uri: images[index] }} style={styles.image} />
            ) : (
              <View style={styles.blankImage} />
            )}
            <Text style={styles.dayNumber}>{index + 1}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingVertical: 75,
    paddingHorizontal: 25

  },
  dayContainer: {
    width: '13%', // Approx 7 days in a row
    margin: 4,
    aspectRatio: 2/3, // Square aspect ratio
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  blankImage: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  dayNumber: {
    position: 'absolute',
    top: 5,
    left: 5,
    color: 'black',
    padding: 2,
    borderRadius: 3,
    overflow: 'hidden',
    
  },
});

export default CalendarPage;