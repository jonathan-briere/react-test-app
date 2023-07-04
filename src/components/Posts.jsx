import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { useParams } from 'react-router'
import { Table } from 'react-bootstrap'
import PostList from './Shared/PostList'

const Posts = () => {
  const { id } = useParams()
  console.log(id)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const ourRequest = axios.CancelToken.source()
    const baseURL = process.env.REACT_APP_USER_API

    axios.get(`${baseURL}/${id}/posts`, {
      cancelToken: ourRequest.token
    }).then(res => {
      console.log(res)
      setPosts(res.data)
    }).catch(err => {
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
          <th scope="col">User ID</th>
          <th scope="col">Title</th>
          <th scope="col">Details</th>
        </tr>
      </thead>
      <tbody>
        {posts.map(post => <PostList key={post.id} post={post} />)}
      </tbody>
    </Table>
  )
}

Posts.propTypes = {
  id: PropTypes.number
}

export default Posts
