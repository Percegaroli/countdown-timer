import React from 'react';
import styles from './styles.module.scss';

interface Props {
  className?: string;
}

const Background: React.FC<Props> = ({ className, children }) => (
  <div className={`${styles.Background} ${className}`}>
    {children}
  </div>
);

Background.defaultProps = {
  className: '',
};

export default Background;
