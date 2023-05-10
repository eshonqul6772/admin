import { Table } from 'antd';
import { BiExport } from 'react-icons/bi';

const columns = [
  {
    title: 'Date received',
    dataIndex: 'name',
    sorter: {
      compare: (a, b) => a.chinese - b.chinese,
      multiple: 3,
    },
  },
  {
    title: 'Type',
    dataIndex: 'chinese',
    sorter: {
      compare: (a, b) => a.math - b.math,
      multiple: 2,
    },
  },
  {
    title: 'Status',
    dataIndex: 'math',
  },
  {
    title: 'Value USD',
    dataIndex: 'english',
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },

  {
    title: 'Value BTC ',
    dataIndex: 'english',
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
];
const data = [
  {
    key: '1',
    name: '26/05/22, 22:40:32',
    chinese: 98,
    math: 60,
    english: 70,
  },
  {
    key: '2',
    name: 'Jim Green',
    chinese: 98,
    math: 66,
    english: 89,
  },
  {
    key: '3',
    name: 'Joe Black',
    chinese: 98,
    math: 90,
    english: 70,
  },
  {
    key: '4',
    name: 'Jim Red',
    chinese: 88,
    math: 99,
    english: 89,
  },

  {
    key: '1',
    name: 'John Brown',
    chinese: 98,
    math: 60,
    english: 70,
  },
  {
    key: '2',
    name: 'Jim Green',
    chinese: 98,
    math: 66,
    english: 89,
  },
  {
    key: '3',
    name: 'Joe Black',
    chinese: 98,
    math: 90,
    english: 70,
  },
  {
    key: '4',
    name: 'Jim Red',
    chinese: 88,
    math: 99,
    english: 89,
  },
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

import './HIstory.modul.scss';

function History() {
  return (
    <div>
     
      <div className='export__file'>
        <label htmlFor='file'>
          <BiExport size='28px' /> Export history
        </label>
        <input id='file' type='file' />
      </div>

      <Table
        className='table text-white table__row'
        columns={columns}
        dataSource={data}
        onChange={onChange}
      />
    </div>
  );
}

export default History;
