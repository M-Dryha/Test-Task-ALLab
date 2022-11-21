// import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HandySvg } from 'handy-svg';
import { ThreeCircles } from 'react-loader-spinner';
import Bookmark from './../../icons/Bookmark.svg';
import Share from './../../icons/Share.svg';
import Arrow from './../../icons/Arrow.svg';
import Bullet from './../../icons/Bullet 1.svg';
import GeoJsonMap from '../Map/Map';

const JobDetail = ({ job, loading, leftDays }) => {
  const location = useLocation();
  const backLink = location?.state?.from ?? '/';

  return (
    <div className="pt-[56px] pl-[330px] pr-[820px] pb-[120px]">
      <div className="w-[775px]">
        <header>
          <div className="flex justify-between pr-[50px] item-baseline items-center pb-8px  border-b border-gray-300">
            <h2 className=" text-blue font-bold text-[28px] leading-[34px] tracking-title-text ">
              Job Details
            </h2>
            <nav>
              <ul className="text-blue text-[18px] leading-[24px] tracking-title-nav flex items-center">
                <li className="flex mr-24px items-center ">
                  <HandySvg
                    src={Bookmark}
                    className="w-[32px] h-[32px] fill-white mr-8px"
                  />
                  Save to my list
                </li>
                <li className="flex items-center">
                  <HandySvg
                    src={Share}
                    className="w-[19px] h-[20px] mr-[10px]"
                  />
                  Share{' '}
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <div className="px-20px">
          <button
            type="button"
            className="bg-button-blue w-[128px] h-[52px] rounded-lg text-white mt-[40px] mb-[32px] "
          >
            Apply now
          </button>
          {loading && (
            <ThreeCircles
              color="red"
              outerCircleColor="blue"
              middleCircleColor="red"
              innerCircleColor="grey"
            />
          )}
          {job && (
            <>
              <section className="mb-30px relative">
                <div className="flex mb-8px">
                  <div>
                    <p className="w-[500px] mr-60px text-blue font-bold text-[24px] leading-30px tracking-title-detail ">
                      {job.title}
                    </p>
                  </div>
                  <div className=" flex flex-col mr-0 ml-auto w-[155px] ">
                    <span className="text-blue font-bold text-[20px] leading-25px tracking-title-detail">
                      &#8364; {job.salary}
                    </span>
                    <span className="text-blue tracking-title-nav leading-25px  text-[18px]">
                      Brutto, per year
                    </span>
                  </div>
                </div>
                <span className="text-gray-light tracking-title-nav leading-25px  text-[18px] mb-8px">
                  Posted {leftDays(job.createdAt)} days ago
                </span>
                <p className="font-roboto text-blue tracking-title-nav leading-25px  text-[18px] mb-[40px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <h3 className="text-blue font-bold text-[20px] leading-25px tracking-title-detail mb-[10px]">
                  Responsibilities
                </h3>
                <p className="mb-[40px] font-roboto text-blue tracking-title-nav leading-25px  text-[18px]">
                  {job.description}
                </p>
                <h3 className="text-blue font-bold text-[20px] leading-25px tracking-title-detail mb-[10px]">
                  Compensation & benefits
                </h3>
                <ul>
                  {job.benefits.map(b => (
                    <li
                      key={b}
                      className="flex items-center font-roboto text-blue tracking-title-nav leading-25px  text-[18px]"
                    >
                      <HandySvg
                        src={Bullet}
                        className="w-[9px] h-[9px] mr-[10px]"
                      />
                      {b}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className="bg-button-blue w-[128px] h-[52px] rounded-lg text-white mt-[40px] mb-[32px] "
                >
                  Apply now
                </button>
              </section>
              <section className="mb-[100px]">
                <div className="mb-[87px]">
                  <div className="pb-[10px] mb-[15px] border-b border-gray-300">
                    <h2 className=" text-blue font-bold text-[28px] leading-[34px] tracking-title-text ">
                      Additional info
                    </h2>
                  </div>
                  <h4 className=" font-roboto text-blue tracking-title-nav leading-25px  text-[18px] mb-[10px]">
                    Employment type
                  </h4>
                  <ul className="flex mb-[23px]">
                    <li className="w-[222px] h-[50px] bg-button-light-blue mr-8px rounded-lg py-16px text-center font-bold text-list-title  text-16px leading-16px tracking-list-title ">
                      Full time
                    </li>
                    <li className="w-[222px] h-[50px] bg-button-light-blue mr-8px rounded-lg py-16px text-center font-bold text-list-title  text-16px leading-16px tracking-list-title ">
                      Part time
                    </li>
                    <li className="w-[222px] h-[50px] bg-button-light-blue rounded-lg py-16px text-center font-bold text-list-title  text-16px leading-16px tracking-list-title ">
                      Temporary
                    </li>
                  </ul>
                  <h3 className=" font-roboto text-blue tracking-title-nav leading-25px  text-[18px] mb-[10px]">
                    Benefits
                  </h3>
                  <ul className="flex">
                    {job.benefits.map(b => (
                      <li
                        key={b}
                        className="w-[222px] h-[50px] bg-button-yellow mr-8px rounded-lg py-16px text-center font-bold text-list-title-yellow text-16px leading-16px tracking-list-title "
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pb-[10px] border-b border-gray-300  mb-[20px]">
                  <h2 className=" text-blue font-bold text-[28px] leading-[34px] tracking-title-text ">
                    Attached images
                  </h2>
                </div>
                <ul className="flex">
                  {job.pictures.map(p => (
                    <li className="mr-[10px] ">
                      <img
                        src={p}
                        alt={p}
                        className="w-[210px] h-[115px] rounded-lg"
                      ></img>
                    </li>
                  ))}
                </ul>
              </section>
              <Link to={backLink}>
                <button
                  type="button"
                  className="uppercase w-[315px] h-[50px] text-blue absolute  left-[10%] bg-gray-button px-[23px] rounded-lg  flex items-center  "
                >
                  <HandySvg src={Arrow} className="w-[10px] h-[18px] mr-16px" />
                  Return to job board
                </button>
              </Link>
            </>
          )}
        </div>
        <div className="absolute top-[40%] right-[17%] rounded-b-lg z-0">
          <GeoJsonMap location={job.location} className="z-0"></GeoJsonMap>
        </div>
        <div className="h-[206px] w-[400px] z-1 rounded-b-lg  bg-button-blue absolute top-[40%] right-[17%] opacity-50"></div>
        <div className=" w-[400px] z-2 rounded-t-lg   bg-maps absolute top-[8%] right-[17%] text-contact-address px-60px pt-30px pb-[25px]">
          <h5 className=" font-bold text-[20px] leading-title-height tracking-tightest mb-8px">
            Department name.
            <br />
            {job.name}.
          </h5>
          <address>
            <ul className="mb-0">
              <li className="mb-8px font-roboto not-italic tracking-title-nav leading-25px  text-[18px]">
                {job.address}
              </li>
              <li className="mb-8px font-roboto not-italic tracking-title-nav leading-25px  text-[18px]">
                {job.phone}
              </li>
              <li className="font-roboto not-italic tracking-title-nav leading-25px  text-[18px]">
                {job.email}
              </li>
            </ul>
          </address>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
