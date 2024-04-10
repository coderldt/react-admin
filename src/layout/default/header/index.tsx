import React from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Button } from 'antd';
import './index.less'
import { updateCollapse } from "@/redux/modules/menu.ts";
import { useDispatch, useSelector } from "@/redux";
import AppSearch from './components/appSearch.tsx'
import Notify from './components/notify.tsx'

const DefaultHeader: React.FC = () => {
  const { isCollapse } = useSelector((state) => state.menu);
  const dispatch = useDispatch()

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
        <div className="layout-header-action-item">
          <AppSearch  />
        </div>
        <div className="layout-header-action-item">
          <Notify  />
        </div>
      </div>
    </div>
  );
};

export default DefaultHeader;