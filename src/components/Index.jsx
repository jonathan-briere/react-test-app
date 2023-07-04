import React, { useState, useEffect } from 'react'
import axios from 'axios'
import UserList from './Shared/UserList'
import { Table } from 'react-bootstrap'

const Index = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const ourRequest = axios.CancelToken.source()
    const baseURL = process.env.REACT_APP_USER_API
    
    axios.get(baseURL, {
      cancelToken: ourRequest.token
    }).then(res => {
      console.log(res)
      setUsers(res.data)
    })
      .catch(err => {
        if (err.name = ! 'Cancel')
          console.error(err);
      })

    return () => ourRequest.cancel('Operation canceled by the user.')
  }, [])


  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Username</th>
          <th scope="col">Email</th>
          <th scope="col">Post</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => <UserList key={user.id} user={user} />)}
      </tbody>
    </Table>
  )
}

export default Index
