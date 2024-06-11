import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from 'react';

interface PlatformHeaderMenuProps {
	closeHeader: () => void;
	isMobile?: boolean;
}
const PlatformHeaderMenu = ({ closeHeader, isMobile=false }: PlatformHeaderMenuProps) => {
	return (
		<div className={cn("", {
			"rounded-[8px] p-[8px] w-[482px]": !isMobile,
			"w-full": isMobile,
		})}>
			{!isMobile && <h2 className="body-small font-menlo px-3 mb-3">Features</h2>}

			<Link onClick={closeHeader} href="/document-automation" className="flex gap-5 items-center p-[8px] hover:bg-grey rounded-[8px]">
				<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect width="40" height="40" rx="8" fill="#F5F7F9" />
					<path fillRule="evenodd" clipRule="evenodd" d="M15.75 12.5C15.0596 12.5 14.5 13.0596 14.5 13.75V26.25C14.5 26.9404 15.0596 27.5 15.75 27.5H24.25C24.9404 27.5 25.5 26.9404 25.5 26.25V17.5H21.25C20.8358 17.5 20.5 17.1642 20.5 16.75V12.5H15.75ZM22 13.5607L24.4393 16H22V13.5607ZM13 13.75C13 12.2312 14.2312 11 15.75 11H21.25C21.4489 11 21.6397 11.079 21.7803 11.2197L26.7803 16.2197C26.921 16.3603 27 16.5511 27 16.75V26.25C27 27.7688 25.7688 29 24.25 29H15.75C14.2312 29 13 27.7688 13 26.25V13.75Z" fill="#141414" />
				</svg>
				<div>
					<p className="body-normal text-grey-800">Document Automation</p>
					<p className="body-small font-menlo text-grey-600">automate the populating of your documents</p>
				</div>
			</Link>
			<Link onClick={closeHeader} href="/email-automation" className="flex gap-5 items-center p-[8px] hover:bg-grey rounded-[8px]">
				<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect width="40" height="40" rx="8" fill="#F5F7F9" />
					<path fillRule="evenodd" clipRule="evenodd" d="M12.5642 15.3534L20 19.6346L27.4358 15.3534C27.27 14.8574 26.8017 14.5 26.25 14.5H13.75C13.1983 14.5 12.73 14.8574 12.5642 15.3534ZM27.5 17.0472L20.3742 21.15C20.1426 21.2833 19.8574 21.2833 19.6258 21.15L12.5 17.0472V24.25C12.5 24.9404 13.0596 25.5 13.75 25.5H26.25C26.9404 25.5 27.5 24.9404 27.5 24.25V17.0472ZM11 15.75C11 14.2312 12.2312 13 13.75 13H26.25C27.7688 13 29 14.2312 29 15.75V24.25C29 25.7688 27.7688 27 26.25 27H13.75C12.2312 27 11 25.7688 11 24.25V15.75Z" fill="#141414" />
				</svg>
				<div>
					<p className="body-normal text-grey-800">Email Automation</p>
					<p className="body-small font-menlo text-grey-600">automate your email processes</p>
				</div>
			</Link>
			<Link onClick={closeHeader} href="/knowledge-hub" className="flex gap-5 items-center p-[8px] hover:bg-grey rounded-[8px]">
				<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect width="40" height="40" rx="8" fill="#F5F7F9" />
					<path fillRule="evenodd" clipRule="evenodd" d="M18.5 12.5C15.1863 12.5 12.5 15.1863 12.5 18.5C12.5 21.8137 15.1863 24.5 18.5 24.5C21.8137 24.5 24.5 21.8137 24.5 18.5C24.5 15.1863 21.8137 12.5 18.5 12.5ZM11 18.5C11 14.3579 14.3579 11 18.5 11C22.6421 11 26 14.3579 26 18.5C26 20.301 25.3652 21.9536 24.3072 23.2465L28.7803 27.7197C29.0732 28.0126 29.0732 28.4874 28.7803 28.7803C28.4874 29.0732 28.0126 29.0732 27.7197 28.7803L23.2465 24.3072C21.9536 25.3652 20.301 26 18.5 26C14.3579 26 11 22.6421 11 18.5Z" fill="#141414" />
				</svg>
				<div>
					<p className="body-normal text-grey-800">Knowledge Hub</p>
					<p className="body-small font-menlo text-grey-600">find your enterprise data effortlessly</p>
				</div>
			</Link>
			<Link onClick={closeHeader} href="/insights-hub" className="flex gap-5 items-center p-[8px] hover:bg-grey rounded-[8px]">
				<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect width="40" height="40" rx="8" fill="#F5F7F9" />
					<path fillRule="evenodd" clipRule="evenodd" d="M11 13.75C11 12.2312 12.2312 11 13.75 11H26.25C27.7688 11 29 12.2312 29 13.75V26.25C29 27.7688 27.7688 29 26.25 29H13.75C12.2312 29 11 27.7688 11 26.25V13.75ZM13.75 12.5C13.0596 12.5 12.5 13.0596 12.5 13.75V26.25C12.5 26.9404 13.0596 27.5 13.75 27.5H26.25C26.9404 27.5 27.5 26.9404 27.5 26.25V13.75C27.5 13.0596 26.9404 12.5 26.25 12.5H13.75ZM20 15C20.4142 15 20.75 15.3358 20.75 15.75V24.25C20.75 24.6642 20.4142 25 20 25C19.5858 25 19.25 24.6642 19.25 24.25V15.75C19.25 15.3358 19.5858 15 20 15ZM16.75 18C17.1642 18 17.5 18.3358 17.5 18.75V24.25C17.5 24.6642 17.1642 25 16.75 25C16.3358 25 16 24.6642 16 24.25V18.75C16 18.3358 16.3358 18 16.75 18ZM23.25 20C23.6642 20 24 20.3358 24 20.75V24.25C24 24.6642 23.6642 25 23.25 25C22.8358 25 22.5 24.6642 22.5 24.25V20.75C22.5 20.3358 22.8358 20 23.25 20Z" fill="#141414" />
				</svg>
				<div>
					<p className="body-normal text-grey-800">Insights Hub</p>
					<p className="body-small font-menlo text-grey-600">gain valuable insights from your data</p>
				</div>
			</Link>
		</div>
	);
};

export default PlatformHeaderMenu;