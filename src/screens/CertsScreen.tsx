import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { C } from '../theme';
import { certs, achievements } from '../data/portfolio';
import SectionTitle from '../components/SectionTitle';

export default function CertsScreen() {
  return (
    <View style={s.section}>
      <SectionTitle title="Certifications & Honors" />

      <Text style={s.subheading}>PROFESSIONAL CERTIFICATIONS</Text>
      {certs.map((c, i) => (
        <View key={i} style={s.card}>
          <Text style={s.icon}>{c.icon}</Text>
          <View style={s.info}>
            <Text style={s.title}>{c.title}</Text>
            <Text style={s.issuer}>{c.issuer}</Text>
            {c.skills && <Text style={s.skillsTag}>Skills: {c.skills}</Text>}
          </View>
        </View>
      ))}

      <Text style={s.subheadingSpacing}>AWARDS & HACKATHONS</Text>
      {achievements.map((a, i) => (
        <View key={i} style={s.awardCard}>
          <View style={s.awardHeader}>
            <Text style={s.awardBadge}>{a.badge}</Text>
            <Text style={s.awardYear}>{a.year}</Text>
          </View>
          <Text style={s.awardTitle}>{a.title}</Text>
          <Text style={s.awardDesc}>{a.desc}</Text>
        </View>
      ))}
    </View>
  );
}

const s = StyleSheet.create({
  section: { paddingHorizontal: 16, paddingTop: 24 },
  subheading: {
    color: C.accent,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1,
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  subheadingSpacing: {
    color: C.accent,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1,
    marginBottom: 10,
    textTransform: 'uppercase',
    marginTop: 14,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: C.card,
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: C.border,
    gap: 12,
  },
  icon: { fontSize: 28, marginTop: 2 },
  info: { flex: 1 },
  title: { color: '#ffffff', fontSize: 14, fontWeight: 'bold' },
  issuer: { color: C.cyan, fontSize: 12, marginTop: 2, fontWeight: '500' },
  skillsTag: { color: C.muted, fontSize: 11, marginTop: 4, fontStyle: 'italic' },
  awardCard: {
    backgroundColor: '#1c1c34',
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#323258',
    borderLeftWidth: 4,
    borderLeftColor: C.gold,
  },
  awardHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 },
  awardBadge: { color: C.gold, fontSize: 11, fontWeight: 'bold' },
  awardYear: { color: C.muted, fontSize: 11 },
  awardTitle: { color: '#ffffff', fontSize: 13.5, fontWeight: 'bold', marginBottom: 4 },
  awardDesc: { color: C.text, fontSize: 12, lineHeight: 18 },
});
