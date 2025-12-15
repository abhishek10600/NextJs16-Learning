import { LucideIcon } from "lucide-react";
import React from "react";

const EmptyState = ({
  message,
  icon: Icon,
}: {
  message: String;
  icon: LucideIcon;
}) => {
  return (
    <div className="empty-state border py-12">
      {Icon && (
        <Icon className="size-12 text-muted-foreground/50 mx-auto mb-4" />
      )}
      <p className="sm:text-lg text-muted-foreground text-center">{message}</p>
    </div>
  );
};

export default EmptyState;
