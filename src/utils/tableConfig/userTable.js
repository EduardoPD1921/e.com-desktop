import { Space, Button, message } from 'antd';

import api from '../../api';

function deleteUser(id) {
  api.delete(`/user/delete/${id}`)
    .then(resp => {
      sessionStorage.setItem('user-deleted', 'true');
      window.location.reload();
    })
    .catch(error => {
      message.error('Erro interno');
      console.log(error.response);
    });
};

const userTableConfig = [
  {
    title: 'ID',
    dataIndex: '_id',
    key: '_id'
  },
  {
    title: 'Nome',
    dataIndex: 'name',
    key: 'name'
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
    dataIndex: '_id',
    key: 'actions',
    render: id => {
      return (
        <Space>
          <Button type="primary">Editar</Button>
          <Button onClick={() => deleteUser(id)} type="primary" danger>Deletar</Button>
        </Space>
      );
    }
  }
];

export default userTableConfig;