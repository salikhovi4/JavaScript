import React, { useContext, useState, useEffect, useRef } from 'react';
import { Table, Input, Button, Popconfirm, Form, Space, Select, DatePicker, InputNumber, Collapse } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import './App.css';

const EditableContext = React.createContext(null);

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

class EditableTable extends React.Component {
  constructor(props) {
    super(props);
    this.inputForm = () => {
      /*
        Form for updating students data
      */
      const { Panel } = Collapse;

      // Predetermined values
      const minDate = new Date(1900, 1, 1);
      const currDate = new Date()
      const faculties = {
        chem: 'Химический Институт',
        ifmit: 'ИФМИТ'
      }

      // Collapse Callback
      const callback = (key) =>{
        // console.log(key);
      }

      // Event on Form Submitting
      const onFinish = (values) => {
        let age = currDate.getFullYear() - values.birthday._d.getFullYear();
        let studBirthday = `${values.birthday._d.getDate()}.${values.birthday._d.getMonth()}.${values.birthday._d.getFullYear()} (Возраст: ${age})`;
        let studEnrollDate;
        if (values.enroll + 4 < currDate.getFullYear()) {
          studEnrollDate = `${values.enroll}-${values.enroll + 4} (Закончил)`;
        } else {
          studEnrollDate = `${values.enroll}-${values.enroll + 4} (${currDate.getFullYear()-values.enroll + 1}-й курс)`
        }
        
        // Try to load data from localStorage otherwise load from state
        let count = parseFloat(localStorage.getItem('count'));
        if (isNaN(count)) {
          count = this.state.count;
        } 
        let dataSource = JSON.parse(localStorage.getItem('students'));
        if (dataSource === null) {
          dataSource = [...this.state.dataSource];
        }
        console.log(dataSource);

        let newStudent = {
          key: this.state.count,
          name: values.stud_name,
          age: studBirthday,
          faculty: faculties[values.faculty],
          course: studEnrollDate
        }
        localStorage.setItem('students', JSON.stringify([...dataSource, newStudent]))
        localStorage.setItem('count', (count + 1).toString())
        this.setState({
          dataSource: [...dataSource, newStudent],
          count: count + 1,
        });
      };

      const checkTextField = (_, value) => {
        // Validate Name and Faculty of the Student
        if (value === undefined || value.trim() === '') {
          return Promise.reject(new Error('Input Field Must Be Not Empty!'));
        }
        return Promise.resolve();
      };

      const checkDate = (_, value) => {
        // Validate Birthday Date of the Student
        if (value == null) {
          return Promise.reject(new Error('Birthday Field Must Be Filled!'));
        } else if (value._d - minDate < 0) {
          return Promise.reject(new Error('Dates Before 1900.01.01 Are Not Valid!'));
        } else if (value._d - currDate > 0) {
          return Promise.reject(new Error(
            `Dates After ${currDate.getFullYear()}.${currDate.getDay()}.${currDate.getMonth()} Are Not Valid!`));
          }
        return Promise.resolve();
      };

      const checkEnrollDate = (_, value) => {
        // Validate Enroll Date of the Student
        if (value === "") {
          return Promise.reject(new Error('Enroll Date Field Must Be Filled!'));
        } else if (value < 2000) {
          return Promise.reject(new Error('Enroll Dates Before Year 2000 Are Not Valid!'));
        } else if (value > currDate.getFullYear()) {
          return Promise.reject(new Error(
            `Enroll Dates After Year ${currDate.getFullYear()} Are Not Valid!`));
        } 
        return Promise.resolve();
      };

      return (
        <Collapse defaultActiveKey={['1']} onChange={callback}>
          <Panel header="Добавить нового студента">
            <Form
              labelCol={{
                span: 4,
              }}
              wrapperCol={{
                span: 14,
              }}
              layout="horizontal"
              onFinish={onFinish}
              style={{
                margin: 20,
                alignContent: 'center'
              }}
            >
              <Form.Item 
                label="ФИО Студента" 
                name="stud_name"
                rules={[
                  {
                    required: true,
                    validator: checkTextField,
                  },
                ]}>
                <Input />
              </Form.Item>
              <Form.Item 
                label="Дата рождения"
                name="birthday"
                rules={[
                  {
                    required: true,
                    validator: checkDate
                  },
                ]}>
                <DatePicker />
              </Form.Item>
              <Form.Item 
                label="Факультет"
                name="faculty"
                rules={[
                  {
                    required: true,
                    validator: checkTextField,
                  },
                ]}>
                <Select>
                  <Select.Option value="chem">Химический Институт</Select.Option>
                  <Select.Option value="ifmit">ИФМИТ</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item 
                label="Год начала обучения"
                name="enroll"
                rules={[
                  {
                    required: true,
                    validator: checkEnrollDate,
                  },
                ]}>
                <InputNumber />
              </Form.Item>
              <Form.Item 
              style={{
                marginLeft: 380,
                alignSelf: 'center'
              }}>
                <Button type="primary" htmlType="submit" block>
                  Добавить Студента
                </Button>
              </Form.Item>
            </Form>
          </Panel>
        </Collapse>
      )
    }

    this.columns = [
      {
        title: 'ФИО',
        dataIndex: 'name',
        width: '30%',
        editable: true,
        sorter: (a, b) => a.name < b.name,
        ...this.getColumnSearchProps('name'),
      },
      {
        title: 'Факультет',
        dataIndex: 'faculty',
        width: '30%',
        editable: true,
        sorter: (a, b) => a.name < b.name,
        ...this.getColumnSearchProps('faculty'),
      },
      {
        title: 'Дата рождения и возраст',
        dataIndex: 'age',
        sorter: (a, b) => {
          let dates = [a.age, b.age]
          dates = dates.map(element => {
            element = element.split(" ")[0].split(".")
            element.reverse()
            element = element.map(parseFloat)
            element = new Date(element)
            return element
          })
          return dates[0] - dates[1]
        },
        ...this.getColumnSearchProps('age'),
      },
      {
        title: 'Годы обучения и номер курса',
        dataIndex: 'course',
        sorter: (a, b) => {
          return parseInt(a.course.split("-")[0]) - parseInt(b.course.split("-")[0])
        },
        ...this.getColumnSearchProps('course'),
      },
      {
        title: 'Действие',
        dataIndex: 'operation',
        render: (_, record) =>
          this.state.dataSource.length >= 1 ? (
            <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
              <a>Удалить</a>
            </Popconfirm>
          ) : null,
      },
    ];
    this.state = {
      dataSource: [
        {
          key: 0,
          name: 'Бабадеев Дмитрий Викторович',
          faculty: 'Химический институт',
          age: '30.03.1995 (Возраст: 26)',
          course: '2020-2022 (2-й курс)',
        },
        {
          key: 1,
          name: 'Чан Йен Ань',
          faculty: 'ИФМИТ',
          age: '31.12.2000 (Возраст: 21)',
          course: '2018-2022 (3-й курс)',
        },
        {
          key: 2,
          name: 'Бедрина Полина Сергеевна',
          faculty: 'ИФМИТ',
          age: '31.4.2001 (Возраст: 21)',
          course: '2018-2022 (3-й курс)',
        }
      ],
      count: 3,
    };
  }

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              this.setState({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex,
              });
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  handleDelete = (key) => {
    console.log(key);
    // Try to load students from localStorage otherwise load from state
    let dataSource = JSON.parse(localStorage.getItem('students'));
    if (dataSource === null) {
      dataSource = [...this.state.dataSource];
    }
    localStorage.setItem('students', JSON.stringify(dataSource.filter((item) => item.key !== key)))
    // localStorage.setItem('count', this.state.count);
    this.setState({
      dataSource: dataSource.filter((item) => item.key !== key),
    });
  };

  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      name: `Зяйкин Евгений Иванович`,
      faculty: 'Химический институт',
      age: '26',
      course: '2020-2022 (2-й курс)',
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  };
  handleSave = (row) => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    this.setState({
      dataSource: newData,
    });
  };

  render() {
    // Try to load students from localStorage otherwise load from state
    let studsLocal = JSON.parse(localStorage.getItem('students'));
    let { dataSource } = this.state;
    if (studsLocal !== null) {
      dataSource = studsLocal;
    }
    console.log(dataSource);
    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map((col) => {
      if (!col.editable) {
        return col;
      }

      return {
        ...col,
        onCell: (record) => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    return (
      <div>
        <this.inputForm />
        <Table
          components={components}
          rowClassName={() => 'editable-row'}
          bordered
          dataSource={dataSource}
          columns={columns}
        />
      </div>
    );
  }
}

const App = () => (
  <div className='App'>
    <EditableTable />
  </div>
);


export default App;
