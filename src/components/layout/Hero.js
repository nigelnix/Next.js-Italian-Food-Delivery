import Image from "next/image";
import ArrowRight from "../icons/ArrowRight";
export default function Hero() {
  return (
    <>
    <section className="hero mb-6">
      <div className="mb-8">
        <h1 className="text-5xl font-semibold leading-12 mb-4"><span className="text-primary">Italian</span> <span className="text-secondary">food</span> is...The Best!</h1>
        <p className="text-gray-500 text-sm">
          Mouth-watering Italian food made with the best fresh locally sourced
          organic ingredients, a dream come true after a hard day at the office.
        </p>
      </div>

      <div className="relative">
        <Image
          src={"/pizza_lady.png"}
          fill
          style={{objectFit:"contain"}}
          alt={"pizza_lady_clip_art"}
          />
      </div>

      <div className="flex gap-4 items-center text-sm">
        <button className="flex justify-center items-center gap-2 bg-primary hover:bg-secondary text-white px-4 py-2 rounded-full uppercase">Order now
        <ArrowRight />
        </button>
        <button className="border-0 flex gap-2 text-gray-500 hover:text-gray-700 font-semibold items-center justify-center">Learn more
        <ArrowRight />
        </button>
      </div>
    </section>
      <hr />
      </>
  );
}
