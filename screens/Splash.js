import React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';

export default function Splash() {
  return (
      <View>
          <Text>Loading Splash Screen</Text>
          <ActivityIndicator animating={true} />
      </View>
  );
}
