import { createContext, useEffect, useState } from "react";

const RobotContext = createContext();

export const RobotProvider = ({ children }) => {
  const [robot, setRobot] = useState([]);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch("https://jsonplaceholder.org/users")
      .then((res) => res.json())
      .then((data) => {
       setData(data);
        setRobot(data);
        setIsLoading(false)
      });
  }, []);

  const onSearchInput = (e) =>{
    const filtered  = data.filter((item) =>{
        return item.login.username.toLowerCase().includes(e.target.value.toLowerCase())
    })
     setRobot(filtered)
     if(e.target.value.length < 1){
        setRobot(data)
     }
  }

  return (
    <RobotContext.Provider value={{ robot, onSearchInput, isLoading }}>
      {children}
    </RobotContext.Provider>
  );
};

export default RobotContext;
