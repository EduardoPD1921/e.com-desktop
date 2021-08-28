import React, { useState, useEffect } from 'react';
import api from '../../api';

import { Button, Form, Table, Spin, Tag, message } from 'antd';

import { ProductsPageContainer } from './styles';

import ProductModalForm from '../../components/ProductModalForm';

function ProductsPage() {
  const [products, setProducts] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    api.get('/product/show')
      .then(resp => setProducts(resp.data))
      .catch(error => {
        message.error('Erro interno');
        console.log(error.response);
      });

    const isProductRegistered = sessionStorage.getItem('product-registered');

    if (isProductRegistered) {
      sessionStorage.removeItem('product-registered');
      message.success('Produto cadastrado');
    };
  }, []);

  const [form] = Form.useForm();

  function showModal() {
    setIsModalVisible(true);
  };

  function handleCancel() {
    form.resetFields();
    setIsModalVisible(false);
  };

  const columns = [
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

  function renderProductsTable() {
    if (products) {
      return (
        <Table
          title={() => <h3>Produtos cadastrados</h3>}
          columns={columns}
          dataSource={products}
        />
      );
    };

    return <Spin style={{ alignSelf: 'center' }} />
  };

  return (
    <ProductsPageContainer>
      {renderProductsTable()}
      <Button onClick={showModal}>
        Cadastrar produto
      </Button>
      <ProductModalForm
        isModalVisible={isModalVisible}
        handleCancel={handleCancel}
        form={form}
      />
    </ProductsPageContainer>
  );
};

export default ProductsPage;