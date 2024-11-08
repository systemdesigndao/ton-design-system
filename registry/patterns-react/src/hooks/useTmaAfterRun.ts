import { tmaAfterRun } from "@/utils/tmaAfterRun";
import { useEffect } from "react";

export const useTmaAfterRun = () => {
	useEffect(() => {
		tmaAfterRun();
	}, []);
};
