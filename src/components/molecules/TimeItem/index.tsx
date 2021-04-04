import React from 'react';
import Typography from '../../atoms/Typography';
import NumberCard from '../NumberCard';
import styles from './styles.module.scss';

interface Props {
  className?: string;
  number: number;
  label: string;
}

const TimeItem = (props: Props) => {
  const { className, number, label } = props;
  return (
    <div className={`${styles.Container} ${className}`}>
      <NumberCard number={number} />
      <Typography
        className={styles.Label}
        variant="h4"
        uppercase
        align="center"
      >
        {label}
      </Typography>
    </div>
  );
};

TimeItem.defaultProps = {
  className: '',
};

export default TimeItem;
