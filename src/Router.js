import { HashRouter, Route } from 'react-router-dom';

import SideMenu from './components/SideMenu';

import UsersPage from './pages/UsersPage';
import ProductsPage from './pages/ProductsPage';

function Router() {
  return (
    <HashRouter>
      <SideMenu>
        <Route exact path="/" component={UsersPage} />
        <Route exact path="/products" component={ProductsPage} />
      </SideMenu>
    </HashRouter>
  );
};

export default Router;