import { tmaRun } from "@/utils/tmaRun";
import { useEffect } from "react";

export const useTmaRun = () => {
	useEffect(() => {
		tmaRun();
	}, []);
};
