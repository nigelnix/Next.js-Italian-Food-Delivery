import Image from "next/image";
import ArrowRight from "../icons/ArrowRight";
export default function Hero() {
  return (
    <section className="hero mb-6">
      <div className="py-12">
        <h1 className="text-4xl font-semibold leading-12"><span className="text-primary">Italian</span> <span className="text-secondary">food</span> is... <br /> The Best!</h1>
        <p className="my-6 text-gray-500 text-sm">
          Mouth-watering Italian food made with the best fresh locally sourced
          organic ingredients, a dream come true after a hard day at the office.
        </p>
      </div>

      <div className="relative">
        <Image
          src={"/pizza_lady.png"}
          fill
          style={{objectFit:"contain"}}
          alt={"lasagne"}
        />
      </div>

      <div className="flex gap-4 items-center text-sm">
        <button className="flex items-center gap-2 bg-primary hover:bg-secondary text-white px-4 py-2 rounded-full uppercase">Order now
        <ArrowRight />
        </button>
        <button className="flex gap-2 text-gray-500 hover:text-gray-700 font-semibold">Learn more
        <ArrowRight />
        </button>
      </div>
    </section>
  );
}
