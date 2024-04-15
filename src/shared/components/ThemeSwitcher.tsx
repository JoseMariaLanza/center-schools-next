"use client";

import {useTheme} from "next-themes";
import {useEffect, useState} from "react";
import {SunIcon, MoonIcon} from "@heroicons/react/24/outline";
import {Button} from "@nextui-org/button";

export function ThemeSwitcher() {
	const [mounted, setMounted] = useState(false);
	const {theme, setTheme} = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return (
		<Button
			isIconOnly
			className="bg-transparent outline-none p-2 text-indigo-600 dark:text-white dark:bg-transparent dark:outline-none rounded-full"
			onClick={toggleTheme}
			aria-label="Toggle Theme"
		>
			{theme === "light" ? <MoonIcon className="size-4" /> : <SunIcon />}
		</Button>
	);
}
