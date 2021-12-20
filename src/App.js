import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersLists';


function App() {
  const [userList, setUserList] = useState([])

  const addUserHandler = (uName, uAge)=>{
      const uId = Math.random().toString()
      setUserList((prevUserList) => {
          return [...prevUserList, {id: uId, name: uName, age: uAge}]
      })

  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={userList}/>
    </div>
  );
}

export default App;
