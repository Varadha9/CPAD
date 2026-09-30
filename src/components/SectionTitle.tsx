import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { C } from '../theme';

export default function SectionTitle({ title }: { title: string }) {
  return <Text style={s.title}>{title}</Text>;
}

const s = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: C.accent,
    paddingLeft: 10,
  },
});
