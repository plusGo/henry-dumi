import { Button } from 'antd';
import React, { FC } from 'react';
import style from './index.less';

interface HenryButtonProps {
  name: string;
}

const HenryButton: FC<HenryButtonProps> = (props) => {
  return (
    <Button className={style['henry-button']}>
      I am henry button,my name is {props.name}
    </Button>
  );
};

export default HenryButton;
