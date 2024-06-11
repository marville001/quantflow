import { ICONS } from "@/assets/icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const hero_items = [
    {
        index: "01",
        title: "Human-in-the-loop",
        description:
            "Quantflow’s platform is designed to augment human employees. Its actions are easily traceable, and it automatically improves with each interaction.",
    },
    {
        index: "02",
        title: "State-of-the-art",
        description:
            "Quantflow leverages the newest generative AI models, ensuring cutting-edge performance for your business needs.",
    },
    {
        index: "03",
        title: "Pay-as-you-go",
        description:
            "With Quantflow, you only pay for what you use, ensuring that every franc spent creates value for your business.",
    },
];

export default function Home() {
    return (
        <div className="w-full">
            <div className="max-w-[1120px] mx-auto w-full p-4 pb-20 hero-bg">
                <div className="flex justify-center flex-col items-center pt-[60px]">
                    <h1 className="text-grey-800 hero-large w-full md:max-w-[732px] text-center ">
                        Superpowers for Admin Teams
                    </h1>
                    <p className="text-grey-800 header-normal  w-full max-w-[] sm:max-w-[544px] text-center mt-5 ">
                        Quantflow delivers enterprise-grade AI to automate your
                        most tedious tasks.
                    </p>
                    <div className="flex items-center gap-4 mt-7">
                        <Button>Get started</Button>
                        <Button variant={"outline"}>Talk to Sales</Button>
                    </div>
                </div>

                <div className="my-5 md:my-20 rounded-[20px] video-shadow p-[24px] overflow-hidden">
                    <video
                        src="/assets/images/home/video_hero.mov"
                        width={1120}
                        autoPlay
                        loop
                        muted
                        height={600}
                        className="w-full h-auto bg-red-400 video-shadow rounded-[20px]"
                    />
                </div>

                <div className="flex justify-between gap-5 mt-4 flex-col gap-y-8 sm:flex-row">
                    {hero_items.map((item) => (
                        <div
                            key={item.index}
                            className="flex items-start flex-1 flex-col  gap-4"
                        >
                            <span className="text-grey-500 font-menlo body-small">
                                {item.index}
                            </span>
                            <h3 className="text-grey-800 header-large">
                                {item.title}
                            </h3>
                            <p className="text-grey-600 body-normal w-full mt-1">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="p-4 bg-quantflow-500 bg-[url(/assets/images/bg/background_purple.png)] bg-cover bg-no-repeat">
                <div className="max-w-[1120px] mx-auto py-16 lg:py-24">
                    <h2 className="hero-medium text-white">Simplify with Ai</h2>
                    <p className="body-large text-white max-w-[544px] mt-5">
                        Quantflow scales to automate administrative tasks,
                        integrating smoothly with your existing software and
                        workflows.
                    </p>

                    <div className="bg-white mt-20 p-[32px] sm:h-[400px] gap-y-6 flex-col sm:flex-row pr-0 pb-0 overflow-hidden rounded-[20px] flex">
                        <div className="w-[300px]">
                            <h3 className="text-grey-800 header-normal">
                                Document Automation
                            </h3>
                            <p className="body-normal mt-4 text-grey-600">
                                Automate the populating and processing of
                                documents and web-forms, streamlining your
                                paperwork effortlessly.
                            </p>
                            <Link
                                href={"/document-automation"}
                                className={cn(buttonVariants({ variant: "outline" }), "mt-5 h-[48px] gap-2")}
                            >
                                Learn more {ICONS.arrowRightUp}
                            </Link>
                        </div>
                        <div className="md:flex-1 self-end h-[100px] md:h-[360px] w-full">
                            <Image
                                src="/assets/images/home/document_automation.png"
                                alt="Document automation"
                                width={600}
                                height={400}
                                className="w-full lg:w-[1000px] h-[300px] sm:h-full object-left-top object-cover"
                            />
                        </div>
                    </div>

                    {/*  */}
                    <div className="grid grid-cols-1 md:grid-cols-3 mt-6 gap-6 gap-x-0 md:gap-x-6">
                        <div className="col-span-2 space-y-6">
                            <div className="bg-white col-span-2 p-[32px] pb-0 sm:h-[450px] flex-col overflow-hidden rounded-[20px] flex">
                                <h3 className="text-grey-800 header-normal">
                                    Email Automation
                                </h3>
                                <p className="body-normal mt-4 text-grey-600 max-w-[90%]">
                                    Automate email responses and follow-up
                                    actions, integrating seamlessly with your
                                    software for efficient communication.
                                </p>

                                <Link
                                    href={"/email-automation"}
                                    className={cn(buttonVariants({ variant: "outline" }), "mt-5 h-[48px] w-max gap-2")}
                                >
                                    Learn more {ICONS.arrowRightUp}
                                </Link>

                                <div className="mt-6">
                                    <Image
                                        src="/assets/images/home/mail_automation.png"
                                        alt="Email automation"
                                        width={600}
                                        height={400}
                                        className="w-full h-auto"
                                    />
                                </div>
                            </div>
                            <div className="bg-white col-span-2 p-[32px] pb-0 sm:h-[450px] flex-col overflow-hidden rounded-[20px] flex">
                                <h3 className="text-grey-800 header-normal">
                                    Knowledge Hub
                                </h3>
                                <p className="body-normal mt-4 text-grey-600 max-w-[90%]">
                                    Leverage enterprise search and an internal chatbot to quickly find and retrieve information across your files.
                                </p>
                                <Button
                                    variant={"outline"}
                                    className=" h-[48px] mt-3 w-max gap-2"
                                >
                                    Learn more {ICONS.arrowRightUp}
                                </Button>

                                <div className="mt-6">
                                    <Image
                                        src="/assets/images/home/knowledge_hub.png"
                                        alt="Email automation"
                                        width={600}
                                        height={400}
                                        className="w-full h-auto"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white col-span-1 w-full max-h-[925px] p-[32px] pb-0 flex-col overflow-hidden rounded-[20px] flex">
                            <h3 className="text-grey-800 header-normal">
                                Insights Hub
                            </h3>
                            <p className="body-normal mt-4 text-grey-600 max-w-[90%]">
                                Transform unstructured data into structured
                                insights, enhancing your data analysis and
                                decision-making processes.
                            </p>
                            <Button
                                variant={"outline"}
                                className=" h-[48px] mt-3 w-max gap-2"
                            >
                                Learn more {ICONS.arrowRightUp}
                            </Button>

                            <div className="mt-6 flex-1 max-md:max-h-[250px] ">
                                <Image
                                    src="/assets/images/insight-hub.png"
                                    alt="Insight Hub"
                                    width={600}
                                    height={400}
                                    className="w-full h-full object-top object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
