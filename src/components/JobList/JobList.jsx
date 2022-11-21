// import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ThreeCircles } from 'react-loader-spinner';
import { HandySvg } from 'handy-svg';
import Location from './../../icons/Location.svg';
import Bookmark from './../../icons/Bookmark.svg';
import Rating from './../../icons/Rating.svg';

const JobList = ({ data, loading, leftDays, jobPicture, findJob }) => {
  return (
    <section className="pt-30px pb-65px px-260px  bg-background-color">
      {loading && (
        <ThreeCircles
          color="red"
          outerCircleColor="blue"
          middleCircleColor="red"
          innerCircleColor="grey"
        />
      )}
      <div className="">
        <ul>
          {data &&
            data.map(({ title, createdAt, address, pictures, id, name }) => (
              <li
                key={id}
                className="bg-white px-16px py-24px mb-8px rounded-md flex content-end"
              >
                <div className="mr-16px">
                  <img
                    src={jobPicture(pictures)}
                    alt="pictures"
                    className=" rounded-full overflow-hidden h-55px w-55px"
                  />
                </div>
                <div>
                  <Link
                    // id={id}
                    onClick={() => {
                      findJob(id);
                    }}
                    to={'./detail/'}
                    className=" text-blue font-bold text-[20px] leading-title-height tracking-tightest mb-8px"
                  >
                    {title}
                  </Link>
                  <div className="mb-8px flex">
                    <span className="text-gray-light tracking-span-text relative text-[16px] after:absolute after:content-[''] after:block block after:ml-8px after:w-3px after:h-3px after:rounded-full after:bg-gray-light after:-right-3 after:top-2.5">
                      Department name
                    </span>
                    <span className="text-gray-light tracking-span-text text-[16px] ml-[18px]">
                      {name}
                    </span>
                  </div>
                  <div className="flex">
                    <HandySvg src={Location} className="w-[13px] h-[18px]" />
                    <span className="text-gray-light tracking-span-text text-[16px] ml-8px">
                      {address}
                    </span>
                  </div>
                </div>
                <div className="ml-auto mr-0 pt-[49px]">
                  <HandySvg src={Rating} className="w-[96px] h-[18px]" />
                </div>
                <div className="mr-0 ml-[32px]">
                  <HandySvg
                    src={Bookmark}
                    className="w-[32px] h-[32px] fill-white mr-0 ml-auto mb-[34px]"
                  />

                  <span className="text-gray-light tracking-span-text text-[16px] ml-8px">
                    Posted&nbsp;
                    {leftDays(createdAt)} days ago
                  </span>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default JobList;
