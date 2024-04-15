import React, {
	Dispatch,
	SetStateAction,
	useEffect,
	useState,
	ReactNode,
	useContext,
} from "react";
import {
	NavbarContent,
	NavbarItem,
	// Link,
	Button,
	DropdownItem,
	DropdownTrigger,
	Dropdown,
	DropdownMenu,
} from "@nextui-org/react";
import {Link} from "@nextui-org/react";

import {classNames} from "@/shared/helpers/classNames";
import {ChevronDown} from "@/shared/resources/icons/ChevronDown";

// Navigation resources
import {navigation} from "@/shared/utils/constants";
import {NavigationItem} from "@/shared/utils/types";
// import Link from "next/link";
import ActiveNavigationLink from "@/shared/components/ActiveNavigationLink";

// Types
interface NavBarProps {
	selected: NavigationItem;
	setSelected: Dispatch<SetStateAction<NavigationItem>>;
}

export default function Content({selected, setSelected}: NavBarProps) {
	const icons = {
		chevron: (
			<ChevronDown
				fill="currentColor"
				size={16}
				height={undefined}
				width={undefined}
			/>
		),
	};

	return (
		<NavbarContent className="hidden lg:flex gap-4">
			{navigation.pages.map((item) => (
				<ActiveNavigationLink
					key={`web-nav-${item.id}`}
					keyPrefix="link-web-nav"
					item={item}
					setSelected={setSelected}
					className={classNames(
						selected && selected.href === item.href
							? "dark:text-white text-indigo-600 border-b-2 border-indigo-600 dark:border-white"
							: "dark:text-gray-300 hover:bg-gray-700 hover:text-white dark:hover:bg-white dark:hover:text-gray-700",
						"rounded-sm px-3 py-5 text-sm font-medium h-full",
					)}
				/>
			))}

			<Dropdown>
				<NavbarItem>
					<DropdownTrigger>
						<Button
							disableRipple
							className="p-0 bg-transparent data-[hover=true]:bg-transparent"
							endContent={icons.chevron}
							radius="sm"
							variant="light"
						>
							More
						</Button>
					</DropdownTrigger>
				</NavbarItem>
				<DropdownMenu
					aria-label="School list"
					className="w-[340px]"
					itemClasses={{
						base: "gap-4",
					}}
				>
					{navigation.groupList.map((item) => (
						<DropdownItem
							href={item.href}
							as={Link}
							key={`group-${item.id}`}
							description="Some Quote for this group"
							className="text-indigo-600 dark:text-white"
						>
							{item.name}
						</DropdownItem>
					))}
				</DropdownMenu>
			</Dropdown>
		</NavbarContent>
	);
}
