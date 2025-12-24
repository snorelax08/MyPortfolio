import * as React from "react";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface AnimatedSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale" | "blur";
  delay?: number;
  duration?: number;
}

const AnimatedSection = React.forwardRef<HTMLDivElement, AnimatedSectionProps>(
  ({ className, children, animation = "fade-up", delay = 0, duration = 700, ...props }, forwardedRef) => {
    const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

    const animations = {
      "fade-up": {
        hidden: "opacity-0 translate-y-12",
        visible: "opacity-100 translate-y-0",
      },
      "fade-left": {
        hidden: "opacity-0 translate-x-12",
        visible: "opacity-100 translate-x-0",
      },
      "fade-right": {
        hidden: "opacity-0 -translate-x-12",
        visible: "opacity-100 translate-x-0",
      },
      scale: {
        hidden: "opacity-0 scale-95",
        visible: "opacity-100 scale-100",
      },
      blur: {
        hidden: "opacity-0 blur-sm scale-95",
        visible: "opacity-100 blur-0 scale-100",
      },
    };

    const selectedAnimation = animations[animation];

    return (
      <div
        ref={(node) => {
          (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
          if (typeof forwardedRef === "function") {
            forwardedRef(node);
          } else if (forwardedRef) {
            forwardedRef.current = node;
          }
        }}
        className={cn(
          "transition-all ease-out",
          isVisible ? selectedAnimation.visible : selectedAnimation.hidden,
          className
        )}
        style={{
          transitionDuration: `${duration}ms`,
          transitionDelay: `${delay}ms`,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);
AnimatedSection.displayName = "AnimatedSection";

export { AnimatedSection };
