import { LogIn, SignUp } from "@/components/forms";
import { Routes, Route, Link } from "react-router-dom";

export const AuthPage = () => {
  return (
    <main className="relative w-full h-screen grid grid-cols-1 md:grid-cols-2">
      <div id="auth-side-banner" className="relative hidden md:block overflow-hidden">
        <img src="https://static.manta.net/2023-05-09/hF/hFw9CXTzWHPaoWWr.jpg" alt="banner-auth" loading="lazy" className="h-full w-full object-cover overflow-hidden" />
        <div
          id="logo"
          className="absolute z-[1] top-6 left-6 text-primary font-unbounded md:font-bold font-semibold md:text-2xl text-xl tracking-wide"
        >
          <Link to="/">Inkverse</Link>
        </div>
      </div>
      <div id="auth-container" className="w-full h-full flex justify-center items-center">
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </div>
    </main>
  )
}