import { Button } from "@/components/Button";

import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: HomeComponent,
});

function HomeComponent() {
	const navigate = useNavigate();
	return (
		<div className="px-2 py-2 h-full flex flex-col space-y-2 justify-center w-full items-center">
			<Button className="w-40" onClick={() => { navigate({ to: '/benchmark/likes' })}}>To /benchmark/likes</Button>
			<Button className="w-40" onClick={() => { navigate({ to: '/theme' })}}>To /theme</Button>
		</div>
	);
}

export default HomeComponent;
