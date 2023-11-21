import Image from "next/image";
import MenuItem from "../menu/MenuItem";

export default function HomeMenu() {
  return (
    <>
      <section className="mt-6">
        <div className="flex items-center justify-center gap-8 mb-8">
          <div className="">
            <Image
              src={"/tomatoes_left.png"}
              width={35}
              height={35}
              alt={"salad"}
            />
          </div>
          <div className="text-center4">
            <h2 className="text-secondary font-bold text-4xl">Menu</h2>
          </div>
          <div className="">
            <Image
              src={"/tomatoes_right.png"}
              width={35}
              height={35}
              alt={"lasagne"}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 relative">
          <MenuItem /> 
          <MenuItem /> 
          <MenuItem /> 
          <MenuItem /> 
          <MenuItem /> 
          <MenuItem /> 
        </div>
      </section>
    </>
  );
}
