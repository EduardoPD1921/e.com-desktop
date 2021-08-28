import React, { useState, useEffect } from 'react';
import api from '../../api';

import { Button, Form, message } from 'antd';

import { ProductsPageContainer } from './styles';

import InfoTable from '../../components/InfoTable';
import productTableConfig from '../../utils/tableConfig/productTable';

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

  return (
    <ProductsPageContainer>
      <InfoTable
         title="Produtos cadastrados"
         columns={productTableConfig}
         dataSource={products}
      />
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