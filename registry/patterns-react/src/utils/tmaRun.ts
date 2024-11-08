import WebApp from "@twa-dev/sdk";

export const tmaRun = () => {
	WebApp.expand();
	WebApp.disableVerticalSwipes();
	WebApp.ready();
};
