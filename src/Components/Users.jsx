import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./users.css";
const Users = () => {
    let [users,setUsers] = useState({});

    const fetchUsers = () =>{
        axios.get("https://randomuser.me/api/?page=1&results=1&seed=abc")
        .then(res=>{
            setUsers(res.data.results)
        })
        .catch(err=>{
            console.log(err)
        })
    }   

    useEffect(()=>{
        fetchUsers()
    },[])

    console.log(users, "usershere");
     console.log(users[0]?.name.first, "name")


  return (
    <div>
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <div className="img">
                        <img src={users[0]?.picture?.large} alt="" />
                    </div>
                    <div className="content">
                        <div className="flex">
                            <h2>{users[0]?.name?.first}</h2>
                            <h2>{users[0]?.name?.last}</h2>
                        </div>
                        <div className='details'>
                        <h2>{users[0]?.gender}</h2>
                        <h2>{users[0]?.email}</h2>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Users