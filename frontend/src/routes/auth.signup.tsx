import { SignUp } from "@/components/forms";
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute("/auth/signup")({
  component: () => <SignUp />
});