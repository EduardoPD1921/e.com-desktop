import React, { useEffect, useState } from 'react';

import { message } from 'antd';

import InfoTable from '../../components/InfoTable';
import userTableConfig from '../../utils/tableConfig/userTable';

import { UsersPageContainer } from './styles';

import api from '../../api';

function UsersPage() {
  const [users, setUsers] = useState();

  useEffect(() => {
    api.get('/user/show')
      .then(resp => setUsers(resp.data))
      .catch(error => {
        message.error('Erro interno');
        console.log(error.response);
      });
  });

  return (
    <UsersPageContainer>
      <InfoTable
        title="Usuários cadastrados"
        columns={userTableConfig}
        dataSource={users}
      />
    </UsersPageContainer>
  );
};

export default UsersPage;