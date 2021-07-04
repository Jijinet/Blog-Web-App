import React, { Component } from 'react';
import { useEffect, useState } from 'react';

// class Users extends Component {
//    constructor(){
//        super();
//        this.state ={users: []};
//    }
   const User=()=> {

    const [users,setUsers]=useState([]);
    

    useEffect(()=>{
          fetch(`/users`)
            .then(res => 
              res.json())
            .then(data => {  
                setUsers(data);
             })
    });

return (
                    
    <div>
     <h1>Users</h1>
        {users.map(user =>
        <div key={user.id}>user: {user.username} Password: {user.password}</div>
        )}
    </div>
    );
      
                
    }
         
  
// }
export default User;