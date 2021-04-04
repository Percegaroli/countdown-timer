import React from 'react';
import Typography from '../../atoms/Typography';
import styles from './styles.module.scss';

interface Props {
  className?: string
  number: number
}

const NumberCard = (props: Props) => {
  const { className, number } = props;
  return (
    <div className={styles.Container}>
      <div className={`${styles.Card} ${className}`}>
        <Typography className={styles.Number}>
          {number}
        </Typography>
      </div>
      <div className={styles.CardShadow} />
    </div>
  );
};

NumberCard.defaultProps = {
  className: '',
};

export default NumberCard;
