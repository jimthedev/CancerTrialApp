import { createRouter } from '@exponent/ex-navigation';
import HomePage from './HomePage';
import TestPage from './TestPage';
import InfoPage from './InfoPage';



 const Router = createRouter(() => ({
  home: () => HomePage,
  test: () => TestPage,
  info: () => InfoPage
}));

export default Router;
