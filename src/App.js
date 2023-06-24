import { Layout, Card, Input, Row, Button, Col } from 'antd';
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
const { Header, Content } = Layout;
const App = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  return (
    <Layout>
      <Header style={{ background: '#ffffff' }}>
        <Navbar />
      </Header>
      <Content style={{ minHeight: '93vh' }}>
        <Row justify='center' style={{ marginTop: '300px' }}>
          <Card style={{ height: '400px', width: '400px' }}>
            <Row justify='center' style={{ marginBottom: '20px', marginTop: '100px' }}>
              <Col span={20}>
                <Input onChange={(e) => setUsername(e.target.value)} />
              </Col>
            </Row>
            <Row justify='center' style={{ marginBottom: '20px' }}>
              <Col span={20}>
                <Input onChange={(e) => setPassword(e.target.value)} />
              </Col>
            </Row>
            <Row justify='center'>
              <Button>Log in</Button>
            </Row>
          </Card>
        </Row>
      </Content>
    </Layout >
  );
};
export default App;