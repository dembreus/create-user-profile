import React, { Fragment } from "react";
import "../css/user.css";
// import {getUsers} from "./ListOfUsers";
// import deleteUser from './deleteUser'

// const getUsers = async () => {
//   const response = await fetch(
//     "https://create-user-backend-axmjvpznmy.now.sh/"
//   );
//   return await response.json();
// };

// const deleteUser = async _id => {
//     await fetch(`https://create-user-backend-axmjvpznmy.now.sh//${_id}`, {
//         method: 'delete'
//     }).then(response => {
//         response.json().then(json => {
//             return json;
//         })
//         alert("User Deleted");
//     });
//     await getUsers();
// };

const user = user => {
  return (
    <Fragment>
      <div className="user-component rounded border-bottom border-right">
        <h1>
          {user.firstName} {user.lastName}
        </h1>
        <p>{user.email}</p>
        {/*<div>*/}
        {/*<button className="btn btn-success">Update</button>*/}
        {/*<button className="btn btn-danger"*/}
        {/*onClick={() => deleteUser(user._id)}>Delete</button>*/}
        {/*</div>*/}
      </div>
    </Fragment>
  );
};
export default user;
