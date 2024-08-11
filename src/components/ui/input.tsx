import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
       className="px-[17px] pt-[11px] pb-[10px] w-[541px] h-[45px] top-[375px] left-[389px] gap-0 border-[1px] rounded-[10px] border-cinzaclaro"
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
