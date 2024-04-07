import { LogIn } from "@/components/forms";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/login")({
  component: () => <LogIn />
})