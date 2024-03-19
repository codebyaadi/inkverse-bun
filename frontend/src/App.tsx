import useDarkMode from "use-dark-mode";
import Navbar from "@/components/layouts/navbar";
import { Homepage } from "@/pages/home.page";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AuthPage } from "./pages/auth.page";

function App() {
  const darkMode = useDarkMode(true);

  return (
    <main className={`w-full ${darkMode.value ? 'purple-dark' : 'light'} bg-background`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/auth/*" element={<AuthPage />} />
      </Routes>
    </main>
  )
}

export default App;
