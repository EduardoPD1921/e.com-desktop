import { HashRouter, Route } from 'react-router-dom';

import SideMenu from './components/SideMenu';

import UsersScreen from './screens/UsersScreen';
import ProductsScreen from './screens/ProductsScreen';

function Router() {
  return (
    <HashRouter>
      <SideMenu>
        <Route exact path="/" component={UsersScreen} />
        <Route exact path="/products" component={ProductsScreen} />
      </SideMenu>
    </HashRouter>
  );
};

export default Router;