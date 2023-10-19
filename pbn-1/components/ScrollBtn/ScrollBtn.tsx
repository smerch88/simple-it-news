import { FC } from 'react';
import { Link as Scroll } from 'react-scroll';

import { ScrollBtnProps } from './ScrollBtn.props';

export const ScrollBtn: FC<ScrollBtnProps> = ({ children }) => {
  return (
    <Scroll
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      onClick={onClick}
      to="header"
      href="header"
      smooth={true}
      duration={100}
      className="fixed bottom-10 right-10"
    >
      {children}
    </Scroll>
  );
};
