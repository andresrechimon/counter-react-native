import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
  position?: 'bl' | 'br';
}

export const FAB = ({title, onPress, position = 'br'}: Props) => {
  const android = () => {
    return (
      <View
        style={[ styles.fabLocation, position === 'bl' ? styles.left : styles.right]}>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple('black', false, 30)}
          onPress={onPress}>
          <View style={styles.fab}>
            <Text style={styles.fabText}>{title}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };

  const ios = () => {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        style={[styles.fabLocation, position === 'bl' ? styles.left : styles.right]}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return Platform.OS === 'android' ? android() : ios();
};

const styles = StyleSheet.create({
  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  fabLocation: {
    position: 'absolute',
    bottom: 25,
  },
  right: {
    right: 25,
  },
  left: {
    left: 25,
  },
  fab: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
});
