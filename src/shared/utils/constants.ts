import {
	NavigationItem,
	GroupItem,
	SubgroupGroupListItem,
	Section,
} from "@/shared/utils/types";

const navigation = {
	pages: [
		{id: 1, name: "Home", label: "Center Schools", href: "/", selected: true},
		{
			id: 2,
			name: "History",
			label: "Our history",
			href: "/about",
			selected: false,
		},
		{
			id: 3,
			name: "News",
			label: "View all news",
			href: "/news",
			selected: false,
		},
		{
			id: 4,
			name: "Contact",
			label: "Contact us",
			href: "/contact",
			selected: false,
		},
	] as unknown as NavigationItem[],
	groupList: [
		{
			id: 1,
			groupType: "school",
			name: "Schools",
			href: "/school-list",
			subgroupList: [
				{
					id: 1,
					name: "Center Spartans",
					href: "/school-list/1",
					instructor: "Flaco gay",
					address: "Address 1",
					imageSrc:
						"https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
					imageAlt:
						"Drawstring top with elastic loop closure and textured interior padding.",
					subgroups: [],
				},
				{
					id: 2,
					name: "Other school 2",
					href: "/school-list/2",
					instructor: "Jhon Doe",
					address: "Address 2",
					imageSrc:
						"https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
					imageAlt:
						"Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
					subgroups: null,
				},
				{
					id: 3,
					name: "Other school 3",
					href: "#",
					instructor: "Jhon Doe",
					address: "Address 3",
					imageSrc:
						"https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
					imageAlt:
						"Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
					subgroups: null,
				},
				{
					id: 4,
					name: "Other school 4",
					href: "#",
					instructor: "Jhon Doe",
					address: "Address 4",
					imageSrc:
						"https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
					imageAlt:
						"Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
					subgroups: null,
				},
				{
					id: 5,
					name: "Other school 5",
					href: "#",
					instructor: "Jhon Doe",
					address: "Address 5",
					imageSrc:
						"https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
					imageAlt:
						"Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
					subgroups: null,
				},
				{
					id: 6,
					name: "Other school 6",
					href: "#",
					instructor: "Jhon Doe",
					address: "Address 6",
					imageSrc:
						"https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
					imageAlt:
						"Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
					subgroups: null,
				},
				{
					id: 7,
					name: "Other school 7",
					href: "#",
					instructor: "Jhon Doe",
					address: "Address 7",
					imageSrc:
						"https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
					imageAlt:
						"Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
					subgroups: null,
				},
				{
					id: 8,
					name: "Other school 8",
					href: "#",
					instructor: "Jhon Doe",
					address: "Address 8",
					imageSrc:
						"https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
					imageAlt:
						"Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
					subgroups: null,
				},
				{
					id: 9,
					name: "Other school 9",
					href: "#",
					instructor: "Jhon Doe",
					address: "Address 9",
					imageSrc:
						"https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
					imageAlt:
						"Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
					subgroups: null,
				},
				{
					id: 10,
					name: "Other school 10",
					href: "#",
					instructor: "Jhon Doe",
					address: "Address 10",
					imageSrc:
						"https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
					imageAlt:
						"Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
					subgroups: null,
				},
				{
					id: 11,
					name: "Other school 11",
					href: "#",
					instructor: "Jhon Doe",
					address: "Address 11",
					imageSrc:
						"https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
					imageAlt:
						"Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
					subgroups: null,
				},
				{
					id: 12,
					name: "Other school 12",
					href: "#",
					instructor: "Jhon Doe",
					address: "Address 12",
					imageSrc:
						"https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
					imageAlt:
						"Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
					subgroups: null,
				},
				{
					id: 13,
					name: "Other school 13",
					href: "#",
					instructor: "Jhon Doe",
					address: "Address 12",
					imageSrc:
						"https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
					imageAlt:
						"Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
					subgroups: null,
				},
			] as unknown as SubgroupGroupListItem,
			sections: [
				{
					id: "byLocation",
					name: "Closer to my location",
					items: [
						{name: "Tops", href: "#"},
						{name: "Pants", href: "#"},
						{name: "Sweaters", href: "#"},
						{name: "T-Shirts", href: "#"},
						{name: "Jackets", href: "#"},
						{name: "Activewear", href: "#"},
						{name: "Browse All", href: "#"},
					],
				},
				{
					id: "by",
					name: "Accessories",
					items: [
						{name: "Watches", href: "#"},
						{name: "Wallets", href: "#"},
						{name: "Bags", href: "#"},
						{name: "Sunglasses", href: "#"},
						{name: "Hats", href: "#"},
						{name: "Belts", href: "#"},
					],
				},
				{
					id: "brands",
					name: "Brands",
					items: [
						{name: "Re-Arranged", href: "#"},
						{name: "Counterfeit", href: "#"},
						{name: "Full Nelson", href: "#"},
						{name: "My Way", href: "#"},
					],
				},
			] as unknown as Section,
			selected: false,
		},
		{
			id: 2,
			groupType: "other group",
			name: "Another Group",
			href: "/group",
			subgroupList: [
				{
					name: "Another Group 1",
					href: "#",
					imageSrc:
						"https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
					imageAlt:
						"Drawstring top with elastic loop closure and textured interior padding.",
					subgroups: [],
				},
				{
					name: "Another Group 2",
					href: "#",
					imageSrc:
						"https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
					imageAlt:
						"Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
					subgroups: null,
				},
			] as unknown as SubgroupGroupListItem,
			sections: [
				{
					id: "byLocation",
					name: "Closer to my location",
					items: [
						{name: "Tops", href: "#"},
						{name: "Pants", href: "#"},
						{name: "Sweaters", href: "#"},
						{name: "T-Shirts", href: "#"},
						{name: "Jackets", href: "#"},
						{name: "Activewear", href: "#"},
						{name: "Browse All", href: "#"},
					],
				},
				{
					id: "by",
					name: "Accessories",
					items: [
						{name: "Watches", href: "#"},
						{name: "Wallets", href: "#"},
						{name: "Bags", href: "#"},
						{name: "Sunglasses", href: "#"},
						{name: "Hats", href: "#"},
						{name: "Belts", href: "#"},
					],
				},
				{
					id: "brands",
					name: "Brands",
					items: [
						{name: "Re-Arranged", href: "#"},
						{name: "Counterfeit", href: "#"},
						{name: "Full Nelson", href: "#"},
						{name: "My Way", href: "#"},
					],
				},
			] as unknown as Section,
			selected: false,
		},
	] as unknown as GroupItem[],
};

const user = {
	name: "Tom Cook",
	email: "tom@example.com",
	imageUrl:
		"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const userNavigation = [
	{
		id: 1,
		name: "Your profile",
		label: "Manage your profile",
		href: "/account",
		selected: false,
	},
	{
		id: 2,
		name: "Dashboard",
		label: "Manage your schools",
		href: "/account/dashboard",
		selected: false,
	},
	{
		id: 3,
		name: "Account settings",
		label: "Configure your account, social networks and more",
		href: "/account/settings",
		selected: false,
	},
	{
		id: 4,
		name: "Sign out",
		label: "Signing out...",
		href: "/logout",
		selected: false,
	},
] as unknown as NavigationItem[];

export {navigation, user, userNavigation};
