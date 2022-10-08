import React, { useEffect, useState } from 'react';

const Home = () => {
    const [users,setUsers] =useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/user')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])
    const handleDelete = id=>{
            const proceed =window.confirm('are you sure you want to delete?');
            if(proceed){
                console.log('deleting id',id)
                const url =`http://localhost:5000/user/${id}`
                fetch(url,{
                    method:'delete'
                })
                .then(res=>res.json())
                .then(data=>{ 
                    console.log('deleted successful',data)
                    if(data.deletedCount=0){
                            console.log('deleted successful',data)
                            const remain =users.filter(user=>user._id !==id);
                            setUsers(remain)
                    }
                        
                })
                
            }
            
    }
    return (
        <div>
            <h2>this is home</h2>
            <ul>
            {
                users.map(user=><li key={user._id}>{user.name}::{user.email}
                <button onClick={()=>handleDelete(user._id)} >delete</button>
                </li>)
            }
            </ul>
            
        </div>
    );
};

export default Home;