import { HashRouter, Route } from 'react-router-dom';

import SideMenu from './SideMenu';

import UsersPage from './pages/UsersPage';
import ProductRegistrationPage from './pages/ProductRegistrationPage';

function Router() {
  return (
    <HashRouter>
      <SideMenu>
        <Route exact path="/" component={UsersPage} />
        <Route exact path="/productRegistration" component={ProductRegistrationPage} />
      </SideMenu>
    </HashRouter>
  );
};

export default Router;