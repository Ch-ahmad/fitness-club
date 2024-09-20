import * as React from "react";
import { ShieldAlert } from "lucide-react";
import { cn } from "@/lib/utils";
import { Label } from "@radix-ui/react-dropdown-menu";
export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  label?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && <Label className="text-primary">{label}</Label>}
        <textarea
          className={cn(
            "flex min-h-[80px] w-full rounded-md border border-primary/60 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
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
Textarea.displayName = "Textarea";

export { Textarea };
