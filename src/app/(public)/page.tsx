import { ICONS } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const hero_items = [
  {
    index: "01",
    title: "Human-in-the-loop",
    description: "Quantflow’s platform is designed to augment human employees. Its actions are easily traceable, and it automatically improves with each interaction."
  },
  {
    index: "02",
    title: "State-of-the-art",
    description: "Quantflow leverages the newest generative AI models, ensuring cutting-edge performance for your business needs."
  },
  {
    index: "03",
    title: "Pay-as-you-go",
    description: "With Quantflow, you only pay for what you use, ensuring that every franc spent creates value for your business."
  }
];

export default function Home() {
  return (
    <div className="w-full">
      <div className="max-w-[1120px] mx-auto w-full p-4 pb-20 hero-bg">
        <div className="flex justify-center flex-col items-center pt-[60px]">
          <h1 className="text-grey-800 hero-large w-full md:max-w-[732px] text-center ">
            Super power for Admin Teams
          </h1>
          < p className="text-grey-800 header-normal  w-full max-w-[] sm:max-w-[544px] text-center mt-5 ">
            Quantflow delivers enterprise-grade AI to automate your most tedious tasks.
          </p>
          <div className="flex items-center gap-4 mt-7">
            <Button>Get started</Button>
            <Button variant={"outline"}>Talk to Sales</Button>
          </div>
        </div>

        <div className="my-5 md:my-20">
          <Image src="/assets/images/video.png" alt="Hero" width={1120} height={600} className="w-full h-auto object-cover" />
        </div>

        <div className="flex justify-between gap-5 mt-4 flex-col gap-y-8 sm:flex-row">
          {
            hero_items.map((item) => (
              <div key={item.index} className="flex items-start flex-1 flex-col  gap-4">
                <span className="text-grey-500 body-small">
                  {item.index}
                </span>
                <h3 className="text-grey-800 header-large">
                  {item.title}
                </h3>
                <p className="text-grey-600 body-normal w-full mt-1">
                  {item.description}
                </p>
              </div>
            ))
          }
        </div>
      </div>

      <div className="p-4 bg-quantflow-500">

        <div className="max-w-[1120px] mx-auto py-16 lg:py-24">
          <h2 className="hero-medium text-white">Simplify with Ai</h2>
          <p className="body-large text-white max-w-[544px] mt-5">
            Quantflow scales to automate administrative tasks, integrating smoothly with your existing software and workflows.
          </p>

          <div className="bg-white mt-20 p-[32px] sm:h-[400px] gap-y-6 flex-col sm:flex-row pr-0 pb-0 overflow-hidden rounded-[20px] flex">
            <div className="w-[300px]">
              <h3 className="text-grey-800 header-normal">Document Automation</h3>
              <p className="body-normal mt-4 text-grey-600">
                Automate the populating and processing of documents and web-forms, streamlining your paperwork effortlessly.
              </p>
              <Button variant={"outline"} className="mt-5 h-[48px] gap-2">Learn more {ICONS.arrowRightUp}</Button>
            </div>
            <div className="flex-1 self-end h-[360px]">
              <Image src="/assets/images/document-automation.png" alt="Hero" width={600} height={400} className="w-full h-[300px] sm:h-full max-sm:object-left object-top object-cover" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
