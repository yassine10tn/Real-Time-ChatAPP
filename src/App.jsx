import List from "./components/list/List.jsx";
import Chat from "./components/chat/Chat.jsx";
import Login from "./components/login/Login.jsx";
import Notifications from "./components/notifications/Notifications.jsx";
import Detail from "./components/detail/Detail.jsx";
import React from "react";

const App = () => {
 const user = true; 
  return (
    <div className="container">
      {user ? (
        <>
          <List />
          <Chat />
          <Detail />
        </>
      ) : (
        <Login />
      )}
      <Notifications />
    </div>
  );
};

export default App;