import { useState } from "react";
import { ProductCard } from "../components/ProductCard";
import { products, categories } from "../data/products";
import { Button } from "../components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "../components/ui/sheet";
import { Slider } from "../components/ui/slider";
import { Checkbox } from "../components/ui/checkbox";
import { Label } from "../components/ui/label";
import { SlidersHorizontal } from "lucide-react";

export function ShopPage() {
  const [priceRange, setPriceRange] = useState([0, 300]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [minRating, setMinRating] = useState(0);
  const [filterOpen, setFilterOpen] = useState(false);

  const filteredProducts = products.filter((product) => {
    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);
    const matchesRating = product.rating >= minRating;
    return matchesPrice && matchesCategory && matchesRating;
  });

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Price Range */}
      <div>
        <h4 className="mb-4">Price Range</h4>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          max={300}
          step={1}
          className="mb-2"
        />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>₹{priceRange[0]}</span>
          <span>₹{priceRange[1]}</span>
        </div>
      </div>

      {/* Categories */}
      <div>
        <h4 className="mb-4">Categories</h4>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox
                id={category.id}
                checked={selectedCategories.includes(category.name)}
                //checked was changed to [: boolean | "indeterminate"  ] as in onCheckChnage is a boolean porperty !
                onCheckedChange={(checked: boolean | "indeterminate") => {
                  if (checked) {
                    setSelectedCategories([
                      ...selectedCategories,
                      category.name,
                    ]);
                  } else {
                    setSelectedCategories(
                      selectedCategories.filter((c) => c !== category.name)
                    );
                  }
                }}
              />
              <Label htmlFor={category.id} className="cursor-pointer">
                {category.name}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Rating */}
      <div>
        <h4 className="mb-4">Minimum Rating</h4>
        <div className="space-y-3">
          {[4, 3, 2, 1, 0].map((rating) => (
            <div key={rating} className="flex items-center space-x-2">
              <Checkbox
                id={`rating-${rating}`}
                checked={minRating === rating}
                onCheckedChange={(checked: boolean | "indeterminate") => {
                  if (checked) {
                    setMinRating(rating);
                  }
                }}
              />
              <Label htmlFor={`rating-${rating}`} className="cursor-pointer">
                {rating === 0 ? "All Ratings" : `${rating}+ Stars`}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Reset Button */}
      <Button
        variant="outline"
        className="w-full"
        onClick={() => {
          setPriceRange([0, 300]);
          setSelectedCategories([]);
          setMinRating(0);
        }}
      >
        Reset Filters
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="mb-2">Shop All Products</h1>
          <p className="text-muted-foreground">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="bg-white rounded-xl p-6 shadow-sm sticky top-24">
              <h3 className="mb-6">Filters</h3>
              <FilterContent />
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Mobile Filter Button */}
            <div className="md:hidden mb-6">
              <Sheet open={filterOpen} onOpenChange={setFilterOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" className="w-full">
                    <SlidersHorizontal className="w-4 h-4 mr-2" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="bottom"
                  className="h-[85vh] rounded-t-2xl px-0 bg-secondary"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between px-5 py-4 border-b bg-secondary sticky top-0 z-10">
                    <h2 className="text-lg font-semibold">Filters</h2>
                    <button
                      onClick={() => setFilterOpen(false)}
                      className="text-xl leading-none text-muted-foreground"
                    ></button>
                  </div>

                  {/* Content */}
                  <div className="px-5 py-5 overflow-y-auto h-[calc(85vh-140px)]">
                    <div className="bg-background rounded-xl p-4 shadow-sm">
                      <FilterContent />
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="px-5 py-4 border-t bg-secondary">
                    <Button
                      variant="outline"
                      className="w-full rounded-xl"
                      onClick={() => setFilterOpen(false)}
                    >
                      Apply Filters
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Load More Button */}
            {/* {filteredProducts.length >= 9 && (
              <div className="mt-12 text-center">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-white rounded-full px-12"
                >
                  Load More
                </Button>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}
