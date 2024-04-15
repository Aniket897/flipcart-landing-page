import HelpLinks from "./HelpLinks";
import LoginButton from "./LoginButton";
import {
  MagnifyingGlass,
  ShoppingCart,
  Storefront,
} from "@phosphor-icons/react";

const Navbar = () => {
  return (
    <div className="flex items-center gap-7 py-4 px-7 bg-white sticky top-0 left-0 z-10">
      <img
        className="-ml-8"
        src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
        alt="logo image"
      />
      <div className="flex items-center relative flex-1">
        <MagnifyingGlass
          size={20}
          color="gray"
          className="absolute left-3 text-xl font-bold"
        />
        <input
          className="bg-[#F0F5FF] p-2 pl-10 w-full"
          type="text"
          placeholder="Search for Products, Brands and More"
        />
      </div>
      <div className="flex items-center gap-x-6">
        <LoginButton />
        <button className="flex items-center justify-center gap-2">
          <ShoppingCart weight="light" size={25} />
          Cart
        </button>
        <button className="flex items-center justify-center gap-2">
          <Storefront weight="light" size={25} />
          Become a Seller
        </button>
        <HelpLinks />
      </div>
    </div>
  );
};

export default Navbar;
