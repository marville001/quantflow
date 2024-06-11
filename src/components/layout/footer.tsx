
"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { ICONS } from "@/assets/icons";
interface FooterProps { }

const Footer = ({ }: FooterProps) => {
	return (
		<div className="w-full">
			<div className="max-w-[1120px] py-16 md:py-24 mx-auto">
				<h2 className="hero-medium text-grey-800 text-center">Connect to Anything</h2>
				<p className="max-w-[544px] mx-auto text-center p-4 mt-3 body-large">
					Quantflow seemingly slots into your existing stack without having to change your current system.
				</p>
				<Image
					src="/assets/images/integration_image.png"
					alt="Integration"
					width={1120}
					height={600}
					className="w-full h-auto object-cover sm:-mt-[140px]"
				/>

				<div className="mt-24 pt-24 p-4">
					<div className="bg-[url(/assets/images/bg/background_black.png)] bg-cover bg-no-repeat w-full p-16 lg:h-[336px] rounded-[20px] flex items-center justify-center flex-col">
						<h2 className="header-large sm:hero-medium text-white text-center">Need some inspiration?</h2>
						<p className="body-large text-white mt-6 text-center">Think AI can benefit your business? Let&apos;s explore how Quantflow can help!</p>
						<Button className="mt-6">Contact Us</Button>
					</div>

					<div className="mt-6 flex gap-6 flex-col lg:flex-row">
						<div className="flex-1 lg:flex-none lg:w-[300px] border-[1px] flex flex-col sm:flex-row lg:flex-col border-grey-300 p-4 rounded-[20px]">
							<div className="flex-1">
								<Image src="/assets/images/quantflow-logo-black.png" alt="Quantflow" width={120} height={40} />

								<p className="body-normal text-grey-600 my-4">Your Gateway to enterprise-grade AI.</p>
							</div>

							<Button variant={"outline"} className="mt-auto w-max">Get Started</Button>
						</div>

						<div className="flex-1 border-[1px] border-grey-300 p-4 rounded-[20px]">
							<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
								<div className="w-full">
									<h4 className="body-small text-grey-800">Company</h4>

									<ul className="mt-5 space-y-2">
										<li>
											<Link href="/about" className="text-grey-600 cursor-pointer body-normal">About us</Link>
										</li>
										<li>
											<Link href="/about" className="text-grey-600 cursor-pointer body-normal">Careers</Link>
										</li>
										<li>
											<Link href="/about" className="text-grey-600 cursor-pointer body-normal">FAQ</Link>
										</li>
										<li>
											<Link href="/about" className="text-grey-600 cursor-pointer body-normal">Blog</Link>
										</li>
									</ul>
								</div>
								<div className="w-full">
									<h4 className="body-small text-grey-800">Platform</h4>

									<ul className="mt-5 space-y-2">
										<li>
											<Link href="/about" className="text-grey-600 cursor-pointer body-normal">Document Automation</Link>
										</li>
										<li>
											<Link href="/about" className="text-grey-600 cursor-pointer body-normal">Email Automation</Link>
										</li>
										<li>
											<Link href="/about" className="text-grey-600 cursor-pointer body-normal">Knowledge Hub</Link>
										</li>
										<li>
											<Link href="/about" className="text-grey-600 cursor-pointer body-normal">Insight Hub</Link>
										</li>
									</ul>
								</div>
								
								<div className="w-full col-span-2 md:col-span-1">
									<h4 className="body-small text-grey-800">Contact Us</h4>

									<ul className="mt-5 space-y-1">
										<li className="flex items-center gap-2 body-normal text-grey-800">
											{ICONS.phone} +41 78 310 95 98
										</li>
										<li className="flex items-center gap-2 body-normal text-grey-800">
											{ICONS.email} info@quantflow.tech
										</li>
										<li className="flex items-start gap-2 body-normal text-grey-800">
											<span className="shrink-0">{ICONS.locationPin}</span> Marktstrasse 4,9435 Heerbrugg SG
										</li>
									</ul>
								</div>
							</div>

							<div className="mt-5 flex items-center flex-col gap-4 sm:flex-row justify-between">
								<p className="body-small text-grey-500 text-center">
									©2024 Quantflow Ai AG, all rights reserved.
								</p>

								{
									ICONS.linkedIn
								}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
