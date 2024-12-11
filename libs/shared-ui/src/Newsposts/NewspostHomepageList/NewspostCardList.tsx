import { NewspostEntity } from '@sharknado/cms-api';
import Link from 'next/link';

interface NewspostHomepageListProps {
  data: NewspostEntity[];
  detailPath: string;
}

function ThumbnailUrl(post: NewspostEntity): string {
  // todo check for a 'small' image and use it if there is one, default image if there isn't
  // todo externalise the url generation of an UploadFileEntity
  return (
    process.env.NEXT_PUBLIC_IMAGE_BASE_URL +
    post.attributes.headImage.data.attributes.formats['small'].url
  );
}

// TODO contrasting colour for category chip
// TODO configurable icon for category chip
// TODO Updated date/time formatting

const NewspostCardList = ({
  data,
  detailPath,
}: NewspostHomepageListProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {data.map((newspost, index) => (
        <div key={`news-${index}`} className="">
          <Link href={`${detailPath}/${newspost.id}`} className="group">
          <div className="h-36 rounded-t-xl overflow-hidden mx-auto relative">
            <img
              className="object-cover w-full h-full motion-safe:group-hover:scale-125 transition-all duration-500"
              src={ThumbnailUrl(newspost)}
              alt={
                newspost.attributes.headImage.data.attributes.alternativeText
              }
            />
            <div className="absolute left-3 top-3 rounded-3xl bg-amber-300"
              // inline style 👇 takes precedence. Use bg-amber-300 ☝️ as a fallback.
              style={{backgroundColor: newspost.attributes.category?.data?.attributes?.colourLight}}>
              <div className="px-3 py-1 text-xs font-semibold">
                {newspost.attributes.category?.data?.attributes?.name}
              </div>
            </div>
          </div>
          <div className="h-28 rounded-b-xl mx-auto bg-teal-950 group-hover:bg-teal-800 transition-all motion-safe:duration-500 motion-reduce:duration-0">
            <p className="py-2 px-4 text-xs text-neutral-400 font-semibold">Updated {newspost.attributes?.updatedAt}</p>
            <h2 className="px-4 text-sm text-neutral-50 font-semibold">{newspost.attributes?.title}</h2>
          </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export { NewspostCardList };
