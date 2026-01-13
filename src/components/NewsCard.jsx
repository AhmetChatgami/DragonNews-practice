import { FaStar, FaEye, FaFire, FaRegBookmark, FaShareAlt } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { title, author, thumbnail_url, details, rating, total_view, others } =
    news;

  return (
    <div className="card bg-base-100 shadow-xl border border-base-300">
      {/* Author */}
      <div className="flex items-center gap-3 p-4 bg-base-200 rounded-t-xl">
        <img
          src={author?.img}
          alt={author?.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex-1">
          <h2 className="font-semibold text-sm">{author?.name}</h2>
          <p className="text-xs text-gray-500">
            {new Date(author.published_date).toDateString()}
          </p>
        </div>

        {others?.is_trending && (
          <span className="badge badge-error gap-1">
            <FaFire /> Trending
          </span>
        )}
        <button className="text-gray-500 hover:text-primary flex gap-3"> <FaRegBookmark/> <FaShareAlt/></button>
      </div>

      {/* Title */}
      <div className="p-4">
        <h2 className="card-title text-lg leading-snug">{title}</h2>
      </div>

      {/* Image */}
      <figure className="px-4">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-xl w-full max-h-64 object-cover"
        />
      </figure>

      {/* Details */}
      <div className="p-4 text-sm text-gray-600">
        {details.length > 180 ? details.slice(0, 180) + "..." : details}
      <div className="pt-0">
        <button className="btn btn-link text-primary px-0">Read More</button>
      </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between p-4 border-t">
        {/* Rating */}
        <div className="flex items-center gap-1 text-orange-500">
          {Array.from({ length: rating?.number }).map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="ml-1 text-sm text-gray-600">{rating?.number}.0</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-1 text-gray-500 text-sm">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>

      {/* Action */}
    </div>
  );
};

export default NewsCard;
