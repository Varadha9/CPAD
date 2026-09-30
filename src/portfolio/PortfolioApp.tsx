import React, { useRef, useState } from 'react';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { C } from '../theme';
import Navbar from '../components/Navbar';
import AboutScreen from '../screens/AboutScreen';
import CertsScreen from '../screens/CertsScreen';
import ContactScreen from '../screens/ContactScreen';
import HomeScreen from '../screens/HomeScreen';
import ProjectsScreen from '../screens/ProjectsScreen';
import ResumeScreen from '../screens/ResumeScreen';
import SkillsScreen from '../screens/SkillsScreen';

const SECTION_KEYS = ['Home', 'About', 'Skills', 'Projects', 'Resume', 'Certs', 'Contact'];

export default function PortfolioApp() {
  const [active, setActive] = useState('Home');
  const scrollRef = useRef<ScrollView>(null);
  const sectionPositions = useRef<{ [key: string]: number }>({});
  const isAutoScrolling = useRef(false);

  const scrollToSection = (section: string) => {
    setActive(section);
    const targetY = sectionPositions.current[section];
    if (targetY !== undefined && scrollRef.current) {
      isAutoScrolling.current = true;
      scrollRef.current.scrollTo({ y: Math.max(0, targetY - 10), animated: true });
      setTimeout(() => {
        isAutoScrolling.current = false;
      }, 500);
    }
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isAutoScrolling.current) return;
    const currentY = event.nativeEvent.contentOffset.y + 100;
    let currentSection = SECTION_KEYS[0];
    for (const key of SECTION_KEYS) {
      const pos = sectionPositions.current[key];
      if (pos !== undefined && currentY >= pos) {
        currentSection = key;
      }
    }
    if (currentSection !== active) {
      setActive(currentSection);
    }
  };

  return (
    <View style={s.container}>
      <Navbar active={active} onPress={scrollToSection} />
      <ScrollView
        ref={scrollRef}
        showsVerticalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={32}>
        <View onLayout={e => { sectionPositions.current.Home = e.nativeEvent.layout.y; }}>
          <HomeScreen
            onViewProjects={() => scrollToSection('Projects')}
            onViewResume={() => scrollToSection('Resume')}
            onViewContact={() => scrollToSection('Contact')}
          />
        </View>
        <View onLayout={e => { sectionPositions.current.About = e.nativeEvent.layout.y; }}>
          <AboutScreen />
        </View>
        <View onLayout={e => { sectionPositions.current.Skills = e.nativeEvent.layout.y; }}>
          <SkillsScreen />
        </View>
        <View onLayout={e => { sectionPositions.current.Projects = e.nativeEvent.layout.y; }}>
          <ProjectsScreen />
        </View>
        <View onLayout={e => { sectionPositions.current.Resume = e.nativeEvent.layout.y; }}>
          <ResumeScreen />
        </View>
        <View onLayout={e => { sectionPositions.current.Certs = e.nativeEvent.layout.y; }}>
          <CertsScreen />
        </View>
        <View onLayout={e => { sectionPositions.current.Contact = e.nativeEvent.layout.y; }}>
          <ContactScreen />
        </View>
        <View style={s.footerSpacer} />
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: C.bg },
  footerSpacer: { height: 40 },
});
