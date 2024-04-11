import React from 'react'
import {
  CaretDownOutlined,
  ExclamationCircleOutlined,
  HomeOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Button, Dropdown, Modal, Space, message } from 'antd'
import './index.less'
import Avatar from 'antd/es/avatar/avatar'
import { useNavigate } from 'react-router-dom'

// import AppSearch from './components/appSearch.tsx'
// import Notify from './components/notify.tsx'
import { updateCollapse } from '@/redux/modules/menu.ts'
import { useDispatch, useSelector } from '@/redux'
import welcomeImg from '@/assets/images/welcome.png'

const DefaultHeader: React.FC = () => {
  const navigate = useNavigate()
  const { isCollapse } = useSelector(state => state.menu)
  const { user } = useSelector(state => state.global)
  const dispatch = useDispatch()
  // 退出登录
  const logout = () => {
    Modal.confirm({
      title: '温馨提示 🧡',
      icon: <ExclamationCircleOutlined />,
      content: '是否确认退出登录？',
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        message.success('退出登录成功！')
      },
    })
  }
  const menu: MenuProps['items'] = [
    {
      key: '1',
      label: (
          <span className="dropdown-item">
            <Space>
              <HomeOutlined />
              首页
            </Space>
          </span>
      ),
      onClick: () => navigate('/welcome'),
    },
    {
      type: 'divider',
    },
    {
      key: '4',
      label: (
          <span className="dropdown-item">
            <Space>
              <LogoutOutlined />
              退出登录
            </Space>
          </span>
      ),
      onClick: logout,
    },
  ]

  return (
    <div className="layout-header">
      <div className="layout-header-left">
        <Button
          type="text"
          icon={isCollapse ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => dispatch(updateCollapse(!isCollapse))}
          style={{
            fontSize: '16px',
            width: 64,
            height: 64,
          }}
        />
      </div>
      <div className="layout-header-action">
        {/* <div className="layout-header-action-item">
          <AppSearch />
        </div>
        <div className="layout-header-action-item">
          <Notify />
        </div> */}
        {user.username && (
          <Dropdown menu={{ items: menu }} placement="bottomLeft" trigger={['click']}>
            <div style={{ cursor: 'pointer' }}>
              <Avatar style={{ width: '24px', height: '24px' }} src={welcomeImg} />
              <span className="username">{user.username}</span>
              <CaretDownOutlined />
            </div>
          </Dropdown>
        )}
      </div>
    </div>
  )
}

export default DefaultHeader
