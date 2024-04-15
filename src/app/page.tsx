import {Button, Image as ImageUi} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import logoItf from "@/shared/resources/images/performed-logo.png";
import MainMap from "@/shared/components/Location/MainMap";

import GroupCard from "@/shared/components/Groups/GroupCard/GroupCard";
import {navigation} from "@/shared/utils/constants";
import {GroupItem, SubgroupGroupListItem} from "@/shared/utils/types";

export default function Home() {
	const {groupList} = navigation;

	return (
		<div className="flex min-h-screen flex-col items-center justify-between gap-4">
			<Image
				src={logoItf}
				alt="Center School"
				className="hidden lg:flex absolute left-0 p-0 xl:left-24 xl:p-24"
				width={600}
				height={400}
				priority
			/>
			<Image
				src={logoItf}
				alt="Center School"
				className="absolute lg:hidden"
				width={600}
				height={400}
				priority
			/>

			<div className="relative flex min-h-scheen w-full items-center justify-between font-mono text-sm lg:flex bg-zinc-800/80">
				<p className="border-none text-white dark:from-inherit lg:static lg:w-auto p-4 lg:pt-unit-7xl lg:pb-44 xl:pl-unit-7xl">
					Join us&nbsp;
					<Button as={Link} href="/center-centeno">
						Find the closest location
					</Button>
				</p>
				<div className="xl:bg-transparent">
					<p className="text-small font-semibold text-white dark:text-foreground/90">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
						laudantium quae est impedit eligendi blanditiis dignissimos
						asperiores, dicta deleniti vitae culpa facilis suscipit voluptate
						voluptatum nostrum debitis. Et, labore facere.
					</p>
					<br />
					<p className="text-small font-semibold text-white dark:text-foreground/90">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
						laudantium quae est impedit eligendi blanditiis dignissimos
						asperiores, dicta deleniti vitae culpa facilis suscipit voluptate
						voluptatum nostrum debitis. Et, labore facere.
					</p>
					<br />
					<p className="text-small font-semibold text-white dark:text-foreground/90">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
						laudantium quae est impedit eligendi blanditiis dignissimos
						asperiores, dicta deleniti vitae culpa facilis suscipit voluptate
						voluptatum nostrum debitis. Et, labore facere.
					</p>
					<br />
					<p className="text-small font-semibold text-white dark:text-foreground/90">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
						laudantium quae est impedit eligendi blanditiis dignissimos
						asperiores, dicta deleniti vitae culpa facilis suscipit voluptate
						voluptatum nostrum debitis. Et, labore facere.
					</p>
				</div>
				<div className="fixed bottom-0 left-0 flex sm:h-16 sm:bg-zinc-800/90 text-white w-full md:min-w-72 items-end justify-center lg:bg-transparent lg:static lg:h-auto lg:w-auto lg:bg-none pr-8">
					<Link
						href="/gallery"
						className="group rounded-lg border border-transparent px-5 py-4 lg:transition-colors lg:hover:border-gray-300 lghover:bg-gray-100 lghover:dark:border-neutral-700 lg:hover:dark:bg-neutral-800/30"
						rel="noopener noreferrer"
					>
						<h2 className={`text-2xl font-semibold dark:text-white`}>
							View gallery{" "}
							<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none text-sky-500">
								-&gt;
							</span>
						</h2>
					</Link>
				</div>
			</div>

			<MainMap />

			{/* <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8"> */}
			<div>
				<h1 className="p-4 font-semibold text-2xl text-indigo-600 dark:text-white">
					Our schools
				</h1>
				<div className="inline-flex flex-wrap gap-4 justify-center">
					{groupList[0].subgroupList.map((item: SubgroupGroupListItem) => {
						return (
							<GroupCard
								key={item.id}
								item={item}
								groupType={groupList[0].groupType}
							/>
						);
					})}
				</div>
			</div>

			{/* <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
				<a
					href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className={`mb-3 text-2xl font-semibold`}>
						Docs{" "}
						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
							-&gt;
						</span>
					</h2>
					<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
						Find in-depth information about Next.js features and API.
					</p>
				</a>
				<a
					href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
					className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className={`mb-3 text-2xl font-semibold`}>
						Learn{" "}
						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
							-&gt;
						</span>
					</h2>
					<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
						Learn about Next.js in an interactive course with&nbsp;quizzes!
					</p>
				</a>
				<a
					href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className={`mb-3 text-2xl font-semibold`}>
						Templates{" "}
						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
							-&gt;
						</span>
					</h2>
					<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
						Explore starter templates for Next.js.
					</p>
				</a>
				<a
					href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className={`mb-3 text-2xl font-semibold`}>
						Deploy{" "}
						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
							-&gt;
						</span>
					</h2>
					<p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
						Instantly deploy your Next.js site to a shareable URL with Vercel.
					</p>
				</a>
			</div> */}
		</div>
	);
}
