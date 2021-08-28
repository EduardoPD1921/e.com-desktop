import React from 'react';

import { Table, Spin } from 'antd';

function Table({ title, columns, dataSource }) {
  if (dataSource) {
    return (
      <Table
        title={() => <h3>{title}</h3>}
        columns={columns}
        dataSource={dataSource} 
      />
    );
  };

  return <Spin style={{ alignSelf: 'center' }} />
};

export default Table;