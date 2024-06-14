import { ICONS } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { Suspense } from "react";

const hero_items = [
    {
        image: ICONS.clock,
        title: "Increased Efficiency",
        description:
            "Significantly reduces the time spent on manual document processing and populating.",
    },
    {
        image: ICONS.saving,
        title: "Cost Savings",
        description:
            "Lowers operational costs by automating labor-intensive tasks and reducing error-related expenses.",
    },
    {
        image: ICONS.person,
        title: "Improved Employee Satisfaction",
        description:
            "Frees employees from repetitive and mundane tasks, enabling them to focus on more engaging and value-added activities.",
    },
    {
        image: ICONS.brokenArrow,
        title: "Scalability",
        description:
            "Easily adapts to handle increasing document volumes and complexity as your business grows.",
    },
    {
        image: ICONS.human,
        title: "Reduction of Human Error",
        description:
            "Minimizes errors typically associated with manual data entry, leading to more reliable document handling.",
    },
    {
        image: ICONS.check,
        title: "Enhanced Compliance",
        description:
            "Ensures that all documents adhere to regulatory and internal compliance standards through consistent processing.",
    },
];

const cards = [
    {
        image: "/assets/images/construction.png",
        title: "Construction Industry",
        description: "Regulatory Documents",
    },
    {
        image: "/assets/images/healthcare.png",
        title: "Healthcare",
        description: "Patient Records",
    },
    {
        image: "/assets/images/logistics.png",
        title: "Logistics",
        description: "Customs declarations",
    },
    {
        image: "/assets/images/insurance.png",
        title: "Insurance",
        description: "Claims Processing",
    },
];
const page = () => {
    return (
        <div className="w-full">
            <div className="document-automation-bg p-4 bg-opacity-0">
                <div className="max-w-[1120px] mx-auto w-full p-4 pb-10 hero-bg">
                    <div className="flex justify-center flex-col items-center pt-[60px]">
                        <p className="rounded-full my-3 px-6 py-1.5 text- bg-grey  text-grey-600 text-center w-max flex items-center justify-center">
                            Email Automation
                        </p>
                        <h1 className="text-grey-800 hero-medium w-full md:max-w-[732px] text-center ">
                            Emails on Autopilot
                        </h1>
                        <p className="text-grey-800 header-normal  w-full max-w-[] sm:max-w-[544px] text-center mt-5 ">
                            Quantflow streamlines your email workflow by automating categorization, creating response drafts, and more.
                        </p>
                        <div className="flex items-center gap-4 mt-7">
                            <Button>Get started</Button>
                            <Button variant={"outline"}>Talk to Sales</Button>
                        </div>
                    </div>

                    {/* <Suspense fallback={null}> */}
                        <div className="my-5 md:my-20 rounded-[20px] video-shadow p-[16px] bg-[#cfd6dd] overflow-hidden">
                            <video
                                src="/assets/images/document_automation/video_hero.mov"
                                width={1120}
                                autoPlay
                                loop
                                muted
                                height={600}
                                className="w-full h-auto video-shadow rounded-[20px]"
                            />
                        </div>
                    {/* </Suspense> */}
                </div>
            </div>

            <div className="py-10 px-4 mx-auto">
                <h2 className="hero-medium text-grey-800 text-center">
                    Automation via Gen Ai
                </h2>
                <p className=" max-w-[544px] mx-auto text-center p-4 mt-3 body-large">
                    Quantflow automates the populating and processing of
                    documents and web-forms using generative Ai.
                </p>
            </div>

            <div className="max-w-[1120px] py-10 px-4 mx-auto ">
                <div className="flex gap-6 flex-col lg:flex-row">
                    <div className="flex-1 border-[1px] bg-grey p-4 lg:w-[640px]  rounded-[20px]">
                        <div className="flex justify-between gap-5 mt-4 flex-col gap-y-8 sm:flex-row">
                            <div className="flex items-start flex-1 flex-col  gap-4">
                                <span className="text-grey-500 body-small">
                                    01
                                </span>

                                <p className="text-grey-600 body-normal w-full mt-1">
                                    <span className="text-grey-800 font-semibold">
                                        Connecting all your data sources,
                                        including software applications,
                                        documents, web pages and more.
                                    </span>{" "}
                                    Our platform extracts real-time,
                                    unstructured and structured data from these
                                    sources to build a comprehensive data pool.
                                </p>
                                <Image
                                    src="/assets/images/document-automation-1.png"
                                    alt="Document automation"
                                    width={600}
                                    height={400}
                                    className="w-full h-[300px] sm:h-full max-sm:object-left object-top object-contain"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 lg:flex-none lg:w-[488px] h-auto border-[1px] flex flex-col sm:flex-row lg:flex-col bg-grey p-4 rounded-[20px]">
                        <div className="flex justify-between gap-5 mt-4 flex-col gap-y-8 sm:flex-row">
                            <div className="flex items-start flex-1 flex-col  gap-4">
                                <span className="text-grey-500 body-small">
                                    02
                                </span>

                                <p className="text-grey-600 body-normal w-full mt-1">
                                    <span className="text-grey-800 font-semibold">
                                        Extracted data gets indexed and embedded
                                        using advanced AI techniques.{" "}
                                    </span>
                                    This process ensures that the data is ready
                                    for efficient retrieval.
                                </p>
                                <Image
                                    src="/assets/images/automation-2.png"
                                    alt="Document automation"
                                    width={600}
                                    height={400}
                                    className="w-full !h-[312px] sm:h-full object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-[1120px]  py-10 mx-auto flex gap-6 flex-col lg:flex-row">
                    <div className="flex-1 lg:flex-none  lg:w-[488px] h-[344px]  pb-0   overflow-hidden border-[1px] flex flex-col sm:flex-row lg:flex-col bg-grey p-4 rounded-[20px]">
                        <div className="flex justify-between gap-5 mt-4 flex-col gap-y-8 sm:flex-row">
                            <div className="flex items-start flex-1 flex-col  gap-4">
                                <span className="text-grey-500 body-small">
                                    03
                                </span>

                                <p className="text-grey-600 body-normal w-full mt-1">
                                    <span className="text-grey-800 font-semibold">
                                        Connect the documents you want to
                                        populate.
                                    </span>{" "}
                                    The platform automatically recognizes all
                                    fields and extracts their labels.
                                </p>
                                <Image
                                    src="/assets/images/document-automation-3.png"
                                    alt="Document automation"
                                    width={500}
                                    height={500}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 border-[1px] bg-grey p-4 h-full pb-0 flex-col  overflow-hidden  rounded-[20px]">
                        <div className="flex justify-between  gap-5 mt-4 flex-col gap-y-8 sm:flex-row">
                            <div className="flex items-start flex-1 flex-col  gap-4">
                                <span className="text-grey-500 body-small">
                                    04
                                </span>

                                <p className="text-grey-600 body-normal w-full mt-1">
                                    <span className="text-grey-800 font-semibold">
                                        The AI matches extracted labels to the
                                        appropriate data and populates the
                                        document fields.{" "}
                                    </span>{" "}
                                    This includes handling complex fields,
                                    mismatched labels, and generating new
                                    content where required.
                                </p>
                                <Image
                                    src="/assets/images/document-automation-4.png"
                                    alt="Document automation"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex gap-6 flex-col lg:flex-row">
                    <div className="flex-1 border-[1px] bg-grey p-4 lg:w-[640px]  rounded-[20px]">
                        <div className="flex justify-between gap-5 mt-4 flex-col gap-y-8 sm:flex-row">
                            <div className="flex items-start flex-1 flex-col  gap-4">
                                <span className="text-grey-500 body-small">
                                    05
                                </span>

                                <p className="text-grey-600 body-normal w-full mt-1">
                                    <span className="text-grey-800 font-semibold">
                                        Human-in-the-loop mechanism allows users
                                        to easily trace AI decisions and correct
                                        any discrepancies.
                                    </span>{" "}
                                    This feedback loop helps the AI learn and
                                    improve automatically, enhancing future
                                    accuracy.
                                </p>
                                <Image
                                    src="/assets/images/document-automation-5.png"
                                    alt="Document automation"
                                    width={600}
                                    height={400}
                                    className="w-full h-[300px] sm:h-full max-sm:object-left object-top object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 lg:flex-none lg:w-[488px] border-[1px] flex flex-col sm:flex-row lg:flex-col bg-grey p-4 rounded-[20px]">
                        <div className="flex justify-between gap-5 mt-4 flex-col gap-y-8 sm:flex-row">
                            <div className="flex items-start flex-1 flex-col  gap-4">
                                <span className="text-grey-500 body-small">
                                    06
                                </span>

                                <p className="text-grey-600 body-normal w-full mt-1">
                                    <span className="text-grey-800 font-semibold">
                                        Processing of the filled-out documents
                                        gets automated and integrated into your
                                        existing workflow.
                                    </span>{" "}
                                    This ensures seamless operation and
                                    real-time updates within your enterprise
                                    systems.
                                </p>
                                <Image
                                    src="/assets/images/document-automation-6.png"
                                    alt="Document automation"
                                    width={600}
                                    height={400}
                                    className="w-full !h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-[1120px] py-10 px-4 mx-auto  mt-4">
                <div className="flex-1 p-4 rounded-[20px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {hero_items.map((item, idx) => (
                            <div key={idx}>
                                <h3 className=" flex items-center gap-2">
                                    {item.image}
                                    <span className="text-grey-800 header-normal">
                                        {item.title}
                                    </span>
                                </h3>
                                <p className="text-grey-600 body-normal w-full mt-1">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="p-4 bg-quantflow-500">
                <div className="max-w-[1120px] mx-auto py-16 lg:py-24">
                    <h2 className="hero-medium text-white">Use Cases</h2>
                    <p className="body-large text-white max-w-[544px] mt-5">
                        Accelerating workflows across various industries.
                    </p>

                    <div className=" mt-10 flex-col sm:flex-row pr-0 pb-0 grid w-full md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {cards.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col gap-2 bg-white p-4 rounded-[20px]"
                            >
                                <Image
                                    src={item.image}
                                    alt="Hero"
                                    width={400}
                                    height={400}
                                    className="w-full h-[200px] rounded-[20px] object-cover flex-1"
                                />
                                <p className="text-grey-600 body-small w-full mt-1">
                                    {item.title}
                                </p>
                                <h3 className=" flex items-center gap-2 bg-white">
                                    <span className="text-grey-800 header-normal">
                                        {item.description}
                                    </span>
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className=" max-w-[1120px] py-10 px-4 mx-auto">
                <div className="py-10">
                    <h2 className="hero-medium text-grey-800 text-center">
                        The future of automation
                    </h2>
                    <p className=" max-w-[544px] mx-auto text-center p-4 mt-3 body-large">
                        Using advanced AI algorithms Quantflow transforms the
                        document automation industry.
                    </p>
                </div>
                <div className="flex h-full gap-4 flex-col md:flex-row">
                    <div className="flex-1 bg-grey flex flex-col p-5 justify-center w-full  rounded-[20px]">
                        <h3 className="text-grey-800 header-large w-full">
                            Traditional Document Automation
                        </h3>
                        <div className="flex-1 mt-8 justify-center space-y-3 w-full">
                            <hr className="border-grey-300 w-full " />
                            <p className="heder-normal p-2 text-grey-800 flex w-full justify-between">
                                <span>Rule-Based Systems</span>
                                <ChevronDown
                                    size={20}
                                    className="text-grey-800"
                                />
                            </p>
                            <hr className="border-grey-300" />
                            <p className="heder-normal p-2  text-grey-800 flex w-full justify-between">
                                <span>Limited Document Populating</span>
                                <ChevronDown
                                    size={20}
                                    className="text-grey-800"
                                />
                            </p>
                            <hr className="border-grey-300" />
                            <hr className="!text-gray-800 " />
                            <p className="heder-normal p-2  text-grey-800 flex w-full justify-between">
                                <span>Fixed Workflow Automation</span>
                                <ChevronDown
                                    size={20}
                                    className="text-grey-800"
                                />
                            </p>
                            <hr className="border-grey-300" />
                            <p className="heder-normal p-2  text-grey-800 flex w-full justify-between">
                                <span>Limited Scalability</span>
                                <ChevronDown
                                    size={20}
                                    className="text-grey-800"
                                />
                            </p>
                            <hr className="border-grey-300" />
                        </div>
                    </div>
                    <div className="flex-1 bg-[url(/assets/images/bg/background_black.png)] p-5 bg-cover bg-no-repeat flex flex-col justify-center w-full  rounded-[20px]">
                        <h3 className="text-white header-large w-full">
                            Quantflow AI-powered Automation
                        </h3>
                        <div className="flex-1 flex items-center mt-8 justify-center gap-3 flex-col w-full">
                            <hr className="text-white w-full " />
                            <p className="heder-normal p-2 text-white flex w-full justify-between">
                                <span>AI-Driven Flexibility</span>
                                <ChevronDown
                                    size={20}
                                    className="text-white"
                                />
                            </p>
                            <hr className="text-white flex w-full " />
                            <p className="heder-normal p-2  text-white flex w-full justify-between">
                                <span>Advanced Document Populating</span>
                                <ChevronDown
                                    size={20}
                                    className="text-white"
                                />
                            </p>
                            <hr className="text-white flex w-full " />
                            <hr className="!text-white " />
                            <p className="heder-normal p-2  text-white flex w-full justify-between">
                                <span>Automated Learning</span>
                                <ChevronDown
                                    size={20}
                                    className="text-white"
                                />
                            </p>
                            <hr className="text-gray w-full" />
                            <p className="heder-normal p-2  text-white flex w-full justify-between">
                                <span>Scalable and Adaptive</span>
                                <ChevronDown
                                    size={20}
                                    className="text-white"
                                />
                            </p>
                            <hr className="text-white w-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
