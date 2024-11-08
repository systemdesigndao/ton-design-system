import { useTmaRun } from "./useTmaRun";
import { useTmaTailwindPluginMountAppInject } from "./useTmaTailwindPluginMountAppInject";

export const useCore = () => {
	useTmaTailwindPluginMountAppInject();
	useTmaRun();
};
