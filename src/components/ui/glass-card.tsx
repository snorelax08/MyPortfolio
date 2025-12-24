import * as React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "subtle" | "strong";
  hover?: boolean;
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant = "default", hover = true, ...props }, ref) => {
    const variants = {
      default: [
        // Base glass layer with improved opacity for readability
        "bg-gradient-to-br from-card/70 via-card/60 to-card/50",
        "backdrop-blur-2xl",
        "border border-foreground/[0.12]",
        // Enhanced depth shadows
        "shadow-[0_8px_32px_rgba(0,0,0,0.15),0_2px_8px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.15)]",
        // Top highlight (liquid glass reflection)
        "before:absolute before:inset-0 before:rounded-[inherit] before:bg-gradient-to-b before:from-foreground/[0.08] before:via-foreground/[0.02] before:to-transparent before:pointer-events-none",
        // Bottom edge glow
        "after:absolute after:inset-0 after:rounded-[inherit] after:bg-gradient-to-t after:from-foreground/[0.03] after:to-transparent after:pointer-events-none",
      ].join(" "),
      subtle: [
        "bg-gradient-to-br from-card/55 via-card/45 to-card/35",
        "backdrop-blur-xl",
        "border border-foreground/[0.1]",
        "shadow-[0_4px_24px_rgba(0,0,0,0.1),0_1px_4px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.12)]",
        "before:absolute before:inset-0 before:rounded-[inherit] before:bg-gradient-to-b before:from-foreground/[0.06] before:via-transparent before:to-transparent before:pointer-events-none",
        "after:absolute after:inset-0 after:rounded-[inherit] after:bg-gradient-to-t after:from-foreground/[0.02] after:to-transparent after:pointer-events-none",
      ].join(" "),
      strong: [
        "bg-gradient-to-br from-card/80 via-card/70 to-card/60",
        "backdrop-blur-3xl",
        "border border-foreground/[0.15]",
        "shadow-[0_20px_60px_rgba(0,0,0,0.2),0_8px_24px_rgba(0,0,0,0.15),0_2px_6px_rgba(0,0,0,0.1),inset_0_2px_2px_rgba(255,255,255,0.2),inset_0_-1px_1px_rgba(0,0,0,0.05)]",
        "before:absolute before:inset-0 before:rounded-[inherit] before:bg-gradient-to-b before:from-foreground/[0.12] before:via-foreground/[0.03] before:to-transparent before:pointer-events-none",
        "after:absolute after:inset-0 after:rounded-[inherit] after:bg-gradient-to-t after:from-foreground/[0.04] after:via-transparent after:to-transparent after:pointer-events-none",
      ].join(" "),
    };

    const hoverClass = hover
      ? [
          "hover:bg-gradient-to-br hover:from-card/75 hover:via-card/65 hover:to-card/55",
          "hover:border-foreground/[0.18]",
          "hover:shadow-[0_16px_48px_rgba(0,0,0,0.2),0_6px_20px_rgba(0,0,0,0.14),0_2px_8px_rgba(0,0,0,0.1),inset_0_2px_2px_rgba(255,255,255,0.2)]",
          "hover:before:from-foreground/[0.12]",
          "hover:-translate-y-1",
          "transition-all duration-500 ease-out",
        ].join(" ")
      : "";

    return (
      <div
        ref={ref}
        className={cn(
          "relative rounded-3xl overflow-hidden",
          variants[variant],
          hoverClass,
          className
        )}
        {...props}
      />
    );
  }
);
GlassCard.displayName = "GlassCard";

export { GlassCard };
