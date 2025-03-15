import { Outlet, createRootRoute } from "@tanstack/react-router";
import { useCore } from "@/hooks/useCore";

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	useCore();

	return <div className="min-h-screen flex flex-col space-y-2 justify-center w-full items-center tma:h-full bg-orange-2 dark:bg-gray-900 tma:bg-tg-theme-bg-color px-2 py-2"><Outlet /></div>;
}
