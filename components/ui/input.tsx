import * as React from "react";
import { ShieldAlert } from "lucide-react";
import { cn } from "@/lib/utils";
import { Label } from "@radix-ui/react-dropdown-menu";
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, label, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && <Label className="text-primary">{label}</Label>}
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-primary/60 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <span className="text-red-400 text-[12px] inline-flex items-center pt-[-8px]">
            <ShieldAlert className="size-4 mr-[5px]" />
            {error}
          </span>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
