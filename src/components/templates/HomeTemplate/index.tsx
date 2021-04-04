import React from 'react';
import Background from '../../atoms/Background';
import Hills from '../../atoms/Hills';
import Typography from '../../atoms/Typography';
import TimeToLaunchCardsSection from '../../organisms/TimeToLaunchCardsSection';
import styles from './styles.module.scss';

const HomeTemplate = () => {
  const title = 'We\'re launching soon';
  return (
    <Background>
      <Typography
        uppercase
        variant="h2"
        className={styles.Title}
        align="center"
      >
        {title}
      </Typography>
      <TimeToLaunchCardsSection />
      <Hills className={styles.Hills} />
    </Background>

  );
};

export default HomeTemplate;
