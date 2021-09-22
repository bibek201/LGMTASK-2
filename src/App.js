import React,{ useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './component/navbar';
import './component/style.css';
import { UserDetails } from './help/context';

import User from './component/user-details';
import User_info from './component/user-info';

function App() {
  const [loading,setloading] = useState(false);
  const [showData,setshowData] = useState(false);
  return (
    <div className="app">
      <UserDetails.Provider value={{loading,setloading,showData,setshowData}}>
      <Navbar/>
      <User />
      {showData&&<User_info/>}
      </UserDetails.Provider>
    </div>
  )
}

export default App;
