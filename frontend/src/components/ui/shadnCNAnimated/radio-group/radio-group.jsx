import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

import { cn } from "../../../../lib/utils";
import PopCircle from "./animatedCircle";

const RadioGroup = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...rest}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItemAnimated = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...rest}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <PopCircle />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItemAnimated.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItemAnimated };
