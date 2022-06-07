import React, { useState } from 'react'
import { View, Text, StyleSheet  } from 'react-native'
import { FAB } from '../components/FAB'

export const CounterScreen = () => {

  const [counter, setCounter] = useState(10)

  return (
    <View style={styles.container}>

    <Text style={styles.title}>
        Contador: {counter}
    </Text>

    <FAB
    title='-1'
    position='bl'
    onPress={() => setCounter(counter - 1)}
    />

    <FAB
    title='+1'
    onPress={() => setCounter(counter + 1)}
    />

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
        top: -15
    },
})
