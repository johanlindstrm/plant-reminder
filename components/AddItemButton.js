import React from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';

export const AddItemButton = () => (
    <FAB
      style={styles.fab}
      icon="plus"
      onPress={() => console.log('Pressed')}
    />
  );

  const styles = StyleSheet.create({
    fab: {
      position: 'absolute',
      margin: 16,
      right: 20,
      bottom: 20,
    },
  })