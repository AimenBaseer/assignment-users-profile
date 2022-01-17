import "antd/dist/antd.css";
import "../index.css";

import { Card, Typography, List } from "antd";
import {
  EditOutlined,
  ShoppingFilled,
  HeartOutlined,
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { useQuery } from "react-query";

import { getAvatar } from "../services/userAPI";

const { Title, Text } = Typography;

interface IProps {
  userName: string;
  email: string;
  contactNo: string;
  url: string;
}

export const UserCard = ({ userName, email, contactNo, url }: IProps) => {
  const {
    data = ""
  } = useQuery<string, Error>(`avatar-${userName}`, () => getAvatar(userName));

  return (
    <div className="card-container">
      <Card
      tabIndex={0}
      className="user-card"
        cover={
          <img src={`data:image/svg+xml;utf8,${encodeURIComponent(data)}`} />
        }
        actions={[
          <HeartOutlined key="heart" tabIndex={0} style={{ color: "red" }} />,
          <EditOutlined key="edit" tabIndex={0}/>,
          <ShoppingFilled key="ellipsis" tabIndex={0} />,
        ]}
      >
        <Title className="card-title" >{userName}</Title>
        <List size="small" bordered={false} style={{ lineHeight: 0 }}>
          <List.Item>
            <Text type="secondary">
              <MailOutlined key="email" />
              {email}
            </Text>
          </List.Item>
          <List.Item>
            <Text type="secondary">
              <PhoneOutlined key="contact" />
              {contactNo}
            </Text>
          </List.Item>
          <List.Item>
            <Text type="secondary">
              <GlobalOutlined key="globe" />
              {url}
            </Text>
          </List.Item>
        </List>
      </Card>
    </div>
  );
};
