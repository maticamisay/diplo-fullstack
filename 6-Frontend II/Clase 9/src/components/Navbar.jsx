import React from "react";
import { Layout, Menu } from "antd";
import { HomeOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";

const { Header } = Layout;

const Navbar = () => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Inicio
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            Perfil
          </Menu.Item>
          <Menu.Item key="3" icon={<SettingOutlined />}>
            Configuración
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
};

export default Navbar;
