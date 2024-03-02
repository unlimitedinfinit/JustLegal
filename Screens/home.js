import React, { useRef, useEffect } from 'react';
import { View } from 'react-native';
import Confetti from 'react-native-confetti';

export default function Home() {
  const confettiRef = useRef();

  useEffect(() => {
    if (confettiRef) {
      confettiRef.current.startConfetti();
    }
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Confetti ref={confettiRef} size={5} />
    </View>
  );
}