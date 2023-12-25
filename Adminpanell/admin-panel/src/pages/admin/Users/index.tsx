import React from 'react'
import { Header } from 'antd/es/layout/layout'
import { Link } from 'react-router-dom'
import { Button, Table,message } from 'antd';
import { useCallback, useEffect, useState } from "react";
import { render } from 'react-dom';

type Props = {}

function Users({}: Props) {

  
  const columns = [
    {
      title: 'username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'password',
      dataIndex: 'password',
      key: 'password',
    },
    {
      title: 'role',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Remove',
      dataIndex: 'Remove',
      key: "Remove",
      render:(text, record)=>(
        <Button type="primary" danger onClick={()=>{
          
        }}>
            Delete
          </Button>
      )
    },
  ];
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const fetchUsers = useCallback(async () => {
    setLoading(true);

    try {
      const response = await fetch(`https://apiii-nzp5.onrender.com/api/users`);

      if (response.ok) {
        const data = await response.json();
        setDataSource(data);
      } else {
        message.error("NO ENTER");
      }
    } catch (error) {
      console.log( error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  // delete
 

  return (
   <> <Header style={{ color:"white", padding: 0,background: "rgb(2,0,36)",background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)" ,display:"flex", justifyContent:'space-between'}}>
   <Link to="/" style={{color:"white",fontSize:"20px"}}>Admin Panel</Link>
      </Header>
      <Table
      dataSource={dataSource}
      columns={columns}
      loading={loading}
    />
      </>
  )
}

export default Users