import React from 'react'
import { Descriptions, Badge } from 'antd';

import './style.scss'

export default class Ground extends React.Component {

    componentDidMount () {
        console.log('dddddd')
    }

    render() {
        return (
            <div className='container'>
             <Descriptions title="个人信息" layout="vertical" bordered>
                <Descriptions.Item label="用户名">Cloud Database</Descriptions.Item>
                <Descriptions.Item label="手机号码">Prepaid</Descriptions.Item>
                <Descriptions.Item label="账户余额">YES</Descriptions.Item>
                <Descriptions.Item label="场地">2018-04-24 18:00:00</Descriptions.Item>
                <Descriptions.Item label="Usage Time" span={2}>
                  2019-04-24 18:00:00
                </Descriptions.Item>
                <Descriptions.Item label="Status" span={3}>
                  <Badge status="processing" text="Running" />
                </Descriptions.Item>
                <Descriptions.Item label="Negotiated Amount">$80.00</Descriptions.Item>
                <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
                <Descriptions.Item label="Official Receipts">$60.00</Descriptions.Item>
                <Descriptions.Item label="Config Info">
                  Data disk type: MongoDB
                  <br />
                  Database version: 3.4
                  <br />
                  Package: dds.mongo.mid
                  <br />
                  Storage space: 10 GB
                  <br />
                  Replication factor: 3
                  <br />
                  Region: East China 1<br />
                </Descriptions.Item>
              </Descriptions>
            </div>
        )
    }
}
