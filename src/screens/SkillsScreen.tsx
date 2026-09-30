import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { C } from '../theme';
import { skills, Skill } from '../data/portfolio';
import SectionTitle from '../components/SectionTitle';
import SkillBar from '../components/SkillBar';

const CATEGORIES: Skill['category'][] = [
  'Languages',
  'Backend / APIs',
  'Databases',
  'DevOps / CI-CD',
  'Testing / QA',
  'Mobile & Tools',
];

export default function SkillsScreen() {
  const [selectedCat, setSelectedCat] = useState<string>('All');

  const filteredSkills =
    selectedCat === 'All'
      ? skills
      : skills.filter(s => s.category === selectedCat);

  return (
    <View style={s.section}>
      <SectionTitle title="Technical Skills" />

      {/* Filter Tabs */}
      <View style={s.filterWrap}>
        <TouchableOpacity
          style={[s.chip, selectedCat === 'All' && s.chipActive]}
          onPress={() => setSelectedCat('All')}>
          <Text style={[s.chipText, selectedCat === 'All' && s.chipTextActive]}>All ({skills.length})</Text>
        </TouchableOpacity>
        {CATEGORIES.map(cat => (
          <TouchableOpacity
            key={cat}
            style={[s.chip, selectedCat === cat && s.chipActive]}
            onPress={() => setSelectedCat(cat)}>
            <Text style={[s.chipText, selectedCat === cat && s.chipTextActive]}>{cat}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Skill List Grouped or Filtered */}
      {selectedCat === 'All' ? (
        CATEGORIES.map(cat => {
          const catSkills = skills.filter(sk => sk.category === cat);
          if (!catSkills.length) return null;
          return (
            <View key={cat} style={s.group}>
              <Text style={s.catLabel}>{cat}</Text>
              <View style={s.groupCard}>
                {catSkills.map(sk => (
                  <SkillBar key={sk.name} name={sk.name} level={sk.level} />
                ))}
              </View>
            </View>
          );
        })
      ) : (
        <View style={s.groupCard}>
          {filteredSkills.map(sk => (
            <SkillBar key={sk.name} name={sk.name} level={sk.level} />
          ))}
        </View>
      )}
    </View>
  );
}

const s = StyleSheet.create({
  section: { paddingHorizontal: 16, paddingTop: 24 },
  filterWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 16,
  },
  chip: {
    backgroundColor: '#1c1c34',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: C.border,
  },
  chipActive: {
    backgroundColor: C.accent,
    borderColor: C.accent,
  },
  chipText: {
    color: C.muted,
    fontSize: 11.5,
    fontWeight: '600',
  },
  chipTextActive: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  group: { marginBottom: 14 },
  catLabel: {
    color: C.accent,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  groupCard: {
    backgroundColor: C.card,
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: C.border,
  },
});
