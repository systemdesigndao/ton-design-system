import { useState } from "react";
import { Button } from "@/components/Button";

import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/benchmark/likes")({
	component: LikesComponent,
});

// BENCHMARK_Like
const Like = () => {
	const [count, setCount] = useState(0);
	return (
		<div>
			<span>❤️</span>
			{count}
			<Button
				onClick={() => {
					setCount((prev) => {
						let local = prev;
						return ++local;
					});
				}}
			>
				+
			</Button>
		</div>
	);
};

function LikesComponent() {
	return (
		<div className="px-2 py-2 h-full flex flex-col">
			{Array.from({ length: 1e4 }).map((_, index) => (
				<Like key={`like-component-${index.toString()}`} />
			))}
		</div>
	);
}

export default LikesComponent;
