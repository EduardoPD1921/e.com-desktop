import { Space, Button } from 'antd';

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

export default userTableConfig;