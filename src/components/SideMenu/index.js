import { Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { Menu } from 'antd';
import { UserOutlined, ShoppingOutlined } from '@ant-design/icons';

import { MenuContainer } from './styles';

function SideMenu({ children }) {
  return (
    <MenuContainer>
      <Menu
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        mode="inline"
        theme="light"
      >
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link to="/">Usuários</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<ShoppingOutlined />}>
          <Link to="/products">Produtos</Link>
        </Menu.Item>
      </Menu>
      <Switch>
        {children}
      </Switch>
    </MenuContainer>
  );
};

export default SideMenu;