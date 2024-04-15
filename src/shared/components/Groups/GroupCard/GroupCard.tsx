import React from "react";
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Image,
	Button,
} from "@nextui-org/react";
import {SubgroupGroupListItem} from "@/shared/utils/types";
import {capitalize} from "@/shared/helpers/capitalize";
import Link from "next/link";

interface Props {
	item: SubgroupGroupListItem;
	groupType: string;
}

export default function GroupCard({item, groupType}: Props) {
	return (
		<Card
			isFooterBlurred
			className="w-full h-[16rem] col-span-12 sm:col-span-7 custom-card-width"
		>
			<CardHeader className="absolute z-10 top-0 flex-col items-start backdrop-blur backdrop-saturate-150 bg-black/40">
				<p className="text-tiny text-white/60 uppercase font-bold">
					{item.instructor}
				</p>
				<h4 className="text-white/90 font-medium text-xl">{item.name}</h4>
			</CardHeader>
			<Image
				removeWrapper
				alt={item.imageAlt}
				className="z-0 w-full h-full object-contain"
				src={item.imageSrc}
			/>
			<CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
				<div className="flex flex-grow gap-2 items-center">
					<Image
						alt="Group icon"
						className="rounded-full w-10 h-auto bg-white object-contain"
						src="/resources/images/Escudo-ITF.svg"
					/>
					<div className="flex flex-col">
						<p className="text-tiny text-white/60">
							{capitalize(groupType)} address:
						</p>
						<p className="text-tiny text-white/60">{item.address}</p>
					</div>
				</div>
				<Button as={Link} href={item.href} radius="full" size="sm">
					Go to {groupType}
				</Button>
			</CardFooter>
		</Card>
	);
}
