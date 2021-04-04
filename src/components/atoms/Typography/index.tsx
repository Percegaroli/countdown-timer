import React from 'react';
import styles from './styles.module.scss';

interface Props {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'p',
  className?: string
  uppercase?: boolean,
  align?: 'center'
}

const Typography: React.FC<Props> = ({
  children, uppercase, variant, className, align,
}) => {
  const getClassName = () => {
    const uppercaseClass = uppercase ? styles.Uppercase : '';
    const alignClass = align === 'center' ? styles.Center : '';
    return `${styles[variant]} ${alignClass} ${className} ${uppercaseClass}`;
  };

  const renderElement = () => {
    switch (variant) {
      case 'h1': {
        return (
          <h1 className={getClassName()}>
            {children}
          </h1>
        );
      }
      case 'h2': {
        return (
          <h2 className={getClassName()}>
            {children}
          </h2>
        );
      }
      case 'h3': {
        return (
          <h3 className={getClassName()}>
            {children}
          </h3>
        );
      }
      case 'h4': {
        return (
          <h4 className={getClassName()}>
            {children}
          </h4>
        );
      }
      default: {
        return (
          <p>
            {children}
          </p>
        );
      }
    }
  };

  return renderElement();
};

Typography.defaultProps = {
  className: '',
  variant: 'h1',
  uppercase: false,
  align: undefined,
};

export default Typography;
