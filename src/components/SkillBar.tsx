import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { C } from '../theme';

type Props = { name: string; level: number };

export default function SkillBar({ name, level }: Props) {
  const animatedWidth = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedWidth, {
      toValue: level,
      duration: 800,
      useNativeDriver: false,
    }).start();
  }, [level, animatedWidth]);

  const widthInterpolate = animatedWidth.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={s.row}>
      <View style={s.header}>
        <Text style={s.name}>{name}</Text>
        <Text style={s.pct}>{level}%</Text>
      </View>
      <View style={s.barBg}>
        <Animated.View style={[s.barFill, { width: widthInterpolate }]} />
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  row: { marginBottom: 14 },
  header: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 },
  name: { color: C.text, fontSize: 14 },
  pct: { color: C.accent, fontSize: 13, fontWeight: '600' },
  barBg: { height: 8, backgroundColor: C.border, borderRadius: 4 },
  barFill: { height: 8, backgroundColor: C.accent, borderRadius: 4 },
});
