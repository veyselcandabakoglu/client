import { useSelector } from "react-redux";
import Login from "./pages/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Chat from "./pages/Chat";
import ChatDetail from "./pages/ChatDetail";
import Sidebar from "./components/Sidebar";
import PageContainer from "./containers/PageContainer";

function App() {

  const { user } = useSelector(state => state.user)

  return (
    <div >
      {
        !user ?
          <Login /> :
          <BrowserRouter>
            <PageContainer>
              <Sidebar />
              <Routes>
                <Route path="/" element={<Chat />} />
                <Route path="chat/:id" element={<ChatDetail />} />
              </Routes>
            </PageContainer>
          </BrowserRouter>
      }
    </div>
  );
}

export default App;
