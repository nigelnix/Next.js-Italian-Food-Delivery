import Image from "next/image"

export default function SectionHeader({title}) {
    return (
        <div className="flex items-center justify-center gap-4 my-8">
          <div className="">
            <Image
              src={"/tomatoes_left.png"}
              width={20}
              height={20}
              alt={"salad"}
            />
          </div>
          <div className="text-center4">
            <h2 className="text-secondary font-bold text-2xl">{title}</h2>
          </div>
          <div className="">
            <Image
              src={"/tomatoes_right.png"}
              width={20}
              height={20}
              alt={"lasagne"}
            />
          </div>
        </div>
    )
}