import React from "react";

import Form from "./pages/Form/Form";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Form />
    </div>
  );
}

export default App;

// import Top from "./useContext/Top";

// export const userContext = React.createContext();
// export const channelContext = React.createContext();

// <userContext.Provider value={"karan"}>
//   <channelContext.Provider value={"kuldeep badhan"}>
//     <Top />
//   </channelContext.Provider>
// </userContext.Provider>
