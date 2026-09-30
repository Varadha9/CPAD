import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { C } from '../theme';

const NAV_ITEMS = ['Home', 'About', 'Skills', 'Projects', 'Resume', 'Certs', 'Contact'];

type Props = { active: string; onPress: (item: string) => void };

export default function Navbar({ active, onPress }: Props) {
  return (
    <View style={s.navbar}>
      <TouchableOpacity onPress={() => onPress('Home')} style={s.brandWrap}>
        <Text style={s.brand}>VM<Text style={s.brandDot}>.</Text></Text>
      </TouchableOpacity>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={s.navScroll}>
        {NAV_ITEMS.map(item => (
          <TouchableOpacity
            key={item}
            onPress={() => onPress(item)}
            style={[s.item, active === item && s.itemActive]}>
            <Text style={[s.text, active === item && s.textActive]}>{item}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: C.card,
    paddingHorizontal: 16,
    paddingTop: 48,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: C.border,
  },
  brandWrap: { marginRight: 10 },
  brand: { color: '#ffffff', fontWeight: 'bold', fontSize: 20 },
  brandDot: { color: C.accent },
  navScroll: { alignItems: 'center', gap: 6 },
  item: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: 16 },
  itemActive: { backgroundColor: C.accent },
  text: { color: C.muted, fontSize: 12.5, fontWeight: '500' },
  textActive: { color: '#fff', fontWeight: 'bold' },
});
