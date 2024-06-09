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
          < p className="text-grey-800 header-normal  w-full md:max-w-[544px] text-center mt-5 ">
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

        <div className="flex justify-between gap-5 mt-4">
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

      <div className="p-4">
        
      </div>
    </div>
  );
};
