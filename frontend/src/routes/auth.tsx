import { AuthPage } from "@/pages/auth.page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth")({
    component: AuthPage
});