import { Home } from "./Pages/Home/index";
import { NewRoom } from "./Pages/NewRoom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./Contexts/AuthContext";
import { Room } from "./Pages/Room";
import { AdminRoom } from "./Pages/AdminRoom";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
          <Route path="/rooms">
            <Route index element={<NewRoom />} />
            <Route path=":id" element={<Room />} />
          </Route>
          <Route path="/admin/rooms/:id">
            <Route index element={<AdminRoom />} />
          </Route>
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
