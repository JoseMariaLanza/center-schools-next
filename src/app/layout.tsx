import {Providers} from "./providers";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import Appbar from "@/shared/components/Appbar/Appbar";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
	title: "Center Schools",
	description:
		"¡Manage Facebook, Instagram, Twitter and more social networks from one place!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		// <html
		// 	lang="en"
		// 	className="dark dark:bg-gray-800 dark:text-white bg-white text-black"
		// >
		<html lang="en">
			{/* className="dark dark:bg-gray-800 dark:text-white bg-white text-black" */}
			<body className={inter.className}>
				<Providers>
					<div className="relative bg-white px-4 sm:px-6 lg:px-8 dark:bg-gray-700 dark:bg-gradient-to-r from-black from-2%">
						<div className="flex justify-center items-center text-sm font-bold text-indigo-600 h-10 dark:text-white">
							<span className="text-center">{metadata.description}</span>
						</div>
					</div>
					<Appbar />

					{/* <main className="min-h-screen flex-col items-center justify-between sm:px-6 md:px-8 lg:px-24 xl:px-32 2xl:px-48"> */}
					{/* <main className="min-h-screen flex-col items-center justify-between sm:px-6 md:px-6 bg-white dark:bg-gray-700"> */}
					<main className="min-h-screen flex-col items-center justify-between bg-white dark:bg-gray-700 dark:bg-gradient-to-r from-black from-2%">
						{children}
					</main>
				</Providers>
			</body>
		</html>
	);
}
