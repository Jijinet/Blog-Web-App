import React from "react";
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Space } from 'antd';
import {Link } from 'react-router-dom';
import { Typography } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import User from "./components/Users";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Articles from "./components/Articles";
import About from "./components/About";
import Article from "./components/Article";
import Profile from "./components/Profile";



function App() {

  const { Content,Footer } = Layout;


  const [articles,setArticles]=useState([]);
    
  const [articleDetails,setArticleDetails]=useState([]);
  const[Loading,setLoading]=useState(true);

const [comments,setComments]=useState([]);
const [tags,setTags]=useState([]);


useEffect(()=>{
  fetch(`/tags?offset&limit`)
    .then(res => 
      res.json())
    .then(data => {  
        setTags(data.rows);
        setLoading(false)
     })
});

useEffect(()=>{
  fetch(`/comments?offset&limit`)
    .then(res => 
      res.json())
    .then(data => {  
      setComments(data.rows);
      setLoading(false)
     })
});
    
  useEffect(()=>{

    fetch(`/articles/all`)
      .then(res => 
        res.json())
      .then(data => {  
        setArticleDetails(data);
        setLoading(false)
       })

});

  useEffect(()=>{
        fetch(`/articles?offset&limit`)
          .then(res => 
            res.json())
          .then(data => {  
              setArticles(data.rows);
           })
  });




  return (
    <div>
  <BrowserRouter>
  <Switch>

  <Layout>
    <Navbar/>
   
      <Layout style={{ padding: '0 24px 24px' }}>
        <Content style={{ padding: '30px 50px',minHeight:520}}>

              <Route path="/" exact>
                <Home articles={articles} Loading={Loading} />         
              </Route>

              <Route path="/user">
                <User />
              </Route>

              <Route path="/article/:id">
                <Article articles={articles} tags={tags} comments={comments} />

              </Route>

              <Route path="/articles">             
                <Articles articleDetails={articleDetails} Loading={Loading}/>

              </Route>

              <Route path="/profile">             
                <Profile articles={articles} Loading={Loading}/>

              </Route>

              <Route path="/about">
                <About/>

              </Route>

            </Content>
        <Layout>
            <Footer align="center">© 2021 Blogging website</Footer>
        </Layout>

      </Layout>
    </Layout>
    </Switch>
    </BrowserRouter>
  
    </div>
  );
}

export default App;