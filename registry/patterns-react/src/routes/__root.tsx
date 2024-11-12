import { Outlet, createRootRoute } from "@tanstack/react-router";
import { useCore } from "@/hooks/useCore";

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	useCore();

	return <Outlet />;
}
