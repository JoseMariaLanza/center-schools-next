"use client";

import React, {
	Dispatch,
	SetStateAction,
	useEffect,
	useState,
	ReactNode,
	useContext,
} from "react";
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarMenuToggle,
	NavbarItem,
	Button,
	Link,
} from "@nextui-org/react";
import WebNavbar from "../Web/Content";
import MobileNavbar from "../Mobile/Content";

import {usePathname} from "next/navigation";
import {NavigationItem} from "@/shared/utils/types";
import {AccountContext, PublicNavigationContext} from "@/shared/utils/contexts";

import logo from "@/shared/resources/images/performed-logo.png";
import Image from "next/image";
import {ThemeSwitcher} from "../ThemeSwitcher";

export interface NavBarProps {
	children: ReactNode;
	mobileMenu?: ReactNode;
	selected: NavigationItem;
	setSelected: Dispatch<SetStateAction<NavigationItem>>;
}

export interface MobileNavBarProps {
	menuOpen: boolean;
	setMenuOpen: Dispatch<SetStateAction<boolean>>;
	selected: NavigationItem;
	setSelected: Dispatch<SetStateAction<NavigationItem>>;
	selectTab: (selected: boolean) => string;
}

export default function Appbar() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	const publicNavigation = useContext(PublicNavigationContext);
	const {userNavigation} = useContext(AccountContext);

	const navigation = {
		...publicNavigation,
		userNavigation,
	};
	const [domReady, setDomReady] = useState(false);
	const currentPath = usePathname();

	const currentPage: NavigationItem =
		navigation.pages.find((page) => page.href === currentPath) ||
		navigation.userNavigation.find((page) => page.href === currentPath) ||
		navigation.pages[0];

	const [selected, setSelected] = useState<NavigationItem>(currentPage);
	const [openWebAuthMenu, setOpenWebAuthMenu] = useState<boolean>(false);

	const [webPopupContainer, setWebPopupContainer] =
		useState<HTMLElement | null>(null);
	const [mobilePopupContainer, setMobilePopupContainer] =
		useState<HTMLElement | null>(null);

	useEffect(() => {
		setDomReady(true);

		const webPopoverContentEl = document.getElementById("web-popover-content");
		const mobilePopoverContentEl = document.getElementById(
			"mobile-popover-content",
		);

		setWebPopupContainer(webPopoverContentEl);
		setMobilePopupContainer(mobilePopoverContentEl);
	}, []);

	useEffect(() => {
		setSelected(currentPage);
	}, [currentPage]);

	return (
		<Navbar
			onMenuOpenChange={setIsMenuOpen}
			classNames={{
				wrapper: "max-w-full",
			}}
		>
			{/* Web */}
			<NavbarContent className="pr-12">
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					className="lg:hidden dark:text-gray-300"
				/>
				<NavbarBrand className="gap-4">
					<Image
						src={logo}
						alt="I.T.F."
						className="h-14 w-14"
						width={70}
						height={70}
					/>
					<div className="text-inherit md:hidden dark:text-gray-300">
						T.C.S.
					</div>
					<div className="text-inherit hidden md:flex dark:text-gray-300">
						TaeKwon-Do Center Schools
					</div>
				</NavbarBrand>
			</NavbarContent>

			<WebNavbar selected={selected} setSelected={setSelected} />

			{/* Mobile */}
			<MobileNavbar />

			<div className="flex justify-between gap-4">
				<div className="inset-y-0 flex">
					<ThemeSwitcher />
				</div>
				{/* Authentication */}
				<NavbarContent className="flex-grow-0 hidden sm:flex">
					<NavbarItem>
						<Link className="dark:text-white text-indigo-600" href="#">
							Login
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Button
							as={Link}
							color="primary"
							className="font-semibold dark:bg-white dark:text-indigo-600 text-indigo-600"
							href="#"
							variant="flat"
						>
							Sign Up
						</Button>
					</NavbarItem>
				</NavbarContent>
			</div>
		</Navbar>
	);
}
