import Image from "next/image";
import Star from "./Star";
import Link from "next/link";

function ProductCard({
  product,
}: {
  product: {
    name: string;
    price: number;
    discount?: {
      discount: number;
      discountPrice: number;
    };
    image: string;
    rating: number;
  }
}) {
  return (
    <div className="flex flex-col items-start w-72">
      <Link href={`/productDetail/${product.name}`}>
      {/* Image Section */}
      <div className="items-center justify-center rounded-xl bg-secondary p-1 w-full h-72">
        <Image
          src={product.image}
          alt="Decorative Vector"
          width={194}
          height={31.2}
          objectFit="contain"
          quality={100}
          className="w-full h-full"
        />
      </div>

      {/* Product Name Section */}
      <div
        className="mt-2 text-xl font-semibold text-black whitespace-normal break-words overflow-hidden"
        style={{ maxHeight: "3rem" }} // Limit to two lines
      >
        {product.name}
      </div>
      </Link>
      {/* Rating Section */}
      <div className="flex items-center gap-3 mt-2">
        <Star star={product.rating} />
        <div>
            <span className="text-black text-base">{product.rating}/</span>
        <span className="text-gray-500 text-base">5</span>
        </div>
        
      </div>

      {/* Price Section */}
      {
        product.discount ?
        <>
        <div className="flex gap-4"> 
        <span className="text-2xl font-bold text-black mt-1">${product.discount.discountPrice}</span>
        <span className="text-2xl font-bold text-gray-400 line-through  mt-1">${product.price}</span>
        <div className="bg-red-100 w-16 h-8 mt-1 text-red-600 text-sm rounded-full flex items-center justify-center">-{product.discount.discount}%</div>
        </div>
        </>:
      <p className="text-2xl font-bold text-black mt-1">${product.price}</p>

      }
    </div>
  );
}

export default ProductCard;
