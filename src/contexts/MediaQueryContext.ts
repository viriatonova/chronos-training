import { createContext } from 'react';
interface IMediaQuery {
  mediaQuery: boolean;
}

const MediaQueryContext = createContext<IMediaQuery>({
  mediaQuery: false,
});

export default MediaQueryContext;
