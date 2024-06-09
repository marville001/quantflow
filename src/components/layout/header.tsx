
"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { ArrowDown, ChevronDown } from "lucide-react";

interface HeaderProps { }

const Header = ({ }: HeaderProps) => {
	return (
		<div className="h-[104px] w-full flex items-center">
			<div className="max-w-[1280px] flex-1 mx-auto border-grey-300 border-[1px] 
			rounded-[20px] flex justify-between gap-5 items-center p-[16px]">
				<Link href={"/"} className="logo">
					<Image src="/assets/images/quantflow-logo-black.png" alt="Quantflow" width={120} height={40} />
				</Link>
				<nav>
					<ul className="flex items-center gap-6">
						<li>
							<Link href="/about" className="flex items-center text-grey-800 gap-4 cursor-pointer font-[400]">
								<span>Platform</span>
								<svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M0.617106 0.950408C0.92064 0.668556 1.39519 0.686132 1.67704 0.989665L4.37744 3.89779L7.07785 0.989666C7.3597 0.686133 7.83425 0.668558 8.13778 0.95041C8.44132 1.23226 8.45889 1.70681 8.17704 2.01034L4.92704 5.51034C4.78513 5.66317 4.58599 5.75 4.37744 5.75C4.16889 5.75 3.96976 5.66317 3.82785 5.51034L0.577849 2.01034C0.295997 1.70681 0.313573 1.23226 0.617106 0.950408Z" fill="#141414" />
								</svg>
							</Link>
						</li>
						<li>
							<Link href="/about" className="flex items-center text-grey-800 gap-4 cursor-pointer font-[400]">
								<span>Resources</span>
								<svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M0.617106 0.950408C0.92064 0.668556 1.39519 0.686132 1.67704 0.989665L4.37744 3.89779L7.07785 0.989666C7.3597 0.686133 7.83425 0.668558 8.13778 0.95041C8.44132 1.23226 8.45889 1.70681 8.17704 2.01034L4.92704 5.51034C4.78513 5.66317 4.58599 5.75 4.37744 5.75C4.16889 5.75 3.96976 5.66317 3.82785 5.51034L0.577849 2.01034C0.295997 1.70681 0.313573 1.23226 0.617106 0.950408Z" fill="#141414" />
								</svg>
							</Link>
						</li>
						<li>
							<Link href="/about" className="flex items-center text-grey-800 gap-4 cursor-pointer font-[400]">
								<span>Company</span>
								<svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M0.617106 0.950408C0.92064 0.668556 1.39519 0.686132 1.67704 0.989665L4.37744 3.89779L7.07785 0.989666C7.3597 0.686133 7.83425 0.668558 8.13778 0.95041C8.44132 1.23226 8.45889 1.70681 8.17704 2.01034L4.92704 5.51034C4.78513 5.66317 4.58599 5.75 4.37744 5.75C4.16889 5.75 3.96976 5.66317 3.82785 5.51034L0.577849 2.01034C0.295997 1.70681 0.313573 1.23226 0.617106 0.950408Z" fill="#141414" />
								</svg>
							</Link>
						</li>
					</ul>
				</nav>

				<div className="flex items-center gap-4">
					<Button variant={"outline"}>Contact us</Button>
					<Button>Get started</Button>
				</div>
			</div>

		</div>
	);
};

export default Header;
