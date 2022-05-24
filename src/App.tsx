import { createContext, useState } from "react";
import { Home } from "./Pages/Home";
import { NewRoom } from "./Pages/NewRoom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const TestContext = createContext({} as any);

function App() {
  const [value, setValue] = useState("Teste");

  return (
    <BrowserRouter>
      <TestContext.Provider value={{ value, setValue }}>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
          <Route path="/rooms/new" element={<NewRoom />} />
        </Routes>
      </TestContext.Provider>
    </BrowserRouter>
  );
}

export default App;
