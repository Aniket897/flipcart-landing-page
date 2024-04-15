import {
  CaretDown,
  Heart,
  TreasureChest,
  UserCircle,
} from "@phosphor-icons/react";

const LoginButton = () => {
  return (
    <div className="group/loginButton relative z-20">
      <button className="group-hover/loginButton:bg-blue-500 group-hover/loginButton:text-white rounded-md h-[40px] w-fit px-4 flex items-center justify-center gap-x-2">
        <UserCircle weight="light" size={25} />
        Login
        <CaretDown className="group-hover/loginButton:rotate-180 duration-200" weight="light" size={15} />
      </button>
      <div className="hidden group-hover/loginButton:block absolute top-10 -left-8 bg-white shadow-md w-[300px] rounded-md border">
        <div className="flex items-center justify-between py-4 px-4 border-b">
          <p>New Customer ?</p>
          <p className="text-blue-600">Sign up</p>
        </div>
        <div>
          <div className="flex px-3 py-3 items-center gap-x-2 hover:bg-neutral-200 cursor-pointer">
            <UserCircle weight="light" size={20} />
            <p>My Profile</p>
          </div>
          <div className="flex px-3 py-3 items-center gap-x-2 hover:bg-neutral-200 cursor-pointer">
            <TreasureChest weight="light" size={20} />
            <p>Rewards</p>
          </div>
          <div className="flex px-3 py-3 items-center gap-x-2 hover:bg-neutral-200 cursor-pointer">
            <Heart weight="light" size={20} />
            <p>Wishlist</p>
          </div>
          <div className="flex px-3 py-3 items-center gap-x-2 pb-5 hover:bg-neutral-200 cursor-pointer">
            <UserCircle weight="light" size={20} />
            <p>My Profile</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginButton;
