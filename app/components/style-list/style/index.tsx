import { TagType } from '@/app/models';
import { getStyleImage } from '@/app/orm';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  style: TagType;
};

async function Style({ style: { id, title } }: Props) {
  const imageUrl = await getStyleImage(id);

  if (!id) {
    return null;
  }

  return (
    <Link
      href={`/style/${id}`}
      className={`relative w-full h-52 lg:h-72 bg-base rounded-[1.25rem] px-6 py-[1.125rem] overflow-clip lg:col-span-3 lg:first:!col-span-2 lg:last:!col-span-2`}
    >
      <div className="absolute right-0 top-0 h-full w-52 lg:w-72">
        <Image src={imageUrl} alt={title} fill objectFit="cover" />
      </div>
      <span className="text-xl lg:text-4xl font-bold">{title}</span>
    </Link>
  );
}

export default Style;
