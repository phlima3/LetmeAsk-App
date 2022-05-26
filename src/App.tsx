import { Home } from "./Pages/Home";
import { NewRoom } from "./Pages/NewRoom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./Contexts/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
          <Route path="/rooms/new" element={<NewRoom />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
