import { Tag } from 'antd';

const productTableConfig = [
  {
    title: 'ID',
    dataIndex: '_id',
    key: '_id'
  },
  {
    title: 'Título',
    dataIndex: 'title',
    key: 'title'
  },
  {
    title: 'Descrição',
    dataIndex: 'description',
    key: 'description'
  },
  {
    title: 'Preço',
    dataIndex: 'price',
    key: 'price'
  },
  {
    title: 'Tags',
    dataIndex: 'tags',
    key: 'tags',
    render: tags => {
      return tags.map(tag => {
        return <Tag color="blue">{tag}</Tag>
      });
    }
  },
  {
    title: 'Imagem',
    dataIndex: 'image',
    key: 'image'
  },
  {
    title: 'Data de cadastro',
    dataIndex: 'registrationDate',
    key: 'registrationDate',
    render: registrationDate => {
      const date = new Date(registrationDate);

      const dateDay = date.getDate();
      const dateMonth = date.getMonth() + 1;
      const dateYear = date.getFullYear();

      const fullDate = `${dateDay}/${dateMonth}/${dateYear}`;

      return fullDate;
    }
  }
];

export default productTableConfig;