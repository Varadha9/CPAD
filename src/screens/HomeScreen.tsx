import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { C } from '../theme';
import { info } from '../data/portfolio';

type Props = {
  onViewProjects: () => void;
  onViewResume: () => void;
  onViewContact?: () => void;
};

export default function HomeScreen({ onViewProjects, onViewResume, onViewContact }: Props) {
  const openURL = (url: string) => Linking.openURL(url).catch(() => undefined);

  return (
    <View style={s.section}>
      {/* Hero Card */}
      <View style={s.heroCard}>
        <View style={s.avatarWrap}>
          <View style={s.avatar}>
            <Text style={s.avatarText}>VM</Text>
          </View>
          <View style={s.onlineBadge}>
            <Text style={s.onlineDot}>●</Text>
          </View>
        </View>

        <Text style={s.name}>{info.name}</Text>
        <Text style={s.role}>{info.role}</Text>
        <Text style={s.university}>
          🎓 {info.education.institute} · {info.education.degree}
        </Text>
        <Text style={s.cgpaBadge}>CGPA: {info.education.cgpa} · Specialisation: {info.education.specialisation}</Text>

        {/* Quick Skill Pills */}
        <View style={s.badgeRow}>
          {info.quickPills.map(b => (
            <View key={b} style={s.badge}>
              <Text style={s.badgeText}>{b}</Text>
            </View>
          ))}
        </View>

        {/* CTA Buttons */}
        <View style={s.btnRow}>
          <TouchableOpacity style={s.btnPrimary} onPress={onViewProjects} activeOpacity={0.8}>
            <Text style={s.btnPrimaryText}>🚀 Projects</Text>
          </TouchableOpacity>
          <TouchableOpacity style={s.btnOutline} onPress={onViewResume} activeOpacity={0.8}>
            <Text style={s.btnOutlineText}>📄 Resume</Text>
          </TouchableOpacity>
          {onViewContact ? (
            <TouchableOpacity style={s.btnContact} onPress={onViewContact} activeOpacity={0.8}>
              <Text style={s.btnContactText}>💬 Contact</Text>
            </TouchableOpacity>
          ) : null}
        </View>

        {/* Social / Contact Quick Links */}
        <View style={s.socialRow}>
          <TouchableOpacity
            style={s.socialBtn}
            onPress={() => openURL(info.github)}
            activeOpacity={0.8}>
            <Text style={s.socialText}>🐙 GitHub</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={s.socialBtn}
            onPress={() => openURL(info.linkedin)}
            activeOpacity={0.8}>
            <Text style={s.socialText}>💼 LinkedIn</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={s.socialBtn}
            onPress={() => openURL(`mailto:${info.email}`)}
            activeOpacity={0.8}>
            <Text style={s.socialText}>📧 Email</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={s.socialBtn}
            onPress={() => openURL(`tel:${info.phone}`)}
            activeOpacity={0.8}>
            <Text style={s.socialText}>📞 Call</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Summary Highlight Quote */}
      <View style={s.quoteCard}>
        <Text style={s.quoteTitle}>💡 PROFESSIONAL SUMMARY</Text>
        <Text style={s.quoteText}>{info.summary}</Text>
      </View>

      {/* Stats Grid */}
      <View style={s.statsRow}>
        {info.stats.map(({ val, label }) => (
          <View key={label} style={s.statCard}>
            <Text style={s.statVal}>{val}</Text>
            <Text style={s.statLabel}>{label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  section: { paddingHorizontal: 16, paddingTop: 20 },
  heroCard: {
    backgroundColor: C.card,
    borderRadius: 20,
    padding: 22,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: C.border,
  },
  avatarWrap: { position: 'relative', marginBottom: 14 },
  avatar: {
    width: 92,
    height: 92,
    borderRadius: 46,
    backgroundColor: C.accent,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#2a2a4a',
  },
  avatarText: { color: '#fff', fontSize: 32, fontWeight: 'bold' },
  onlineBadge: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    backgroundColor: '#0f0f1a',
    borderRadius: 12,
    paddingHorizontal: 4,
    paddingVertical: 1,
  },
  onlineDot: { color: C.green, fontSize: 13 },
  name: { color: '#ffffff', fontSize: 24, fontWeight: 'bold', textAlign: 'center' },
  role: { color: C.accent, fontSize: 14, fontWeight: '600', marginTop: 4, textAlign: 'center' },
  university: { color: C.text, fontSize: 12, marginTop: 6, textAlign: 'center' },
  cgpaBadge: { color: C.gold, fontSize: 11, fontWeight: '600', marginTop: 3, textAlign: 'center' },
  badgeRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 14,
    gap: 7,
  },
  badge: {
    backgroundColor: '#23233c',
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: '#34345c',
  },
  badgeText: { color: C.cyan, fontSize: 11, fontWeight: '500' },
  btnRow: { flexDirection: 'row', gap: 12, marginTop: 18 },
  btnPrimary: {
    backgroundColor: C.accent,
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 11,
    shadowColor: C.accent,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  btnPrimaryText: { color: '#fff', fontWeight: 'bold', fontSize: 13 },
  btnOutline: {
    borderWidth: 1.5,
    borderColor: C.accent,
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 11,
  },
  btnOutlineText: { color: C.accent, fontWeight: 'bold', fontSize: 13 },
  btnContact: {
    backgroundColor: '#242442',
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 11,
    borderWidth: 1,
    borderColor: '#383860',
  },
  btnContactText: { color: C.cyan, fontWeight: 'bold', fontSize: 13 },
  socialRow: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 8, marginTop: 16 },
  socialBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#22223a',
    borderRadius: 18,
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderWidth: 1,
    borderColor: C.border,
  },
  socialText: { color: C.text, fontSize: 12, fontWeight: '500' },
  quoteCard: {
    backgroundColor: '#16162a',
    borderRadius: 14,
    padding: 16,
    borderLeftWidth: 4,
    borderLeftColor: C.accent,
    marginTop: 14,
    borderWidth: 1,
    borderColor: C.border,
  },
  quoteTitle: { color: C.accent, fontSize: 10, fontWeight: 'bold', letterSpacing: 1, marginBottom: 6 },
  quoteText: { color: C.text, fontSize: 13, lineHeight: 20 },
  statsRow: { flexDirection: 'row', gap: 8, marginTop: 12 },
  statCard: {
    flex: 1,
    backgroundColor: C.card,
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 6,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: C.border,
  },
  statVal: { color: C.accent, fontSize: 20, fontWeight: 'bold' },
  statLabel: { color: C.muted, fontSize: 11, marginTop: 3, textAlign: 'center' },
});
