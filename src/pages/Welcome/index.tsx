import { Avatar, Card, List } from 'antd';
import React from 'react';
import { useSelector } from '@/redux';
import welcomeImg from '@/assets/images/welcome.png';
import './index.less';
const des = [
  '你认为的绝境，也许是新的开始',
  '让生活简单美好',
  '努力到极致，就会有奇迹发生',
  '早睡早起身体好',
  '博观而约取，厚积而薄发',
  '生如逆旅，一苇以航',
  '初心不改，奋斗不止',
  '凡心所向，素履以往',
  '普通的改变，将改变普通',
  '你所有的经历正在成就此刻的自己',
  '简单做人，用心做事',
  '能力越大，责任越大',
];
const descriptionT = des[Math.ceil(Math.random() * 11)];
const getTimeState = () => {
  // 获取当前时间
  const timeNow = new Date();
  // 获取当前小时
  const hours = timeNow.getHours();
  // 设置默认文字
  let text = ``;
  // 判断当前时间段
  if (hours >= 0 && hours <= 10) {
    text = `早上好`;
  } else if (hours > 10 && hours <= 14) {
    text = `中午好`;
  } else if (hours > 14 && hours <= 18) {
    text = `下午好`;
  } else if (hours > 18 && hours <= 24) {
    text = `晚上好`;
  }
  // 返回当前时间段对应的状态
  return text;
};
const Welcome: React.FC = () => {
  const { user } = useSelector((state) => state.global);
  return (
    <>
      <Card style={{ height: '100%' }} classNames={{ body: '' }}>
        <List
          itemLayout="horizontal"
          dataSource={[{ title: user.username }]}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={welcomeImg} />}
                title={
                  <span>
                    {getTimeState()}，<span className="name">{item.title} </span>
                    祝你开心每一天！
                  </span>
                }
                description={descriptionT}
              />
            </List.Item>
          )}
        />
        <img src={welcomeImg} className="welcome-img" alt="welcome" />
      </Card>
    </>
  );
};

export default Welcome;
