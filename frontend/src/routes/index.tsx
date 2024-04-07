import { Homepage } from "@/pages/home.page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
    component: Homepage
})