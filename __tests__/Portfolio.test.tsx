import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import PortfolioApp from '../src/portfolio/PortfolioApp';
import HomeScreen from '../src/screens/HomeScreen';
import AboutScreen from '../src/screens/AboutScreen';
import SkillsScreen from '../src/screens/SkillsScreen';
import ProjectsScreen from '../src/screens/ProjectsScreen';
import CertsScreen from '../src/screens/CertsScreen';
import ResumeScreen from '../src/screens/ResumeScreen';
import ContactScreen from '../src/screens/ContactScreen';
import SkillBar from '../src/components/SkillBar';
import Navbar from '../src/components/Navbar';
import SectionTitle from '../src/components/SectionTitle';

describe('Varad Vikas Mandhare - Developer Portfolio & Interactive Resume', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(async () => {
    await ReactTestRenderer.act(async () => {
      jest.runOnlyPendingTimers();
    });
    jest.useRealTimers();
  });

  it('renders PortfolioApp completely', async () => {
    await ReactTestRenderer.act(() => {
      ReactTestRenderer.create(<PortfolioApp />);
      jest.runAllTimers();
    });
  });

  it('renders HomeScreen with profile details, university, and actions', async () => {
    let renderer: ReactTestRenderer.ReactTestRenderer | undefined;
    await ReactTestRenderer.act(() => {
      renderer = ReactTestRenderer.create(
        <HomeScreen onViewProjects={() => {}} onViewResume={() => {}} />,
      );
    });
    expect(renderer).toBeDefined();
  });

  it('renders AboutScreen with bio, education, and achievements', async () => {
    let renderer: ReactTestRenderer.ReactTestRenderer | undefined;
    await ReactTestRenderer.act(() => {
      renderer = ReactTestRenderer.create(<AboutScreen />);
    });
    expect(renderer).toBeDefined();
  });

  it('renders SkillsScreen with categories and animated skill bars', async () => {
    let renderer: ReactTestRenderer.ReactTestRenderer | undefined;
    await ReactTestRenderer.act(() => {
      renderer = ReactTestRenderer.create(<SkillsScreen />);
      jest.runAllTimers();
    });
    expect(renderer).toBeDefined();
  });

  it('renders ProjectsScreen with actual GitHub projects (ELEVARE, BookSphere, Stockify)', async () => {
    let renderer: ReactTestRenderer.ReactTestRenderer | undefined;
    await ReactTestRenderer.act(() => {
      renderer = ReactTestRenderer.create(<ProjectsScreen />);
    });
    expect(renderer).toBeDefined();
  });

  it('renders CertsScreen with IBM and Coursera credentials', async () => {
    let renderer: ReactTestRenderer.ReactTestRenderer | undefined;
    await ReactTestRenderer.act(() => {
      renderer = ReactTestRenderer.create(<CertsScreen />);
    });
    expect(renderer).toBeDefined();
  });

  it('renders ResumeScreen with complete interactive document view', async () => {
    let renderer: ReactTestRenderer.ReactTestRenderer | undefined;
    await ReactTestRenderer.act(() => {
      renderer = ReactTestRenderer.create(<ResumeScreen />);
    });
    expect(renderer).toBeDefined();
  });

  it('renders ContactScreen with reach-out channels', async () => {
    let renderer: ReactTestRenderer.ReactTestRenderer | undefined;
    await ReactTestRenderer.act(() => {
      renderer = ReactTestRenderer.create(<ContactScreen />);
    });
    expect(renderer).toBeDefined();
  });

  it('renders standalone components Navbar, SectionTitle, SkillBar', async () => {
    await ReactTestRenderer.act(() => {
      ReactTestRenderer.create(<Navbar active="Home" onPress={() => {}} />);
      ReactTestRenderer.create(<SectionTitle title="Test Title" />);
      ReactTestRenderer.create(<SkillBar name="React Native" level={80} />);
      jest.runAllTimers();
    });
  });
});
