import React from "react";
import {InformationCircleIcon} from "@heroicons/react/24/outline";
import {Card, CardBody, Image, Button} from "@nextui-org/react";

export default function MainMap() {
	return (
		<Card
			isBlurred
			className="border-none bg-background/60 dark:bg-default-100/50 w-full rounded-none"
			shadow="sm"
		>
			<h1 className="p-4 font-semibold text-2xl text-indigo-600 dark:text-white">
				Central location
			</h1>
			<CardBody>
				<div className="grid grid-cols-6 grid-rows-3 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28489.80408919635!2d-65.2279808!3d-26.8009472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1712617641963!5m2!1ses-419!2sar"
						className="relative col-span-6 row-span-3 w-full h-full"
						loading="lazy"
					></iframe>

					<div className="flex flex-col col-span-6 row-span-3">
						<div className="flex items-start gap-4">
							<Image
								src="/resources/images/performed-logo.png"
								alt="Center School"
								className="max-w-32 dark:bg-white"
							/>

							<div className="flex flex-col gap-0">
								<h3 className="font-semibold text-large text-foreground/90">
									Instructor: Carlos B. Centeno
								</h3>
								<p className="text-small text-foreground/80">VIII DAN</p>
								<h1 className="text-large font-medium mt-2">Escuela Center</h1>
							</div>
							<Button
								isIconOnly
								className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
								radius="full"
								variant="light"
							>
								<InformationCircleIcon />
							</Button>
						</div>

						<div className="flex flex-col mt-3 gap-1">
							<br />
							<p className="text-small text-foreground/50">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
								laboriosam. Reiciendis beatae, dicta voluptatibus quisquam aut
								odio, vitae nostrum quas corporis ducimus et pariatur
								reprehenderit eaque dignissimos molestiae harum necessitatibus?
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Delectus dignissimos non, rem exercitationem assumenda nam
								officia velit ipsum porro explicabo ab aspernatur. Aut
								aspernatur neque similique culpa, aliquam possimus voluptas.
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
								repudiandae ad nesciunt impedit atque aperiam quaerat adipisci
								veritatis cumque voluptatum aut harum, rerum molestiae ullam
								velit tenetur laudantium quae reprehenderit.
							</p>
							<br />
							<p className="text-small text-foreground/50">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
								laboriosam. Reiciendis beatae, dicta voluptatibus quisquam aut
								odio, vitae nostrum quas corporis ducimus et pariatur
								reprehenderit eaque dignissimos molestiae harum necessitatibus?
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Delectus dignissimos non, rem exercitationem assumenda nam
								officia velit ipsum porro explicabo ab aspernatur. Aut
								aspernatur neque similique culpa, aliquam possimus voluptas.
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
								repudiandae ad nesciunt impedit atque aperiam quaerat adipisci
								veritatis cumque voluptatum aut harum, rerum molestiae ullam
								velit tenetur laudantium quae reprehenderit.
							</p>
							{/* </div> */}
						</div>
					</div>
				</div>
			</CardBody>
		</Card>
	);
}
