import { useEffect, useState } from 'react';
import { Typography } from 'antd';
import { useParams } from 'react-router';
import { Row, Col } from 'antd';
import {Link } from 'react-router-dom';
import { Card } from 'antd';
import { Space } from 'antd';
import { Spin } from 'antd';
import { Image } from 'antd';
import { Comment, Tooltip, Avatar } from 'antd';
import { Tag } from 'antd';
import BreadcrumbText from './BreadcrumbText';




const { Title } = Typography;
const {Meta}=Card;


const AddTags=({tag})=>{
return(
<Tag strong color ="blue" level={5}>{tag.name}</Tag>

)
  
}

const AddComments=({comment})=>{

  return(
    <Comment style={{background:'GhostWhite',padding:5,margin:10,marginTop:20}}
    author={<a>Han Solo</a>}
    content={
      <p>
        {comment.content}
      </p>
    }
  />
  )
}



const RelatedArticle=({article})=>{

    const articleUrl=`/article/${article.id}`;
  
  return(
    <>
<Space align="center" direction='horizontal' size="large" style={{margin:20}}>
      <Card key={article.id} >
    <Meta title={article.title} description={<Link to={articleUrl}>Go to article</Link>} />
  </Card>

  </Space>


     </> 
    
  )
  
      
  }


const Article=({articles,tags,comments})=>{

    const smallCards=articles.map((obj,i)=>{
        return <RelatedArticle article={obj} key={i}/>
    })

    const displayTags=tags.map((obj,i)=>{
      return <AddTags tag={obj} key={i}  />
  })

  const displayComments=comments.map((obj,i)=>{
    return <AddComments comment={obj} key={i} />
})

  const {id}=useParams();
  const [articleDetails,setArticleDetails]=useState({});
  const [loading,setLoading]=useState(true);
    

  useEffect(()=>{

        fetch(`/articles/${id}`)
          .then(res => 
            res.json())
          .then(data => {  
            setArticleDetails(data);
            setLoading(false);
           })

  },[id]);
  

  function renderArticle(){
      if(loading){
        return(
          <>

        <BreadcrumbText text="article"/>

          <div style={{display:'flex',justifyContent:'center',flexDirection:'column',marginTop:150}}>
          <Spin align="center" size="large" />
          </div>

        <Title level={2} mark style={{marginTop:50}}>Related Articles</Title>

          <div style={{display:'flex',justifyContent:'center',flexDirection:'column',marginTop:150}}>
          <Spin align="center" size="large" />
          </div>

          
          </>
        )
      }
      if(articleDetails){

      
        return(

            <>
            <BreadcrumbText text="article"/>

            <Title level={2} align="center" style={{marginTop:10,marginBottom:30}}>{articleDetails.title}</Title>

            <Title level={4} >{articleDetails.content}</Title>
            <Title mark level={3} >Tags</Title>
            {displayTags}
            <Title level={3} mark style={{marginTop:20}} >Comments</Title>
            {displayComments}

            <Title level={2} mark style={{marginTop:50}}>Related Articles</Title>

            {smallCards}

            </> 
           
    )
        }
  }

 return renderArticle();
    
  }


  export default Article;