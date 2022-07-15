import React, { useEffect, useState } from "react";
import cwSvg from "./assets/cw.svg";
import axios from "axios";
import User from "./components/User";

const url = "https://randomuser.me/api/";


function App() {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true)

  const getUser = async () => {
    const { data } = await axios.get(url)
    setUser(data.results);
    setIsLoading(false)
  }

  useEffect(() => {
    getUser()
  }, [])

  if(isLoading){
    return  <h1 className="loading">Loading.....</h1>
  }

  return (
    <main>
      <div className="block bcg-orange">
        <img src={cwSvg} alt="cw" id="cw" />
      </div>
      <User user={user} getUser={getUser}/>
      <div style={{ display: "flex", justifyContent: "center" }}>
        
      </div>
    </main>
  );
}

export default App;
