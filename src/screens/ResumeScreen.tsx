import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { C } from '../theme';
import { info, projects, certs, achievements } from '../data/portfolio';
import SectionTitle from '../components/SectionTitle';

export default function ResumeScreen() {
  const openURL = (url: string) => Linking.openURL(url).catch(() => undefined);

  return (
    <View style={s.section}>
      <SectionTitle title="Interactive Resume" />

      {/* Resume Header Document Card */}
      <View style={s.paperCard}>
        {/* Name & Title */}
        <Text style={s.paperName}>{info.name.toUpperCase()}</Text>
        <Text style={s.paperRole}>{info.role}</Text>

        {/* Contact Strip */}
        <View style={s.contactStrip}>
          <Text style={s.contactItem}>📍 {info.location}</Text>
          <Text style={s.contactItem}>📞 {info.phone}</Text>
          <Text style={s.contactItem}>✉️ {info.email}</Text>
        </View>

        <View style={s.linkStrip}>
          <TouchableOpacity onPress={() => openURL(info.linkedin)}>
            <Text style={s.linkText}>💼 linkedin.com/in/{info.linkedinHandle}</Text>
          </TouchableOpacity>
          <Text style={s.linkSeparator}>•</Text>
          <TouchableOpacity onPress={() => openURL(info.github)}>
            <Text style={s.linkText}>🐙 github.com/{info.githubUsername}</Text>
          </TouchableOpacity>
        </View>

        <View style={s.divider} />

        {/* Section 1: Summary */}
        <View style={s.resumeSection}>
          <Text style={s.sectionHeading}>SUMMARY</Text>
          <Text style={s.bodyText}>{info.summary}</Text>
        </View>

        <View style={s.divider} />

        {/* Section 2: Technical Skills */}
        <View style={s.resumeSection}>
          <Text style={s.sectionHeading}>TECHNICAL SKILLS</Text>
          <View style={s.skillRow}>
            <Text style={s.skillCategory}>Languages:</Text>
            <Text style={s.skillValues}>Java, JavaScript, Python, Kotlin, Swift, Shell Script</Text>
          </View>
          <View style={s.skillRow}>
            <Text style={s.skillCategory}>Backend / APIs:</Text>
            <Text style={s.skillValues}>Node.js, Express.js, Spring Boot, FastAPI, REST, JWT, MVC, EJS</Text>
          </View>
          <View style={s.skillRow}>
            <Text style={s.skillCategory}>Databases:</Text>
            <Text style={s.skillValues}>MySQL, MongoDB, PostgreSQL, Supabase, SQLite, Room DB</Text>
          </View>
          <View style={s.skillRow}>
            <Text style={s.skillCategory}>DevOps / CI-CD:</Text>
            <Text style={s.skillValues}>Docker, GitHub Actions, Jenkins, Maven, Git, Linux</Text>
          </View>
          <View style={s.skillRow}>
            <Text style={s.skillCategory}>Testing:</Text>
            <Text style={s.skillValues}>Selenium WebDriver, TestNG, Cucumber BDD, Page Object Model</Text>
          </View>
          <View style={s.skillRow}>
            <Text style={s.skillCategory}>Mobile & Tools:</Text>
            <Text style={s.skillValues}>React Native, Android Studio, Postman, Jira, IntelliJ IDEA, Tableau, Power BI</Text>
          </View>
        </View>

        <View style={s.divider} />

        {/* Section 3: Projects */}
        <View style={s.resumeSection}>
          <Text style={s.sectionHeading}>PROJECTS</Text>
          {projects.map((p, idx) => (
            <View key={idx} style={s.projectItem}>
              <View style={s.projectHeader}>
                <View style={s.projectTitleRow}>
                  <Text style={s.projectTitle}>{p.title}</Text>
                  <Text style={s.projectSubtitle}>— {p.subtitle}</Text>
                </View>
                <Text style={s.projectPeriod}>{p.period}</Text>
              </View>
              {p.highlights.map((h, hIdx) => (
                <View key={hIdx} style={s.bulletRow}>
                  <Text style={s.bulletDot}>•</Text>
                  <Text style={s.bulletText}>{h}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>

        <View style={s.divider} />

        {/* Section 4: Education */}
        <View style={s.resumeSection}>
          <Text style={s.sectionHeading}>EDUCATION</Text>
          <View style={s.projectHeader}>
            <Text style={s.eduDegreeTitle}>
              {info.education.degree} — <Text style={s.eduInstituteTitle}>{info.education.institute}</Text>
            </Text>
            <Text style={s.projectPeriod}>{info.education.period}</Text>
          </View>
          <Text style={s.eduDetails}>
            • CGPA: <Text style={s.boldText}>{info.education.cgpa}</Text>    • Specialisation: <Text style={s.boldText}>{info.education.specialisation}</Text>
          </Text>
        </View>

        <View style={s.divider} />

        {/* Section 5: Certifications */}
        <View style={s.resumeSection}>
          <Text style={s.sectionHeading}>CERTIFICATIONS</Text>
          {certs.map((c, cIdx) => (
            <View key={cIdx} style={s.certRow}>
              <Text style={s.certTitle}>• {c.title}</Text>
              <Text style={s.certIssuer}>{c.issuer}</Text>
            </View>
          ))}
        </View>

        <View style={s.divider} />

        {/* Section 6: Achievements & Activities */}
        <View style={s.resumeSection}>
          <Text style={s.sectionHeading}>ACHIEVEMENTS & ACTIVITIES</Text>
          {achievements.map((a, aIdx) => (
            <View key={aIdx} style={s.bulletRow}>
              <Text style={s.bulletDot}>•</Text>
              <Text style={s.bulletText}>
                <Text style={s.boldText}>{a.title}</Text> — {a.desc}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* CTA Action Strip */}
      <View style={s.ctaWrap}>
        <TouchableOpacity
          style={s.ctaPrimary}
          onPress={() => openURL(`mailto:${info.email}?subject=Interview%20Inquiry%20-%20Varad%20Mandhare`)}
          activeOpacity={0.8}>
          <Text style={s.ctaPrimaryText}>✉️ Contact for Opportunities</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={s.ctaSecondary}
          onPress={() => openURL(info.github)}
          activeOpacity={0.8}>
          <Text style={s.ctaSecondaryText}>🐙 View Code on GitHub</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  section: { paddingHorizontal: 16, paddingTop: 24 },
  paperCard: {
    backgroundColor: '#18182e',
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: '#34345c',
  },
  paperName: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
    textAlign: 'center',
  },
  paperRole: {
    color: C.accent,
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 4,
  },
  contactStrip: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
    marginTop: 10,
  },
  contactItem: { color: C.muted, fontSize: 11 },
  linkStrip: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginTop: 6,
    flexWrap: 'wrap',
  },
  linkText: { color: C.cyan, fontSize: 11, fontWeight: '600' },
  linkSeparator: { color: C.muted, fontSize: 11 },
  divider: {
    height: 1,
    backgroundColor: '#2e2e50',
    marginVertical: 14,
  },
  resumeSection: { marginBottom: 4 },
  sectionHeading: {
    color: C.accent,
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 1.2,
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  bodyText: { color: C.text, fontSize: 12.5, lineHeight: 19 },
  skillRow: { marginBottom: 6 },
  skillCategory: { color: '#ffffff', fontSize: 12, fontWeight: 'bold' },
  skillValues: { color: C.text, fontSize: 12, lineHeight: 17, marginTop: 1 },
  projectItem: { marginBottom: 12 },
  projectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  projectTitleRow: { flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', gap: 4 },
  projectTitle: { color: '#ffffff', fontSize: 13, fontWeight: 'bold' },
  projectSubtitle: { color: C.cyan, fontSize: 12, fontWeight: '500' },
  projectPeriod: { color: C.muted, fontSize: 10.5 },
  bulletRow: { flexDirection: 'row', marginBottom: 5, alignItems: 'flex-start' },
  bulletDot: { color: C.accent, fontSize: 13, marginRight: 6, lineHeight: 17 },
  bulletText: { color: C.text, fontSize: 12, lineHeight: 18, flex: 1 },
  boldText: { fontWeight: 'bold', color: '#ffffff' },
  eduDegreeTitle: { color: '#ffffff', fontSize: 13, fontWeight: 'bold', flex: 1 },
  eduInstituteTitle: { color: C.text, fontSize: 12, fontWeight: 'normal' },
  eduDetails: { color: C.text, fontSize: 12, marginTop: 4 },
  certRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
    flexWrap: 'wrap',
  },
  certTitle: { color: '#ffffff', fontSize: 12, fontWeight: '500', flex: 1 },
  certIssuer: { color: C.muted, fontSize: 11, fontStyle: 'italic' },
  ctaWrap: { flexDirection: 'row', gap: 10, marginTop: 16 },
  ctaPrimary: {
    flex: 1,
    backgroundColor: C.accent,
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },
  ctaPrimaryText: { color: '#ffffff', fontWeight: 'bold', fontSize: 12.5 },
  ctaSecondary: {
    flex: 1,
    backgroundColor: '#202038',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: C.border,
  },
  ctaSecondaryText: { color: C.text, fontWeight: 'bold', fontSize: 12.5 },
});
