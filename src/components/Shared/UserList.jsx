import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const UserList = ({ user }) => (
  <tr>
    <th scope="row">{user.id}</th>
    <td>{user.name}</td>
    <td>{user.username}</td>
    <td>{user.email}</td>
    <td>
      <Link to={`/posts/${user.id}`} className="btn btn-light" role="button">
        Posts
      </Link>
    </td>
  </tr>
)


UserList.propTypes = {
  user: PropTypes.object.isRequired
}

export default UserList