import { Product } from "../types";
import { Rating } from "./Rating";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-square overflow-hidden bg-secondary">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          onClick={() => navigate(`/product/${product.id}`)}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 space-y-3">
        <h3 className="line-clamp-2 min-h-[3em]">{product.name}</h3>
        <Rating rating={product.rating} size={14} />
        <p className="text-muted-foreground text-sm line-clamp-2">
          {product.description}
        </p>
        {/* <div className="flex items-center justify-between pt-2">
          <span className="text-primary">₹{product.price.toFixed(2)}</span>
          <Button
            size="sm"
            variant="outline"
            onClick={() => navigate(`/product/${product.id}`)}
            className="border-primary text-primary hover:bg-primary hover:text-white"
          >
            More Info
          </Button>
        </div> */}
        <div className="flex items-center justify-between mt-2">
          <span className="text-lg font-semibold text-primary">
            ₹{product.price.toFixed(2)}
          </span>

          <Button
            size="sm"
            variant="ghost"
            onClick={() => navigate(`/product/${product.id}`)}
            className="text-primary hover:bg-primary/10 px-3 py-1 rounded-full"
          >
            View
          </Button>
        </div>
      </div>
    </div>
  );
}
