import { fetchStyles } from "@/app/orm";
import Style, { StyleType } from "./style";

async function StyleList() {
  const styles = await fetchStyles();
  return (
    <div className="px-4 lg:px-24 w-full">
      <div className="rounded-[1.25rem] bg-base-200 w-full flex flex-col items-center gap-7 lg:gap-14 px-6 lg:px-16 pt-10 lg:pt-16 pb-7 lg:pb-20">
        <span className="font-anton text-2xl lg:text-5xl">
          BROWSE BY dress STYLE
        </span>
        <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-5 ">
          {styles.map((it: StyleType) => (
            <Style key={it.id} style={it} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default StyleList;
