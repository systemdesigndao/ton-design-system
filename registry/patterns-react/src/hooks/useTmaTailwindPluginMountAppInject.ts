import { useEffect } from "react";
import { tailwindPluginMountAppInject } from "./tmaTailwindPluginMountAppInject";

export const useTmaTailwindPluginMountAppInject = () => {
	useEffect(() => {
		tailwindPluginMountAppInject();
	}, []);
};
