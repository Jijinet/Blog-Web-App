import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import { Menu } from 'antd';
import { useParams } from 'react-router';
import { Typography } from 'antd';
import { useEffect, useState } from 'react';
import { List } from 'antd';
import { Space } from 'antd';
import BreadcrumbText from './BreadcrumbText';
import { Tabs } from 'antd';
import { Button} from 'antd';
import { Card } from 'antd';
import { Spin } from 'antd';

const { TabPane } = Tabs;
const { Title } = Typography;
const { Text } = Typography;
const {Meta}=Card;




const ArticlesCard=({article})=>{

  const articleUrl=`/article/${article.id}`;
  return(

    <Space align="center" direction='horizontal' size="large" style={{margin:20}}>
    <Card
        style={{ width: 300 }}
      >
        <Meta 
          title={article.title}
          description={article.description}
        />
        <br/>
        {<Button type="primary"><Link to={articleUrl} key="setting">Read More..</Link></Button>}


      </Card>
    
      </Space>

  )
}

const Profile =({articles,Loading})=> {

  const Cards=articles.map((obj,i)=>{
    return <ArticlesCard article={obj} key={i}/>
})

    const [userDetails,setUserDetails]=useState({});
      
  
    useEffect(()=>{
  
          fetch(`/users/2`)
            .then(res => 
              res.json())
            .then(data => {  
                setUserDetails(data);
             })
  
    });

if(Loading){

  return(
    <>
    <BreadcrumbText text="profile"/>
    <Tabs defaultActiveKey="1" >
        <TabPane tab="Profile" key="1">
        <List>
       <Title level={4} mark>Personnel informations</Title>
      <div style={{display:'flex',justifyContent:'center',flexDirection:'column',marginTop:150}}>
        <Spin align="center" size="large" />
      </div>
      </List>
        </TabPane>
        <TabPane tab="Articles" key="2">
        <Title mark level={4}>Articles Created</Title>
          <div style={{display:'flex',justifyContent:'center',flexDirection:'column',marginTop:150}}>
          <Spin align="center" size="large" />
          </div>
        </TabPane>
    </Tabs>

    </>
  )

}

if(articles){
  return (
    <>

    <BreadcrumbText text="profile"/>
    <Tabs defaultActiveKey="1" >
        <TabPane tab="Profile" key="1">
        <List>
       <Title level={4} mark>Personnel informations</Title>
          <Title underline level={5}>Username: </Title><Text strong  strong>{userDetails.username}</Text>
          <Title underline level={5}>Email: </Title><Text strong>{userDetails.email}</Text>
          <Title underline level={5}>Role: </Title><Text strong>{userDetails.role}</Text>
      </List>
        </TabPane>
        <TabPane tab="Articles" key="2">
        <Title mark level={4}>Articles Created</Title>
            {Cards}
        </TabPane>
    </Tabs>
    </>
  );
}
  
  
}

export default Profile;
