
import { Card } from 'antd';
import React, { Component } from 'react';
import { Space } from 'antd';
import { Typography } from 'antd';
import { Image } from 'antd';
import { Row, Col } from 'antd';
import { Button} from 'antd';
import {Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BreadcrumbText from './BreadcrumbText';
import { Spin } from 'antd';

const {Meta}=Card;
const { Title } = Typography;
const { Text } = Typography;




const RecentArticle=({article})=>{

  const articleUrl=`/article/${article.id}`;

return(
  <>
<Space align="center" direction='horizontal' size="large" style={{margin:20}}>
    <Card style={{ width: 240 }} key={article.id}  >
  <Meta title={article.title} description={<Link to={articleUrl}>Go to article</Link>} />
</Card>

</Space>


   </> 
  
)   
}

const CardData=({article})=>{


  const articleUrl=`/article/${article.id}`;

  return(
    <Card
    key={article.id}
    style={{ marginTop: 25 }}
    type="inner"
    title={<Title level={3}>{article.title}</Title>}
    extra={<Button type="primary"><Link to={articleUrl}>Read more...</Link></Button>}
    >
      
    <div style={{display:'flex'}}>
      <Title level={4} style={{marginLeft:30,marginTop:30}}>{article.description}</Title>
    </div> 
    </Card>
     
  )
}


const Home = ({articles,Loading}) =>{


 
  const BigCards=articles.map((obj,i)=>{
    return <CardData article={obj} key={i}  />
})

const smallCards=articles.map((obj,i)=>{
  return <RecentArticle article={obj} key={i} />
})


if(Loading){
  return(
    <>
     <BreadcrumbText text="home"/>
  <Title mark level={2}>Recent Articles</Title>
    
  <div style={{display:'flex',justifyContent:'center',flexDirection:'column',marginTop:100}}>
    <Spin align="center" size="large" />
    </div>

  <Title mark level={2} style={{ marginTop: 30 }}>Popular Articles</Title>

  <div style={{display:'flex',justifyContent:'center',flexDirection:'column',marginTop:100}}>
    <Spin align="center" size="large" />
    </div>
    
    </>
    )
}
if(articles){
  return(
    <>
  <BreadcrumbText text="home"/>
  <Title mark level={2}>Recent Articles</Title>
    
    {smallCards}

  <Title mark level={2} style={{ marginTop: 30 }}>Popular Articles</Title>

     {BigCards}


</>
  )
}



}

export default Home;