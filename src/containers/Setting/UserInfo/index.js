import React from 'react'
import { Descriptions, Badge, Card} from 'antd';
import { EditOutlined, FieldTimeOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import api from 'api'
import './style.scss'
const { Meta } = Card;
export default class Ground extends React.Component {
   constructor() {
     super()
     this.state = {
       bookInfo: [], //全部预约消息
       activeBook: {},
       showUpdateModel: false
     }
   }

    componentDidMount () {
       this.getBookInfo();
    }

    getBookInfo() {
      api.getBookInfo({}).then(res => {
        this.setState({
          bookInfo: res
        })
      })
    }
    // 修改预约信息
    ChangeInfo(book) {
      console.log(book)
      this.setState({
        activeBook: book,
        showUpdateModel: true
      })
      // api.upDateBookInfo({})

    }

    render() {
      var info =  window.localStorage.getItem('userInfo');
      var {phone, channel, password} = JSON.parse(info);
        return (
            <div className='container'>
             <Descriptions title="个人信息" layout="vertical" bordered>
                <Descriptions.Item label="用户名">Cloud Database</Descriptions.Item>
                <Descriptions.Item label="手机号码">{phone}</Descriptions.Item>
                <Descriptions.Item label="账户余额">YES</Descriptions.Item>
                <Descriptions.Item label="场地">2018-04-24 18:00:00</Descriptions.Item>
                <Descriptions.Item label="Usage Time" span={2}>
                  2019-04-24 18:00:00
                </Descriptions.Item>
                <Descriptions.Item label="Status" span={3}>
                  <Badge status="processing" text="Running" />
                </Descriptions.Item>
                <Descriptions.Item label="预约信息">
                    <div style={{display: 'flex', flexWrap:'wrap'}}>
                    {this.state.bookInfo.map(book => {
                      return (<div key={book.id} className="bookitem">
                        <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src={book.img} width="150px" height="150px" />}
                                // actions={[
                                // <EditOutlined key="edit" onClick={()=>{this.ChangeInfo(book)}} />, // 修改预约信息
                                //    ]}
                                 >
                              <Meta title={book.title} description={book.reserverTime || '-'} />
                            </Card>
                      </div>)
                    })}
                  </div>
                </Descriptions.Item>
              </Descriptions>


            </div>
        )
    }
}
