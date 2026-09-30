import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { C } from '../theme';
import { projects } from '../data/portfolio';
import SectionTitle from '../components/SectionTitle';

export default function ProjectsScreen() {
  const [expanded, setExpanded] = useState<string | null>(projects[0]?.title || null);

  const openURL = (url: string) => Linking.openURL(url).catch(() => undefined);

  return (
    <View style={s.section}>
      <SectionTitle title="Featured Projects" />

      {projects.map(p => {
        const isExp = expanded === p.title;
        return (
          <View
            key={p.title}
            style={[s.card, { borderLeftColor: p.color }]}>
            <TouchableOpacity
              activeOpacity={0.88}
              onPress={() => setExpanded(isExp ? null : p.title)}>
              {/* Header */}
              <View style={s.cardHeader}>
                <View style={s.titleWrap}>
                  <View style={s.titleRow}>
                    <Text style={[s.title, { color: p.color }]}>{p.title}</Text>
                    {p.featured && (
                      <View style={[s.badgeFeatured, { borderColor: p.color }]}>
                        <Text style={[s.badgeFeaturedText, { color: p.color }]}>★ Featured</Text>
                      </View>
                    )}
                  </View>
                  <Text style={s.subtitle}>{p.subtitle}</Text>
                </View>
                <Text style={s.period}>{p.period}</Text>
              </View>

              {/* Description */}
              <Text style={s.desc}>{p.desc}</Text>

              {/* Tech Badges */}
              <View style={s.techRow}>
                {p.tech.map(t => (
                  <View key={t} style={s.techBadge}>
                    <Text style={s.techText}>{t}</Text>
                  </View>
                ))}
              </View>

              {/* Expand Toggle Text */}
              <View style={s.toggleRow}>
                <Text style={[s.toggleText, { color: p.color }]}>
                  {isExp ? 'Hide Details ▲' : 'View Architecture & Highlights ▼'}
                </Text>
              </View>
            </TouchableOpacity>

            {/* Expanded Details */}
            {isExp && (
              <View style={s.detailsWrap}>
                <Text style={s.highlightsTitle}>Key Engineering Highlights</Text>
                {p.highlights.map((h, i) => (
                  <View key={i} style={s.bulletRow}>
                    <Text style={[s.bulletDot, { color: p.color }]}>▹</Text>
                    <Text style={s.bulletText}>{h}</Text>
                  </View>
                ))}

                {/* Direct GitHub Link */}
                <TouchableOpacity
                  style={[s.githubBtn, { borderColor: p.color }]}
                  onPress={() => openURL(p.githubUrl)}
                  activeOpacity={0.8}>
                  <Text style={[s.githubBtnText, { color: p.color }]}>
                    🐙 View on GitHub ↗
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        );
      })}
    </View>
  );
}

const s = StyleSheet.create({
  section: { paddingHorizontal: 16, paddingTop: 24 },
  card: {
    backgroundColor: C.card,
    borderRadius: 16,
    padding: 18,
    marginBottom: 16,
    borderLeftWidth: 4,
    borderWidth: 1,
    borderColor: C.border,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  titleWrap: { flex: 1, marginRight: 8 },
  titleRow: { flexDirection: 'row', alignItems: 'center', gap: 8, flexWrap: 'wrap' },
  title: { fontSize: 18, fontWeight: 'bold' },
  subtitle: { color: C.text, fontSize: 12, marginTop: 2, fontWeight: '500' },
  period: { color: C.muted, fontSize: 11, fontWeight: '500' },
  badgeFeatured: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 1,
    backgroundColor: '#16162a',
  },
  badgeFeaturedText: { fontSize: 10, fontWeight: 'bold' },
  desc: { color: C.text, fontSize: 13, lineHeight: 20, marginBottom: 12 },
  techRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 6, marginBottom: 8 },
  techBadge: {
    backgroundColor: '#22223c',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: '#363658',
  },
  techText: { color: '#c4c4e0', fontSize: 11, fontWeight: '500' },
  toggleRow: { marginTop: 6, paddingTop: 6 },
  toggleText: { fontSize: 12, fontWeight: '700' },
  detailsWrap: {
    borderTopWidth: 1,
    borderTopColor: C.border,
    marginTop: 12,
    paddingTop: 12,
  },
  highlightsTitle: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  bulletRow: { flexDirection: 'row', marginBottom: 8, alignItems: 'flex-start' },
  bulletDot: { fontSize: 14, marginRight: 8, lineHeight: 18 },
  bulletText: { color: C.text, fontSize: 12.5, lineHeight: 19, flex: 1 },
  githubBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 9,
    paddingHorizontal: 14,
    marginTop: 10,
    backgroundColor: '#19192e',
  },
  githubBtnText: { fontWeight: 'bold', fontSize: 12.5 },
});
