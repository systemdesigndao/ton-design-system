import WebApp from "@twa-dev/sdk";

export const tmaAfterRun = () => {
	WebApp.expand();
	WebApp.disableVerticalSwipes();
};
