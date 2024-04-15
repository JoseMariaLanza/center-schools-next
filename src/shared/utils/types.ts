export type NavigationItem = {
	id: number;
	name: string;
	label: string;
	href: string;
	selected: boolean;
};

export type GroupItem = {
	id: number;
	groupType: string;
	name: string;
	href: string;
	subgroupList: SubgroupGroupListItem[];
	sections: Section[];
	selected: boolean;
};

export type SubgroupGroupListItem = {
	id: number;
	name: string;
	href: string;
	instructor: string;
	address: string;
	imageSrc: string;
	imageAlt: string;
	subgroupList: [] | null;
};

export type Section = {
	id: number;
	name: string;
	items: NavigationItem[];
};

export interface ValidationObject {
	type: string;
	value: unknown;
	compareWith?: unknown;
}
