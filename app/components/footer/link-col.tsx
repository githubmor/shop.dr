import Link from "next/link";

type Props = {
  title: string;
  links: string[];
};

function LinkColumn({ links, title }: Props) {
  return (
    <div className="flex flex-col gap-4 text-sm ">
      <span className="font-medium">{title}</span>
      <div className="flex flex-col gap-3 font-normal text-neutral-600">
        {links.map((it) => (
          <Link href="#" key={it}>
            {it}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default LinkColumn;
