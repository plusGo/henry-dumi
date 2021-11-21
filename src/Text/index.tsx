import React, { FC } from 'react';

interface TextProps {
  color: string;
}

const HenryText: FC<TextProps> = (props) => {
  return <div style={{ color: props.color }}>{props.children}</div>;
};

export default HenryText;
