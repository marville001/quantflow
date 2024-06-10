
"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface HeaderProps { }

const Header = ({ }: HeaderProps) => {
	const [isHeaderOpen, setIsHeaderOpen] = useState(false);


	return (
		<div className="h-[104px] w-full flex items-center px-4">
			<div className="max-w-[1280px] flex-1 mx-auto border-grey-300 border-[1px] 
			rounded-[20px] flex justify-between gap-5 items-center p-[16px]">
				<Link href={"/"} className="logo">
					<Image src="/assets/images/quantflow-logo-black.png" alt="Quantflow" width={120} height={40} />
				</Link>
				<nav className={cn("fixed transition-all md:static top-0 bottom-0 left-0 right-0 p-5 md:p-0 bg-white",
					{
						"-translate-x-0": isHeaderOpen,
						"-translate-x-[100%] md:-translate-x-0": !isHeaderOpen
					}
				)}>
					<ul className={cn("flex flex-col md:flex-row md:items-center gap-6")}
					>
						<span className="menu cursor-pointer self-end p-2" onClick={() => setIsHeaderOpen(!isHeaderOpen)}>
							<X className="md:hidden" size={24} />
						</span>
						<li>
							<Link href="/" className="flex items-center text-grey-800 gap-4 cursor-pointer font-[400]">
								<span>Platform</span>
								<svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" clipRule="evenodd" d="M0.617106 0.950408C0.92064 0.668556 1.39519 0.686132 1.67704 0.989665L4.37744 3.89779L7.07785 0.989666C7.3597 0.686133 7.83425 0.668558 8.13778 0.95041C8.44132 1.23226 8.45889 1.70681 8.17704 2.01034L4.92704 5.51034C4.78513 5.66317 4.58599 5.75 4.37744 5.75C4.16889 5.75 3.96976 5.66317 3.82785 5.51034L0.577849 2.01034C0.295997 1.70681 0.313573 1.23226 0.617106 0.950408Z" fill="#141414" />
								</svg>
							</Link>
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
						<li className="flex flex-col gap-4 md:hidden">
							<Button className="w-max" variant={"outline"}>Contact us</Button>
							<Button className="w-max">Get started</Button>
						</li>
					</ul>
				</nav>

				<div className="hidden items-center gap-4 md:flex">
					<Button variant={"outline"}>Contact us</Button>
					<Button>Get started</Button>
				</div>
				<span className="menu md:hidden cursor-pointer p-2" onClick={() => setIsHeaderOpen(!isHeaderOpen)}>
					<Menu size={24} />
				</span>
			</div>

		</div>
	);
};

export default Header;
