import React, { Dispatch, SetStateAction } from 'react';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import PlatformHeaderMenu from "./platform-header-menu";
import { Button } from "../ui/button";

interface MobileNavProps {
	open: boolean;
	closeHeader: ()=>void;
}
const MobileNav = ({ open, closeHeader }: MobileNavProps) => {
	if (!open) return null;
	console.log({ open });
	
	return (
		<div className="flex-1 w-full p-[16px] pt-0 md:hidden">
			<div className="border-t-[1px] border-grey" />
			<Accordion type="single" collapsible>
				<AccordionItem value="item-1">
					<AccordionTrigger className="hover:no-underline">Platform</AccordionTrigger>
					<AccordionContent>
						<PlatformHeaderMenu closeHeader={closeHeader} isMobile />
					</AccordionContent>
				</AccordionItem>
				<AccordionItem disabled value="item-2">
					<AccordionTrigger className="hover:no-underline">Resources</AccordionTrigger>
					<AccordionContent> </AccordionContent>
				</AccordionItem>
				<AccordionItem disabled value="item-2">
					<AccordionTrigger showArrow={false}>Company</AccordionTrigger>
					<AccordionContent> </AccordionContent>
				</AccordionItem>
			</Accordion>

			<div className="items-center justify-center mt-6 gap-[8px] flex">
				<Button variant={"outline"}>Contact us</Button>
				<Button>Get started</Button>
			</div>
		</div>
	);
};

export default MobileNav;