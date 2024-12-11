import { NewspostEntity } from '@sharknado/cms-api';

interface NewspostHomepageListProps {
  data: NewspostEntity[];
  detailPath: string;
}

function ThumbnailUrl(post: NewspostEntity): string {
  // todo - find the thumbnail format and grab its url
  // post.attributes.headImage.data.attributes.formats["thumbnail"].url
  // return process.env.NEXT_PUBLIC_IMAGE_BASE_URL + "/uploads/small_rottnest_island_beach_5845173fee.jpg";
  return (
    process.env.NEXT_PUBLIC_IMAGE_BASE_URL +
    post.attributes.headImage.data.attributes.formats['small'].url
  );
}

const NewspostHomepageList = ({
  data,
  detailPath,
}: NewspostHomepageListProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {data.map((newspost, index) => (
        <div key={`news-${index}`} className="px-2">
          <a href={`${detailPath}/${newspost.id}`} className="group">
          <div className="h-40 rounded-t-lg overflow-hidden mx-auto">
            <img
              className="object-cover w-full h-full group-hover:scale-125 transition-all duration-500"
              src={ThumbnailUrl(newspost)}
              alt={
                newspost.attributes.headImage.data.attributes.alternativeText
              }
            ></img>
          </div>
          <div className="h-32 rounded-b-lg mx-auto bg-teal-950 group-hover:bg-teal-800 transition-all duration-500">
            <p className="py-2 px-4 text-xs text-neutral-400 font-semibold">Updated {newspost.attributes?.updatedAt}</p>
            <h2 className="px-4 text-sm text-neutral-50 font-semibold">{newspost.attributes?.title}</h2>
          </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export { NewspostHomepageList };
