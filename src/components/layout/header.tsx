
"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import MobileNav from "./mobile-nav";
import PlatformHeaderMenu from "./platform-header-menu";

interface HeaderProps { }

const Header = ({ }: HeaderProps) => {
	const [isHeaderOpen, setIsHeaderOpen] = useState(false);
	const [openMenuPlatform, setOpenMenuPlatform] = useState(false);

	return (
		<div className="pt-4 w-full flex fixed z-[49]  left-0 right-0 top-0 items-center px-4">
			<div className="max-w-[1280px] bg-white flex-1 mx-auto border-grey-300 border-[1px] 
			rounded-[20px] bordered-header flex flex-col">
				<div className="flex justify-between flex-1 w-full gap-5 p-[16px] items-center">
					<Link href={"/"} className="logo">
						<Image src="/assets/images/quantflow-logo-black.png" alt="Quantflow" width={120} height={40} />
					</Link>
					<nav className={cn("hidden transition-all md:block top-0 bottom-0 left-0 right-0 p-5 md:p-0 bg-white")}>
						<ul className={cn("flex flex-col md:flex-row md:items-center gap-6")}
						>
							<span className="menu cursor-pointer self-end p-2" onClick={() => setIsHeaderOpen(!isHeaderOpen)}>
								<X className="md:hidden" size={24} />
							</span>
							<li>
								<DropdownMenu open={openMenuPlatform} onOpenChange={setOpenMenuPlatform}>
									<DropdownMenuTrigger>
										<Link href="/"
											className={cn("flex items-center h-[40px] rounded-[8px] px-[12px] text-grey-800 gap-4 cursor-pointer font-[400]", {
												"bg-grey": openMenuPlatform
											})}
										>
											<span>Platform</span>
											<svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path fillRule="evenodd" clipRule="evenodd" d="M0.617106 0.950408C0.92064 0.668556 1.39519 0.686132 1.67704 0.989665L4.37744 3.89779L7.07785 0.989666C7.3597 0.686133 7.83425 0.668558 8.13778 0.95041C8.44132 1.23226 8.45889 1.70681 8.17704 2.01034L4.92704 5.51034C4.78513 5.66317 4.58599 5.75 4.37744 5.75C4.16889 5.75 3.96976 5.66317 3.82785 5.51034L0.577849 2.01034C0.295997 1.70681 0.313573 1.23226 0.617106 0.950408Z" fill="#141414" />
											</svg>
										</Link>
									</DropdownMenuTrigger>
									<DropdownMenuContent align="start" side="bottom">
										<PlatformHeaderMenu closeHeader={()=>setOpenMenuPlatform(false)} />
									</DropdownMenuContent>
								</DropdownMenu>
							</li>
							<li>
								<Link href="/" className="flex items-center text-grey-800 gap-4 cursor-pointer font-[400]">
									<span>Resources</span>
									<svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fillRule="evenodd" clipRule="evenodd" d="M0.617106 0.950408C0.92064 0.668556 1.39519 0.686132 1.67704 0.989665L4.37744 3.89779L7.07785 0.989666C7.3597 0.686133 7.83425 0.668558 8.13778 0.95041C8.44132 1.23226 8.45889 1.70681 8.17704 2.01034L4.92704 5.51034C4.78513 5.66317 4.58599 5.75 4.37744 5.75C4.16889 5.75 3.96976 5.66317 3.82785 5.51034L0.577849 2.01034C0.295997 1.70681 0.313573 1.23226 0.617106 0.950408Z" fill="#141414" />
									</svg>
								</Link>
							</li>
							<li>
								<Link href="/" className="flex items-center text-grey-800 gap-4 cursor-pointer font-[400]">
									<span>Company</span>
									<svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fillRule="evenodd" clipRule="evenodd" d="M0.617106 0.950408C0.92064 0.668556 1.39519 0.686132 1.67704 0.989665L4.37744 3.89779L7.07785 0.989666C7.3597 0.686133 7.83425 0.668558 8.13778 0.95041C8.44132 1.23226 8.45889 1.70681 8.17704 2.01034L4.92704 5.51034C4.78513 5.66317 4.58599 5.75 4.37744 5.75C4.16889 5.75 3.96976 5.66317 3.82785 5.51034L0.577849 2.01034C0.295997 1.70681 0.313573 1.23226 0.617106 0.950408Z" fill="#141414" />
									</svg>
								</Link>
							</li>
						</ul>
					</nav>

					<div className="hidden items-center gap-[8px] md:flex">
						<Button size={"sm"} variant={"outline"}>Contact us</Button>
						<Button size={"sm"}>Get started</Button>
					</div>
					<span className="menu md:hidden cursor-pointer p-2" onClick={() => setIsHeaderOpen(!isHeaderOpen)}>
						{
							isHeaderOpen ?
								<svg width="20" height="25" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" clipRule="evenodd" d="M5.21967 7.71967C5.51256 7.42678 5.98744 7.42678 6.28033 7.71967L10 11.4393L13.7197 7.71967C14.0126 7.42678 14.4874 7.42678 14.7803 7.71967C15.0732 8.01256 15.0732 8.48744 14.7803 8.78033L11.0607 12.5L14.7803 16.2197C15.0732 16.5126 15.0732 16.9874 14.7803 17.2803C14.4874 17.5732 14.0126 17.5732 13.7197 17.2803L10 13.5607L6.28033 17.2803C5.98744 17.5732 5.51256 17.5732 5.21967 17.2803C4.92678 16.9874 4.92678 16.5126 5.21967 16.2197L8.93934 12.5L5.21967 8.78033C4.92678 8.48744 4.92678 8.01256 5.21967 7.71967Z" fill="#141414" />
								</svg>
								:
								<Menu size={24} />
						}
					</span>
				</div>
				<MobileNav open={isHeaderOpen} closeHeader={() => { setOpenMenuPlatform(false);setIsHeaderOpen(false) }} />
			</div>

		</div>
	);
};

export default Header;
