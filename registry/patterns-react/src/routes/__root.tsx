import { Outlet, createRootRoute } from "@tanstack/react-router";
import { useCore } from "@/hooks/useCore";

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	useCore();

	return <div className="px-2 py-2 h-full flex flex-col space-y-2 justify-center w-full items-center tma:tg-theme-bg-color tma:h-screen"><Outlet /></div>;
}
