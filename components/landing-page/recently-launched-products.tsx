import React from "react";
import SectionHeader from "../common/section-header";
import { CalendarIcon, RocketIcon } from "lucide-react";
import ProductCard from "../common/products/product-card";
import EmptyState from "../common/empty-state";

const RecentlyLaunchedProducts = () => {
  const recentlyLaunchedProducts = [];
  return (
    <div className="py-20">
      <div className="wrapper space-y-12">
        <SectionHeader
          title="Recently Launched"
          icon={RocketIcon}
          description="Disconver the latest products from our community."
        />
        {recentlyLaunchedProducts.length > 0 ? (
          <div className="grid-wrapper">
            {recentlyLaunchedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <EmptyState
            message="No products launched in the last week. Check back soon for new launches."
            icon={CalendarIcon}
          />
        )}
      </div>
    </div>
  );
};

export default RecentlyLaunchedProducts;
