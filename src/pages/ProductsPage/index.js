import React, { useState } from 'react';

import { Modal, Button, Form, Input } from 'antd';

function ProductsPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  function showModal() {
    setIsModalVisible(true);
  };

  function handleCancel() {
    setIsModalVisible(false);
  };

  function onSubmitForm(inputValues) {
    console.log(inputValues);
  };

  return (
    <>
      <Button onClick={showModal}>
        Cadastrar produto
      </Button>
      <Modal 
        onCancel={handleCancel}
        title="Cadastro de produto" 
        visible={isModalVisible}
        footer={null}
        closable={true}
      >
        <Form
          requiredMark={false}
          name="product_register"
          onFinish={onSubmitForm}
        >
          <Form.Item name="test">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ProductsPage;