import { PropsWithChildren } from "react";

function Badge({ children }: PropsWithChildren) {
  return (
    <div className="p-2 w-1/3 aspect-video bg-base rounded-[0.3rem] shadow-md">
      <div className="relative w-full h-full">{children}</div>
    </div>
  );
}

export default Badge;
