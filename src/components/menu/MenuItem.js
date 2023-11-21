import Image from "next/image"

export default function MenuItem() {
    return (
        <div className="bg-gray-100 p-4 rounded-xl text-center hover:bg-white hover:shadow-lg hover:shadow-black/50 transition-all">
            <Image
              src="/black_olive_pizza.png"
              height={200}
              width={200}
              alt="pizza"
              className="m-auto"
            />
            <h4 className="font-semibold my-3 text-xl">Black Olive Pizza</h4>
            <p className="text-gray-500 text-sm">
              Luxurious mouth-watering with authentic olives flown in from
              Italy.
            </p>
            <button className="bg-primary text-white rounded-full px-8 py-2 mt-4">
              Add to cart $12
            </button>
          </div>
    )
}