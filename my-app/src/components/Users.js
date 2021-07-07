import React, {useState, useEffect} from "react";

const Users = props => {

    return(
<div className="Team-list">

{props.user1.map((user) => {
    
   return (
       <div className="member">
    <ul key={user.id}>
        <li>Name: {user.name}</li>
        <li>Email: {user.email}</li>
        {/* <li>Password: {user.password}</li> */}
        <li>Age: {user.age}</li>
        <li>Role: {user.role}</li>
        <li>Notes: {user.notes}</li>
    </ul>
    </div>
);
})}

</div>

)
}

export default Users;