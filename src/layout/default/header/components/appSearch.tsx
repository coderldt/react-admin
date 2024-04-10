import React from 'react';
import { SearchOutlined } from '@ant-design/icons'
// import './index.less'

const AppSearch: React.FC = () => {
  return (
    <>
      <div className="header-right-search">
        <SearchOutlined/>
      </div>
    </>
  );
};

export default AppSearch;