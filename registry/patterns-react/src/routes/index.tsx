import { Button } from "@/components/Button";

import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: HomeComponent,
});

function HomeComponent() {
	const navigate = useNavigate();
	return (
		<>
			<Button
				className="w-40"
				onClick={() => {
					navigate({ to: "/theme" });
				}}
			>
				To /theme
			</Button>
			<Button
				className="w-40"
				onClick={() => {
					navigate({ to: "/lotties" });
				}}
			>
				To /lotties
			</Button>
		</>
	);
}

export default HomeComponent;
