import { EyeOutlined, HeartFilled, MessageOutlined, PhoneOutlined, RadiusBottomleftOutlined, SendOutlined, ShareAltOutlined } from '@ant-design/icons'
import React from 'react'
import Navbar from '../../Components/Navbar'
import RightSide from '../../Components/RightSide'
import SideBar from '../../Components/SideBar'

const Home = () => {
  return (
    <div className="flex flex-col h-screen">
  {/* Navbar */}
  <Navbar />
    <main className="self-stretch h-[1267px] relative shrink-0 [debug_commit:1de1738] max-w-full text-left text-lg text-gray-200 font-base-regular lg:h-auto lg:min-h-[1267]">
    <SideBar />
        <div className="absolute top-[140px] left-[318px] shadow-[0px_2px_30px_rgba(0,_0,_0,_0.2)] w-[590px] flex flex-col items-start justify-start max-w-full">
          <div className="self-stretch rounded-lg bg-instagram-light-1 flex flex-col items-start justify-center py-[10.5px] px-5">
            <div className="h-6 flex flex-row items-center justify-start py-0 pr-[86px] pl-0 box-border gap-[16px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="https://www.kindpng.com/picc/m/25-254121_search-prism-learning-solutions-search-icon-svg-free.png"
              />
              <div className="relative leading-[140%] inline-block min-w-[60px]">
                Search
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[221px] left-[318px] w-[590px] flex flex-row items-center justify-center max-w-full text-base text-black">
          <div className="flex-1 flex flex-row items-center justify-start py-0 px-0 box-border max-w-full [row-gap:20px] mq750:flex-wrap">
            <div className="rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs bg-mediumblue flex flex-row items-center justify-center py-3 px-[30.5px] text-instagram-light-2 mq450:w-[calc(100%_-_40px)]">
              <div className="relative leading-[140%] font-medium inline-block min-w-[20px]">
                All
              </div>
            </div>
            <div className="bg-aliceblue-300 flex flex-row items-center justify-center py-2.5 px-[21px] whitespace-nowrap border-[1px] border-solid border-lightsteelblue mq450:w-[calc(100%_-_40px)]">
              <div className="relative leading-[140%] font-medium inline-block min-w-[102px]">
                30 Days Post
              </div>
            </div>
            <div className="w-[82px] bg-aliceblue-300 box-border flex flex-row items-center justify-center py-2.5 px-[23px] border-[1px] border-solid border-lightsteelblue mq450:w-[calc(100%_-_40px)]">
              <div className="relative leading-[140%] font-medium inline-block min-w-[33px]">
                B2C
              </div>
            </div>
            <div className="w-[82px] bg-aliceblue-300 box-border flex flex-row items-center justify-center py-2.5 px-6 border-[1px] border-solid border-lightsteelblue mq450:w-[calc(100%_-_40px)]">
              <div className="relative leading-[140%] font-medium inline-block min-w-[31px]">
                B2B
              </div>
            </div>
            <div className="w-[127px] bg-aliceblue-300 box-border flex flex-row items-center justify-center py-2.5 px-7 whitespace-nowrap border-[1px] border-solid border-lightsteelblue mq450:w-[calc(100%_-_40px)]">
              <div className="relative leading-[140%] font-medium inline-block min-w-[68px]">
                Free Ads
              </div>
            </div>
            <div className="w-[83px] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-aliceblue-300 box-border flex flex-row items-center justify-center py-2.5 px-[26px] border-[1px] border-solid border-lightsteelblue mq450:w-[calc(100%_-_40px)]">
              <div className="relative leading-[140%] font-medium inline-block min-w-[29px]">
                Job
              </div>
            </div>
          </div>
        </div>
        

        {/* POST SECTION */}

        <div className="absolute top-[303px] left-[318px] shadow-[0px_20px_30px_rgba(0,_0,_0,_0.25)] rounded-11xl bg-instagram-light-1 w-[590px] overflow-hidden flex flex-col items-start justify-start pt-9 px-6 pb-8 box-border gap-[30px] max-w-full text-left text-xl text-instagram-light-1 font-base-regular">
      <div className="self-stretch flex flex-col items-start justify-start gap-[20px] font-kaushan-script">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
          <div className="w-[186px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
            <div className="self-stretch flex flex-row items-start justify-start gap-[10px]">
              <div className="h-[50px] w-[50px] rounded-81xl bg-gray-500 overflow-hidden shrink-0 flex flex-row items-start justify-start p-[11px] box-border">
                <div className="relative tracking-[-1px] leading-[140%] inline-block min-w-[28px] mq450:text-base mq450:leading-[22px]">
                  RE
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 text-lg text-black font-base-regular">
                <div className="flex flex-col items-start justify-start">
                  <div className="relative tracking-[-1px] leading-[140%] font-semibold inline-block min-w-[126px]">
                    Ram Electronics
                  </div>
                  <div className="relative text-sm tracking-[-1px] leading-[20px] font-medium text-instagram-light-3 inline-block min-w-[122px] whitespace-nowrap">
                    26 June at 09:32 PM
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[52px] w-[178px] flex flex-row items-start justify-start gap-[52px] text-center text-base text-instagram-secondary font-base-regular">
            <div className="flex-1 shadow-[2px_2px_5px_rgba(0,_0,_0,_0.33)] rounded-3xs bg-instagram-light-1 flex flex-row items-start justify-start py-0.5 px-[5px] border-[1px] border-solid border-instagram-secondary">
              <div className="w-[88px] relative tracking-[-1px] leading-[140%] font-semibold inline-block">
                <p className="m-0">{`Share & Earn`}</p>
                <p className="m-0">5 Coins</p>
              </div>
            </div>
            <div
              className="self-stretch flex flex-col items-center justify-center gap-[4px] cursor-pointer"
            >
              <div className="w-[26px] h-1.5 relative rounded-[50%] bg-gray-200" />
              <div className="w-[26px] h-1.5 relative rounded-[50%] bg-gray-200" />
              <div className="w-[26px] h-1.5 relative rounded-[50%] bg-gray-200" />
            </div>
          </div>
        </div>
        <div className="self-stretch relative text-base leading-[140%] font-semibold font-base-regular text-black whitespace-pre-wrap">
          It's a big world out there - explore! #ramelectronics #offer
        </div>
      </div>
      <div className="self-stretch h-[520px] rounded-11xl bg-gray-400 overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border relative max-w-full">
        <div className="ml-[-117px] w-[776px] flex-1 flex flex-row items-end justify-center py-[18px] px-5 box-border bg-[url('https://res.cloudinary.com/dx78kzenz/image/upload/v1710237829/Grunge-Effect-Black-Wallpaper-for-Website_fhprrb.jpg')] bg-cover bg-no-repeat bg-[top] max-w-[144%] shrink-0">
          <img
            className="h-[517px] w-[776px] relative object-cover hidden max-w-full"
            alt=""
            src="https://res.cloudinary.com/dx78kzenz/image/upload/v1710237829/Grunge-Effect-Black-Wallpaper-for-Website_fhprrb.jpg"
          />
          <div className="flex flex-row items-start justify-start gap-[10px] z-[1]">
            <div className="h-2.5 w-2.5 relative rounded-2xl bg-instagram-light-1" />
            <div className="h-2.5 w-2.5 relative rounded-2xl bg-whitesmoke" />
            <div className="h-2.5 w-2.5 relative rounded-2xl bg-whitesmoke" />
          </div>
        </div>
        <img
          className="w-[776px] h-[776px] absolute !m-[0] top-[-155px] right-[-122px] object-cover z-[2]"
          alt=""
          src="/image-220@2x.png"
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-2.5 box-border max-w-full text-sm text-dimgray-200">
        <div className="flex-1 flex flex-col items-start justify-start max-w-full">
          <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[30px] max-w-full">
            <div className="flex-1 flex flex-row items-center justify-between py-0 pr-[191px] pl-0 box-border min-w-[145px] max-w-full gap-[20px] mq450:flex-wrap">
              <div className="flex flex-row items-center justify-start gap-[6px]">
              <HeartFilled />
                <div className="relative leading-[20px] font-medium inline-block min-w-[25px]">
                  120
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[6px]">
              <MessageOutlined />
                <div className="relative leading-[20px] font-medium inline-block min-w-[18px]">
                  68
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[6px]">
              <EyeOutlined />
                <div className="relative leading-[20px] font-medium inline-block min-w-[24px]">
                  152
                </div>
              </div>
            </div>
            <div className="shadow-[0px_2px_10px_rgba(0,_0,_0,_0.5)] rounded-lg bg-mediumblue flex flex-col items-center justify-center py-2.5 px-7 text-instagram-light-1">
              <div className="flex flex-row items-center justify-center gap-[4px]">
              <ShareAltOutlined />
                <div className="flex flex-row items-center justify-start py-0.5 px-0">
                  <div className="relative tracking-[-1px] leading-[20px] font-semibold inline-block min-w-[36px]">
                    Share
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full text-base text-instagram-light-4">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[11px] max-w-full">
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <img
              className="w-10 h-10 relative rounded-[61.09px] overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="https://res.cloudinary.com/dx78kzenz/image/upload/v1708337882/profile_xdakag.png"
            />
          </div>
          <div className="flex-1 rounded-lg bg-ghostwhite flex flex-row items-start justify-between py-[11px] px-4 box-border min-w-[186px] max-w-full gap-[20px]">
            <div className="relative leading-[140%]">Write your comment...</div>
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <SendOutlined />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 gap-[20px] text-sm text-mediumblue mq450:flex-wrap">
          <div className="shadow-[0px_2px_10px_rgba(0,_0,_0,_0.4)] rounded-lg bg-instagram-light-1 flex flex-col items-center justify-center py-2 px-[55px] border-[1px] border-solid border-mediumblue">
            <div className="w-12 flex flex-row items-center justify-center gap-[4px]">
            <PhoneOutlined />
              <div className="flex flex-row items-center justify-start py-0.5 px-0">
                <div className="relative tracking-[-1px] leading-[20px] font-semibold inline-block min-w-[23px]">
                  Call
                </div>
              </div>
            </div>
          </div>
          <div
            className="shadow-[0px_2px_10px_rgba(0,_0,_0,_0.4)] rounded-lg bg-instagram-light-1 flex flex-col items-center justify-center py-2 px-[52px] cursor-pointer border-[1px] border-solid border-mediumblue"
         
          >
            <div className="flex flex-row items-center justify-center gap-[4px]">
            <MessageOutlined />
              <div className="flex flex-row items-center justify-start py-0.5 px-0">
                <div className="relative tracking-[-1px] leading-[20px] font-semibold inline-block min-w-[30px]">
                  Chat
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



        <RightSide />
      </main>
    </div>
  );
}

export default Home