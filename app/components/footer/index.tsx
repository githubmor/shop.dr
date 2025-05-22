import Image from "next/image";
import Badge from "./badge";
import Facebook from "./facebook";
import Github from "./github";
import Instagram from "./instagram";
import LinkColumn from "./link-col";
import Twiter from "./twiter";

function Footer() {
  return (
    <div className="w-full flex flex-col gap-6 bg-base-200 px-6 lg:px-24 pt-[1.875rem] pb-20">
      <div className=" flex flex-col lg:flex lg:flex-row gap-4 lg:gap-10 lg:justify-between ">
        <div className="flex flex-col gap-6 lg:gap-9 lg:w-1/4 ">
          <div className="flex flex-col gap-3 lg:gap-6 ">
            <span className="text-[1.8rem] lg:text-[2.1rem] font-anton">SHOP.DR</span>
            <span className="text-sm text-neutral-600">
              We have clothes that suits your style and which you’re proud to wear. From women to men.
            </span>
          </div>
          <div className="flex gap-3 items-center ">
            <Twiter />
            <Facebook />
            <Instagram />
            <Github />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 lg:gap-12 justify-between lg:grid lg:grid-cols-4  ">
          <LinkColumn title="COMPANY" links={['About', 'Features', 'Works', 'Career']} />
          <LinkColumn
            title="HELP"
            links={['Customer Support', 'Delivery Details', 'Terms & Conditions', 'Privacy Policy']}
          />
          <LinkColumn title="FAQ" links={['Account', 'Manage Deliveries', 'Orders', 'Payment']} />
          <LinkColumn
            title="RESOURCES"
            links={['Free eBook', 'Development Tutorial', 'How to - Blog', 'Youtube Playlist']}
          />
        </div>
      </div>
      <hr />
      <div className="w-full flex flex-col lg:flex lg:flex-row lg:justify-between gap-[1.125rem] items-center  pt-4">
        <span className=" text-sm text-neutral-600">Shop.Dr © 2020-2025, All Rights Reserved</span>
        <div className="w-2/3 md:w-1/3 lg:w-1/3 flex gap-3">
          <Badge>
            <Image src="/visa.svg" fill alt="visa" />
          </Badge>
          <Badge>
            <Image src="/master-card.svg" fill alt="master-card" />
          </Badge>
          <Badge>
            <Image src="/paypal.svg" fill alt="visa" />
          </Badge>
          <Badge>
            <Image src="/epay.svg" fill alt="visa" />
          </Badge>
          <Badge>
            <Image src="/gpay.svg" fill alt="visa" />
          </Badge>
        </div>
      </div>
    </div>
  );
}

export default Footer;
