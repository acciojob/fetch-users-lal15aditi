import React, { useState } from "react";
import axios from "axios";

const FetchUser = () => {
    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(false);

   const fetchUserData = () => {
    setLoading(true);
     axios.get("https://reqres.in/api/users")
     .then((res)=> {
        setUsers(res.data.data);
        setLoading(false);
     })
     .catch((error)=>{
        console.error(error);
        setLoading(false);
     })
   }

    return (
      <div className="App">
        <div className="header">
          <h1>Blue Whales</h1>
          <button className="btn" onClick={fetchUserData}>
            Get User List
          </button>
        </div>
        <div>
          <table>
            <thead>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Avatar</th>
            </thead>
            <tbody>
                {
                    loading ? 
                    ( <tr>
                        <td colSpan="4">Loading...</td>
                      </tr>
                     ) : users.length === 0 ? 
                    (
                        <tr>
                            <td colSpan="4" style={{textAlign:"center", fontWeight: 800}}>No data found to display.</td>
                        </tr>
                    ) : (
                        users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                <td>{user.email}</td>
                                <td><img src={user.avatar} alt="avatar" style={{width:50, height:50}}/></td>
                            </tr>
                        ))
                    )

                }
            </tbody>
          </table>
        </div>
      </div>
    );
}

export default FetchUser;
