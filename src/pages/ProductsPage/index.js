import React, { useState } from 'react';

import { Button, Form } from 'antd';

import ProductModalForm from '../../components/ProductModalForm';

function ProductsPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [form] = Form.useForm();

  function showModal() {
    setIsModalVisible(true);
  };

  function handleCancel() {
    form.resetFields();
    setIsModalVisible(false);
  };

  return (
    <>
      <Button onClick={showModal}>
        Cadastrar produto
      </Button>
      <ProductModalForm
        isModalVisible={isModalVisible}
        handleCancel={handleCancel}
        form={form}
      />
    </>
  );
};

export default ProductsPage;