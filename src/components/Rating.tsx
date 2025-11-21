import { Star } from "lucide-react";

interface RatingProps {
  rating: number;
  maxRating?: number;
  size?: number;
}

export function Rating({ rating, maxRating = 5, size = 16 }: RatingProps) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: maxRating }).map((_, index) => {
        const fillPercentage = Math.min(Math.max(rating - index, 0), 1);
        return (
          <div key={index} className="relative" style={{ width: size, height: size }}>
            <Star
              size={size}
              className="absolute text-gray-300"
              fill="currentColor"
            />
            <div
              className="absolute overflow-hidden"
              style={{ width: `${fillPercentage * 100}%` }}
            >
              <Star
                size={size}
                className="text-[#e8b4bc]"
                fill="currentColor"
              />
            </div>
          </div>
        );
      })}
      <span className="text-sm text-muted-foreground ml-1">({rating.toFixed(1)})</span>
    </div>
  );
}
