import React from 'react';
import './App.css';
import { UserList } from "./Components/UserList";
const userInfo = {
  firstName: 'Michael',
  lastName: 'Jackson',
  address: {
      country: 'UA',
      city: 'Ivano-Frankivsk',
      street: 'Nezalezhnosti, 1',
      postIndex: '76000'
  }
}
const userInfoList =  [{
  firstName: 'Michael',
  lastName: 'Jackson',
  address: {
      country: 'UA',
      city: 'Ivano-Frankivsk',
      street: 'Nezalezhnosti, 1',
      postIndex: '76000'
  }},
      {
    firstName: 'Vlad',
    lastName: 'Voichyshyn',
    address: {
        country: 'UA',
        city: 'Ivano-Frankivsk',
        street: 'Vysochana, 18',
        postIndex: '76000'
    }},
      {
      firstName: 'Andrii',
      lastName: 'Melnuk',
      address: {
          country: 'UA',
          city: 'Ivano-Frankivsk',
          street: 'Pasichna, 16',
          postIndex: '76000'
      }}]

class App extends React.Component {
  render() {
  return(
      <div>
      <UserList users={userInfoList} />
      </div>
  )
}
}



export default App;
