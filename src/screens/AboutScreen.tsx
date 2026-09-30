import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { C } from '../theme';
import { info, achievements } from '../data/portfolio';
import SectionTitle from '../components/SectionTitle';

export default function AboutScreen() {
  return (
    <View style={s.section}>
      <SectionTitle title="About Me" />

      {/* Bio Card */}
      <View style={s.card}>
        <Text style={s.bio}>{info.bio}</Text>
      </View>

      {/* Education Card */}
      <View style={s.eduCard}>
        <View style={s.eduHeader}>
          <Text style={s.eduIcon}>🎓</Text>
          <View style={s.eduHeaderText}>
            <Text style={s.eduDegree}>{info.education.degree}</Text>
            <Text style={s.eduInstitute}>{info.education.institute}</Text>
          </View>
        </View>
        <View style={s.eduMetaRow}>
          <View style={s.eduBadge}>
            <Text style={s.eduBadgeText}>📅 {info.education.period}</Text>
          </View>
          <View style={[s.eduBadge, { borderColor: C.gold }]}>
            <Text style={[s.eduBadgeText, { color: C.gold }]}>⭐ CGPA: {info.education.cgpa}</Text>
          </View>
        </View>
        <Text style={s.eduSpec}>Specialisation: {info.education.specialisation}</Text>
      </View>

      {/* Leadership & Activities */}
      <View style={s.achievementsWrap}>
        <Text style={s.subheading}>KEY HIGHLIGHTS & LEADERSHIP</Text>
        {achievements.map((item, idx) => (
          <View key={idx} style={s.achieveCard}>
            <View style={s.achieveTop}>
              <Text style={s.achieveBadge}>{item.badge}</Text>
              <Text style={s.achieveYear}>{item.year}</Text>
            </View>
            <Text style={s.achieveTitle}>{item.title}</Text>
            <Text style={s.achieveDesc}>{item.desc}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  section: { paddingHorizontal: 16, paddingTop: 24 },
  card: {
    backgroundColor: C.card,
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: C.border,
    marginBottom: 14,
  },
  bio: { color: C.text, lineHeight: 22, fontSize: 13.5 },
  eduCard: {
    backgroundColor: '#191932',
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: C.accent + '44',
    borderLeftWidth: 4,
    borderLeftColor: C.accent,
    marginBottom: 14,
  },
  eduHeader: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 12 },
  eduIcon: { fontSize: 26 },
  eduHeaderText: { flex: 1 },
  eduDegree: { color: '#ffffff', fontSize: 16, fontWeight: 'bold' },
  eduInstitute: { color: C.muted, fontSize: 12, marginTop: 2 },
  eduMetaRow: { flexDirection: 'row', gap: 8, marginBottom: 8 },
  eduBadge: {
    borderWidth: 1,
    borderColor: C.border,
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 3,
    backgroundColor: '#111122',
  },
  eduBadgeText: { color: C.text, fontSize: 11, fontWeight: '600' },
  eduSpec: { color: C.cyan, fontSize: 12, marginTop: 4 },
  achievementsWrap: { marginTop: 4 },
  subheading: {
    color: C.accent,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1,
    marginBottom: 10,
  },
  achieveCard: {
    backgroundColor: C.card,
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: C.border,
  },
  achieveTop: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 },
  achieveBadge: { color: C.cyan, fontSize: 12, fontWeight: 'bold' },
  achieveYear: { color: C.muted, fontSize: 11 },
  achieveTitle: { color: '#ffffff', fontSize: 14, fontWeight: 'bold', marginBottom: 4 },
  achieveDesc: { color: C.text, fontSize: 12, lineHeight: 18 },
});
