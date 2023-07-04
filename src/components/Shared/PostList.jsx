import React from 'react'
import PropTypes from 'prop-types'

const PostList = ({ post }) => (
  <tr>
    <th scope="row">{post.id}</th>
    <td>{post.userId}</td>
    <td>{post.title}</td>
    <td>{post.body}</td>
  </tr>
)


PostList.propTypes = {
  post: PropTypes.object.isRequired
}

export default PostList
