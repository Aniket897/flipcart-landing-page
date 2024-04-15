import { CaretDown, CaretRight } from "@phosphor-icons/react";
import { categories } from "../data";

const CategoryBanner = () => {
  return (
    <div className="flex items-center justify-center gap-x-2 w-[97vw] mx-auto bg-white p-2 mt-[10px]">
      {categories.map((item1, index) =>
        !item1.nested ? (
          <div
            key={index}
            className="min-w-[140px] flex flex-col items-center gap-2 hover:text-blue-600 cursor-pointer"
          >
            <img src={item1.img} alt="" />
            <p>{item1.name}</p>
          </div>
        ) : (
          <div
            key={index}
            className="min-w-[140px] flex flex-col items-center gap-2 group/category relative"
          >
            <img src={item1.img} alt="" />
            <div className="cursor-pointer flex items-center justify-center gap-x-2 group-hover/category:text-blue-600">
              <p>{item1.name}</p>
              <CaretDown
                className="group-hover/category:rotate-180 duration-150"
                weight="light"
                size={20}
              />
            </div>
            {/* hidden part */}
            <div className="hidden group-hover/category:block absolute top-[100%] right-[50%] bg-white shadow-md w-[250px] rounded-md border z-20 text-[14px]">
              {item1.children.map((item, index) =>
                !item.nested ? (
                  <div
                    className="group/categoryItem px-5 py-3 cursor-pointer hover:bg-neutral-200 flex"
                    key={index}
                  >
                    <p className="capitalize flex-1">{item.name}</p>
                  </div>
                ) : (
                  <div
                    className="group/categoryItem px-5 py-3 cursor-pointer hover:bg-neutral-200 flex"
                    key={index}
                  >
                    <p className="capitalize flex-1">{item.name}</p>
                    <CaretRight
                      className="hidden group-hover/categoryItem:block duration-150"
                      weight="light"
                      size={20}
                    />
                    <div className="hidden group-hover/categoryItem:block absolute top-0 left-[100%] bg-white shadow-md w-[300px] rounded-md border">
                      <p className="p-3 px-4 border-b">More in {item.name}</p>
                      {Array.isArray(item.children) &&
                        item.children.map((type, index) => (
                          <div
                            className="p-3 px-4 hover:bg-neutral-200 capitalize"
                            key={index}
                          >
                            {type.name}
                          </div>
                        ))}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default CategoryBanner;
