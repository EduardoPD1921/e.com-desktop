import { HashRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';

function Router() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </HashRouter>
  );
};

export default Router;