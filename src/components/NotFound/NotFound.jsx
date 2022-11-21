import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div>
      <h2 className=" text-blue font-bold text-[20px] leading-title-height tracking-tightest ml-65px mt-65px">
        Nothing to see here!
      </h2>
      <p>
        <Link
          to="/"
          className="text-gray-light tracking-span-text text-[16px] ml-65px hover:text-blue"
        >
          To home page
        </Link>
      </p>
    </div>
  );
}

export default NotFoundPage;
