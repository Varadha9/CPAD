import React from 'react';
import { Alert, View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { C } from '../theme';
import { info } from '../data/portfolio';
import SectionTitle from '../components/SectionTitle';

export default function ContactScreen() {
  const openContact = async (url: string) => {
    try {
      await Linking.openURL(url);
    } catch {
      Alert.alert('Link unavailable', 'This action could not be opened on your device.');
    }
  };

  return (
    <View style={s.section}>
      <SectionTitle title="Get in Touch" />
      <Text style={s.sub}>
        I'm actively seeking backend engineering, DevOps, and full-stack opportunities. Feel free to connect for collaborations, internships, or technical discussions!
      </Text>

      <View style={s.card}>
        {info.contact.map(({ icon, title, label, url, action }, i) => (
          <TouchableOpacity
            key={label}
            style={[s.row, i === info.contact.length - 1 && s.rowLast]}
            onPress={() => { openContact(url).catch(() => undefined); }}
            activeOpacity={0.75}>
            <View style={s.iconWrap}>
              <Text style={s.icon}>{icon}</Text>
            </View>
            <View style={s.textWrap}>
              <Text style={s.title}>{title}</Text>
              <Text style={s.label}>{label}</Text>
              <Text style={s.hint}>{action} ↗</Text>
            </View>
            <Text style={s.arrow}>›</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Quick Action Buttons */}
      <View style={s.quickActions}>
        <TouchableOpacity
          style={s.btnCall}
          onPress={() => openContact(`tel:${info.phone}`)}
          activeOpacity={0.8}>
          <Text style={s.btnText}>📞 Call Me</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={s.btnEmail}
          onPress={() => openContact(`mailto:${info.email}`)}
          activeOpacity={0.8}>
          <Text style={s.btnText}>✉️ Send Email</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  section: { paddingHorizontal: 16, paddingTop: 24 },
  sub: { color: C.muted, fontSize: 13, lineHeight: 20, marginBottom: 16 },
  card: {
    backgroundColor: C.card,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: C.border,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: C.border,
    gap: 12,
  },
  rowLast: { borderBottomWidth: 0 },
  iconWrap: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#242442',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#383860',
  },
  icon: { fontSize: 20 },
  textWrap: { flex: 1 },
  title: { color: C.muted, fontSize: 11, fontWeight: '600', textTransform: 'uppercase' },
  label: { color: '#ffffff', fontSize: 13.5, fontWeight: '600', marginTop: 2 },
  hint: { color: C.cyan, fontSize: 11, marginTop: 2, fontWeight: '500' },
  arrow: { color: C.muted, fontSize: 22 },
  quickActions: { flexDirection: 'row', gap: 10, marginTop: 16 },
  btnCall: {
    flex: 1,
    backgroundColor: '#202038',
    borderRadius: 12,
    paddingVertical: 13,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: C.border,
  },
  btnEmail: {
    flex: 1,
    backgroundColor: C.accent,
    borderRadius: 12,
    paddingVertical: 13,
    alignItems: 'center',
  },
  btnText: { color: '#ffffff', fontWeight: 'bold', fontSize: 13 },
});
