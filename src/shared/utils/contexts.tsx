import {createContext} from "react";
import {navigation, user, userNavigation} from "./constants";

const PublicNavigationContext = createContext(navigation);
const ThemeContext = createContext("light");
const RenderMobileContext = createContext(false);
const AccountContext = createContext({user, userNavigation});

export {
	PublicNavigationContext,
	ThemeContext,
	RenderMobileContext,
	AccountContext,
};