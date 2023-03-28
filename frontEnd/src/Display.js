import { Card, Col, Row, Modal, message } from 'antd'
import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import ReactPlayer from 'react-player'
import { Avatar } from 'antd'
const { Meta } = Card

const Display = (props) => {
  return (
    <Col span={12}>
      <Card
        style={{
          width: 300,
        }}
        cover={<img alt="example" src={`${props.data.photo}`} />}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
          title={props.data.firstName}
          description={props.data.gender}
        />
      </Card>
    </Col>
  )
  //////////////////////////////////////////////////////////
}

export default Display
