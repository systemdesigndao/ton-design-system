import { useTmaAfterRun } from "./useTmaAfterRun";
import { useTmaTailwindPluginMountAppInject } from "./useTmaTailwindPluginMountAppInject";

export const useCore = () => {
	useTmaTailwindPluginMountAppInject();
	useTmaAfterRun();
};
