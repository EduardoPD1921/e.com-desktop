import React, { useState } from 'react';
import api from '../../api';

import { Modal, Button, Form, Input, Select, Upload, message } from 'antd';
import { IdcardOutlined, DollarOutlined, InboxOutlined } from '@ant-design/icons';

import { UploadDescription, FormButtonSection } from './styles';

const { TextArea } = Input;
const { Option } = Select;
const { Dragger } = Upload;

function ProductsPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [form] = Form.useForm();

  function showModal() {
    setIsModalVisible(true);
  };

  function handleCancel() {
    form.resetFields();
    setIsModalVisible(false);
  };

  function onSubmitForm(inputValues) {
    setIsLoading(true);
    
    const imageType = inputValues.image.fileList[0].type;

    if (imageType !== 'image/jpeg' && imageType !== 'image/png') {
      return message.error('A imagem precisa ser JPG ou PNG');
    };

    const data = new FormData();
    data.append('title', inputValues.title);
    data.append('description', inputValues.description);
    data.append('price', inputValues.price);
    data.append('tags', inputValues.tags);
    data.append('image', inputValues.image.fileList[0].originFileObj);

    api.post('/product/store', data)
      .then(resp => {
        setIsLoading(false);
        handleCancel();
        message.success('Produto cadastrado!');
      })
      .catch(error => console.log(error.response));
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
          encType="multipart/form-data"
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
              disabled={isLoading}
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
            <TextArea disabled={isLoading} />
          </Form.Item>
          <Form.Item
            label="Preço"
            name="price"
            rules={[{
              required: true,
              message: 'O produto precisa de um preço'
            }]}
          >
            <Input disabled={isLoading} prefix={<DollarOutlined />} />
          </Form.Item>
          <Form.Item
            label="Tags"
            name="tags"
            rules={[{
              required: true,
              message: 'Insira alguma tag'
            }]}
          >
            <Select disabled={isLoading} placeholder="Digite ou selecione alguma tag" mode="tags">
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
            <Dragger
              disabled={isLoading}
              beforeUpload={() => false} 
            >
              <InboxOutlined style={{ fontSize: 50, color: '#40a9ff' }} />
              <UploadDescription>
                Arraste uma imagem ou clique para selecionar
              </UploadDescription>
            </Dragger>
          </Form.Item>
          <Form.Item>
            <FormButtonSection>
              <Button 
                disabled={isLoading}
                style={{ margin: 5 }} 
                type="primary" 
                danger
                onClick={handleCancel}
              >
                Cancelar
              </Button>
              <Button 
                loading={isLoading}
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

export default ProductsPage;