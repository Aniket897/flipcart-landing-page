import {
  Bell,
  DotsThreeVertical,
  DownloadSimple,
  Headset,
  TrendUp,
} from "@phosphor-icons/react";

const HelpLinks = () => {
  return (
    <div className="w-[70px] flex items-center justify-center group/helpLinks relative z-20">
      <button className="border rounded-md p-2 border-transparent group-hover/helpLinks:border-gray-200">
        <DotsThreeVertical weight="light" size={25} />
      </button>
      <div className="hidden group-hover/helpLinks:block absolute top-10 right-0 bg-white shadow-md w-[300px] rounded-md border">
        <div>
          <div className="flex px-3 py-3 items-center gap-x-2 cursor-pointer hover:bg-neutral-200">
            <Bell weight="light" size={20} />
            <p>Notification Preferences</p>
          </div>
          <div className="flex px-3 py-3 items-center gap-x-2 cursor-pointer hover:bg-neutral-200">
            <Headset weight="light" size={20} />
            <p>24 X 4 Customer care</p>
          </div>
          <div className="flex px-3 py-3 items-center gap-x-2 cursor-pointer hover:bg-neutral-200">
            <TrendUp weight="light" size={20} />
            <p>Advertise</p>
          </div>
          <div className="flex px-3 py-3 items-center gap-x-2 pb-5 cursor-pointer hover:bg-neutral-200">
            <DownloadSimple weight="light" size={20} />
            <p>Download</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpLinks;
