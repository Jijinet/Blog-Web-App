import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import { Menu } from 'antd';
import { Typography } from 'antd';
import { Space } from 'antd';

const { Title } = Typography;


const Navbar =()=> {


  
    return (
      <>
      <Space align="center">
      <Link to="/">
        <Title level={2} align="center" style={{marginTop:5,color:'MidnightBlue'}} color="orange" >
          BLOGGING
        </Title>
      </Link>
     
        </Space>
      <Menu mode="horizontal" theme="dark">

          <Menu.Item>
          <Link to="/">
            Home
          </Link>
        </Menu.Item>

        <Menu.Item>
          <Link to="/articles">
            Articles
          </Link>
        </Menu.Item>

        <Menu.Item>
          <Link to="/profile">
            Profile
          </Link>
        </Menu.Item>

        <Menu.Item>
          <Link to="/about">
            About us
          </Link>
        </Menu.Item>

      </Menu>
      </>
    );
  
}

export default Navbar;
