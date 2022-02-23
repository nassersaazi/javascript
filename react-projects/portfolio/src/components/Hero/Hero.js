import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I'm Nasser
      </SectionTitle>
      <SectionText>
      I am a software engineer with 3 years experience with frontend, backend and devops skills.<br/>
      I have previously developed fintech systems. I currently maintain systems for monitoring servers . I also contribute to crypto open source projects in my free time.
      </SectionText>
      <Button onClick={() => window.location = 'https://nassersaazi.github.io/resume.html'}>View Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;