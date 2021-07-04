import {Breadcrumb } from 'antd';

const BreadcrumbText=({text})=>{

    return(
        
        <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>{text}</Breadcrumb.Item>
      </Breadcrumb>

)
    
}

export default BreadcrumbText;