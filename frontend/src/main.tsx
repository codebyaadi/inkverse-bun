import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "@/routeTree.gen.ts";
import "./index.css";

const router = createRouter({ routeTree })

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

declare global {
  interface Window {
    global: any;
  }
}

window.global = globalThis;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider className="h-full">
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>,
)