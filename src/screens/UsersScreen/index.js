import React, { useEffect, useState } from 'react';

import { Table, Spin, Button, Space, message } from 'antd';

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

  const columns = [
    {
      title: 'ID',
      dataIndex: '_id',
      key: '_id'
    },
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'Data de nascimento',
      dataIndex: 'birthDate',
      key: 'birthDate',
      render: birthDate => {
        const date = new Date(birthDate);

        const dateDay = date.getDate();
        const dateMonth = date.getMonth() + 1;
        const dateYear = date.getFullYear();

        const fullDate = `${dateDay}/${dateMonth}/${dateYear}`;

        return fullDate;
      }
    },
    {
      title: 'Ações',
      dataIndex: 'actions',
      key: 'actions',
      render: () => {
        return (
         <Space>
           <Button type="primary">Editar</Button>
           <Button type="primary" danger>Deletar</Button>
         </Space>
        );
      }
    }
  ];

  function renderUsersTable() {
    if (users) {
      return (
        <Table
          title={() => <h3>Usuários cadastrados</h3>}
          columns={columns}
          dataSource={users}
        />
      );
    };

    return <Spin style={{ alignSelf: 'center' }} />
  };

  return (
    <UsersPageContainer>
      {renderUsersTable()}
    </UsersPageContainer>
  );
};

export default UsersPage;