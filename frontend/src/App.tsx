import useDarkMode from "use-dark-mode";
import Navbar from "@/components/layouts/navbar";
import { Outlet } from "@tanstack/react-router";
import { Toaster } from "sonner";
import "./App.css";

function App() {
  const darkMode = useDarkMode(true);

  return (
    <main
      className={`w-full ${darkMode.value ? "purple-dark" : "light"} bg-background`}
    >
      <Toaster position="top-center" expand richColors />
      <Navbar />
      <Outlet />
    </main>
  );
}

export default App;
