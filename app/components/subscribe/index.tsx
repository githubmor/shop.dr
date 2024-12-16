import Button from "../button";
import Email from "./email-input";

function Subscribe() {
  return (
    <div className="w-full px-6 lg:px-24 relative ">
      <div className="w-full absolute top-0 inset-x-0 h-1/2 -z-20 content-['']" />
      <div className="w-full absolute bg-base-200 bottom-0 inset-x-0 h-1/2 -z-20 content-['']" />
      <div
        className="w-full flex flex-col lg:flex lg:flex-row lg:justify-between gap-16 bg-neutral
       rounded-[1.25rem] z-10 px-6 lg:px-16 pt-8 lg:!py-9 pb-7 "
      >
        <span className="lg:w-1/3 font-anton leading-9 !text-[2rem] lg:text-[2.5rem] text-base w-full">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </span>
        <div className="flex flex-col lg:w-1/3 gap-3">
          <Email />
          <Button
            text="Subscribe to Newsletter"
            className="bg-base text-sm py-3 font-medium"
          />
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
