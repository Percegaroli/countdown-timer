import React from 'react';
import styles from './styles.module.scss';

interface Props {
  className?: string
}

const Hills = ({ className }: Props) => (
  <div className={`${styles.Hills} ${className}`} />
);

Hills.defaultProps = {
  className: '',
};

export default Hills;
