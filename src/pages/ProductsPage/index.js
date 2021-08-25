import React, { useState } from 'react';

import { Modal, Button, Form, Input, Select, Upload } from 'antd';
import { IdcardOutlined, DollarOutlined, InboxOutlined } from '@ant-design/icons';

import { UploadDescription, FormButtonSection } from './styles';

const { TextArea } = Input;
const { Option } = Select;
const { Dragger } = Upload;

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
          form={form}
          layout="vertical"
          requiredMark={false}
          name="product_register"
          onFinish={onSubmitForm}
        >
          <Form.Item
            label="Título"
            name="title"
            rules={[{
              required: true,
              message: 'O produto precisa de um título'
            }]}
          >
            <Input 
              placeholder="Digite o título do produto" 
              prefix={<IdcardOutlined />} 
            />
          </Form.Item>
          <Form.Item
            label="Descrição"
            name="description"
            rules={[{
              required: true,
              message: 'O produto precisa de uma descrição'
            }]}
          >
            <TextArea />
          </Form.Item>
          <Form.Item
            label="Preço"
            name="price"
            rules={[{
              required: true,
              message: 'O produto precisa de um preço'
            }]}
          >
            <Input prefix={<DollarOutlined />} />
          </Form.Item>
          <Form.Item
            label="Tags"
            name="tags"
            rules={[{
              required: true,
              message: 'Insira alguma tag'
            }]}
          >
            <Select placeholder="Digite ou selecione alguma tag" mode="tags">
              <Option key="1">Eletrônicos</Option>
              <Option key="2">Escritório</Option>
              <Option key="3">Gamer</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Imagem"
            name="image"
            rules={[{
              required: true,
              message: 'Insira uma imagem para o produto'
            }]}
          >
            <Dragger multiple={false}>
              <InboxOutlined style={{ fontSize: 50, color: '#40a9ff' }} />
              <UploadDescription>
                Arraste uma imagem ou clique para selecionar
              </UploadDescription>
            </Dragger>
          </Form.Item>
          <Form.Item>
            <FormButtonSection>
              <Button 
                style={{ margin: 5 }} 
                type="primary" 
                danger
                onClick={handleCancel}
              >
                Cancelar
              </Button>
              <Button 
                style={{ margin: 5 }} 
                type="primary" 
                htmlType="submit"
              >
                Cadastrar
              </Button>
            </FormButtonSection>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

// tags preço data de cadastro imagem

export default ProductsPage;