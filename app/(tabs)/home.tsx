import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'

export default function HomeScreen() {
  const [movies, setMovies] = useState([
    { img: 'https://media.themoviedb.org/t/p/w440_and_h660_face/hVIvwh1wIzWYjG2Hzb5ztoBwEFl.jpg' },
    { img: 'https://media.themoviedb.org/t/p/w440_and_h660_face/pk7CvqHJZGfEwWyn5Dfnp8PVb0I.jpg' },
    { img: 'https://media.themoviedb.org/t/p/w440_and_h660_face/jXeeV5YrACBgc9CGvggdsA6PEmd.jpg' },
    { img: 'https://media.themoviedb.org/t/p/w440_and_h660_face/cpWWm1MVwFFjpM6TQ9QzP74ZXfH.jpg' },
    { img: 'https://media.themoviedb.org/t/p/w440_and_h660_face/kkFn3KM47Qq4Wjhd8GuFfe3LX27.jpg' },
  ]);

  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      {movies.map((movie, index) => (
        <Image style={styles.image} key={index} source={{ uri: movie.img }} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: '#fff',
  },
  image: {
    width: 100,
    height: 170,
    borderRadius: 5
  }
});