import React from 'react';
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { C } from '../theme';
import { info, skills } from '../data/portfolio';
import SectionTitle from '../components/SectionTitle';

const RESUME_URL = 'https://github.com/Varadha9/CPAD/raw/main/resume.pdf';

export default function ResumeScreen() {
  const openResume = () => Linking.openURL(RESUME_URL).catch(() => undefined);

  return (
    <View style={s.section}>
      <SectionTitle title="Resume" />
      <View style={s.hero}>
        <Text style={s.name}>{info.name}</Text>
        <Text style={s.role}>{info.role}</Text>
        <Text style={s.summary}>{info.resume.summary}</Text>
      </View>
      <View style={s.card}>
        <Text style={s.label}>EDUCATION</Text>
        <Text style={s.value}>{info.resume.education}</Text>
        <Text style={s.label}>AVAILABILITY</Text>
        <Text style={s.value}>{info.resume.availability}</Text>
        <Text style={s.label}>CORE SKILLS</Text>
        <View style={s.skills}>
          {skills.map(skill => (
            <View key={skill.name} style={s.skill}>
              <Text style={s.skillText}>{skill.name}</Text>
            </View>
          ))}
        </View>
      </View>
      <TouchableOpacity style={s.button} onPress={openResume}>
        <Text style={s.buttonText}>📄  Download Resume (PDF)</Text>
      </TouchableOpacity>
    </View>
  );
}

const s = StyleSheet.create({
  section: { paddingHorizontal: 16, paddingTop: 28 },
  hero: { backgroundColor: C.card, borderRadius: 16, padding: 20, borderWidth: 1, borderColor: C.border },
  name: { color: '#fff', fontSize: 21, fontWeight: 'bold' },
  role: { color: C.accent, marginTop: 4, fontSize: 14 },
  summary: { color: C.text, marginTop: 14, lineHeight: 21, fontSize: 14 },
  card: { backgroundColor: C.card, borderRadius: 16, padding: 18, borderWidth: 1, borderColor: C.border, marginTop: 12 },
  label: { color: C.muted, fontSize: 10, fontWeight: '700', letterSpacing: 0.8, marginTop: 4 },
  value: { color: C.text, fontSize: 14, marginTop: 5, marginBottom: 16 },
  skills: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 9 },
  skill: { backgroundColor: '#2a2a4a', borderRadius: 14, paddingHorizontal: 10, paddingVertical: 6 },
  skillText: { color: C.accent, fontSize: 11 },
  button: { backgroundColor: C.accent, paddingVertical: 14, borderRadius: 12, alignItems: 'center', marginTop: 14, marginBottom: 20 },
  buttonText: { color: '#fff', fontWeight: '700', fontSize: 15 },
});
