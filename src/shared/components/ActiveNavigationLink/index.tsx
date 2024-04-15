import {NavigationItem} from "@/shared/utils/types";
import Link from "next/link";
import {usePathname} from "next/navigation";
import React, {Dispatch, FC, SetStateAction, useEffect} from "react";

interface Props {
	keyPrefix: string;
	item: NavigationItem;
	className: string;
	setSelected: Dispatch<SetStateAction<NavigationItem>>;
}

const ActiveLink: FC<Props> = React.forwardRef((props, ref) => {
	const {keyPrefix, item, className, setSelected} = {...props} as Props;
	const currentPath = usePathname();

	// const handleSelected = (e: any, item: NavigationItem) => {
	// 	if (e) e.defaultPrevented;
	// 	if (item.id === 4) {
	// 		// TODO: dispatch logout
	// 		console.log("DISPATCHING LOGOUT...");
	// 	} else {
	// 		// setSelected && setSelected(item);
	// 		setSelected(item);
	// 	}
	// };

	// useEffect(() => {
	// 	if (item.href === currentPath && currentPath !== "/logout") {
	// 		setSelected(item);
	// 	}
	// }, [currentPath]);

	return (
		<Link
			key={`${keyPrefix}-${item.id}`}
			href={item.href}
			onClick={() => setSelected(item)}
			// onClick={() => handleSelected}
			className={className}
			aria-current={item.selected ? "location" : undefined}
			prefetch={item.id === 4 ? false : true}
		>
			{item.name}
		</Link>
	);
});
ActiveLink.displayName = "ActiveNavigationLinkComponent";

export default ActiveLink;
