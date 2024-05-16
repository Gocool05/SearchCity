import { SendOutlined } from '@ant-design/icons'
import React from 'react'
import Navbar from '../Components/Navbar'
import SideBar from '../Components/SideBar'

const Referral = () => {
  return (
    <>
    <Navbar/>
    <SideBar/>
    <div className="absolute top-[140px] left-[306px] leading-[34px] font-medium inline-block min-w-[90px] mq450:text-lgi mq450:leading-[27px]">
        Referral
      </div>
      <div className="absolute top-[201px] left-[309px] bg-white w-[548px] flex flex-col items-start justify-start pt-6 pb-9 pr-4 pl-[22px] box-border gap-[24px] max-w-full text-left text-lg text-black font-body-medium">
      <div className="w-[548px] h-[632px] relative bg-white hidden max-w-full" />
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-2 pl-0.5 box-border max-w-full">
        <img
          className="h-[286px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
          loading="lazy"
          alt=""
          src="https://res.cloudinary.com/dx78kzenz/image/upload/v1710237829/Grunge-Effect-Black-Wallpaper-for-Website_fhprrb.jpg"
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[34px] max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full z-[1]">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[20px] max-w-full">
            <div className="h-[38px] w-[38px] rounded-lgi bg-white box-border flex flex-row items-start justify-start py-2.5 px-[9px] border-[1px] border-solid border-mediumblue-100">
              <SendOutlined/>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border min-w-[294px] max-w-full">
              <div className="self-stretch relative leading-[20px] font-medium">
                Invite your friends to Smart Saver
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[20px] max-w-full">
            <div className="h-[38px] w-[38px] rounded-lgi bg-white box-border flex flex-row items-start justify-start py-2.5 px-[9px] border-[1px] border-solid border-mediumblue-100">
            <SendOutlined/>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border min-w-[294px] max-w-full">
              <div className="self-stretch relative leading-[20px] font-medium">
                Invite your friends to Business
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[20px] max-w-full">
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <div className="w-[38px] h-[38px] rounded-lgi bg-white box-border flex flex-row items-start justify-start py-2.5 px-[9px] border-[1px] border-solid border-mediumblue-100">
              <SendOutlined/>
              </div>
            </div>
            <div className="flex-1 relative leading-[20px] font-medium inline-block min-w-[294px] max-w-full">
              You get Coin rewards for every friend that makes a Login as Smart
              Saver and Business
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-1.5  box-border max-w-full text-base text-white">
          <div className="flex-1  flex flex-row flex-wrap items-start justify-start gap-[30px] max-w-full">
            <div className="shadow-[0px_4px_16px_rgba(35,_221,_237,_0.16),_0px_4px_8px_-2px_#030c28] rounded bg-blue-900 overflow-hidden flex flex-row items-start justify-start py-5 px-[18.5px] whitespace-nowrap z-[1]">
              <div className="relative leading-[24px] font-semibold">
                COPY REFERRAL LINK
              </div>
            </div>
            <div className="flex-1 shadow-[0px_4px_16px_rgba(35,_221,_237,_0.16),_0px_4px_8px_-2px_#030c28] rounded bg-blue-900 overflow-hidden flex flex-row items-start justify-start py-5 px-[24.5px] box-border gap-[8px] min-w-[169px] whitespace-nowrap z-[1]">
            <SendOutlined/>
              <div className="relative leading-[24px] font-semibold">
                SHARE REFERRAL LINK
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer className="absolute top-[886px] left-[294px] shadow-[0px_2px_27.1px_rgba(0,_0,_0,_0.1)] rounded-2xl bg-white w-[1094px] flex flex-col items-start justify-start pt-[30px] px-[30px] pb-[62px] box-border gap-[32px] max-w-full z-[1] text-left text-base text-gray-200 font-body-medium">
      <div className="relative leading-[140%] hidden min-w-[109px]">
        Received Coin
      </div>
      <div className="w-[1094px] h-[221px] relative shadow-[0px_2px_27.1px_rgba(0,_0,_0,_0.1)] rounded-2xl bg-white hidden max-w-full" />
      <div className="relative text-lg leading-[140%] text-black z-[1]">
        Referral History
      </div>
      <div className="w-[535px] flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
          <div className="w-[116px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[28px]">
            <div className="relative leading-[140%] inline-block min-w-[85px] z-[1]">
              User Name
            </div>
            <div className="relative leading-[140%] font-semibold text-black inline-block min-w-[42px] z-[1]">
              Balaji
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[28px]">
            <div className="relative leading-[140%] inline-block min-w-[117px] z-[1]">
              Received Coins
            </div>
            <div className="relative leading-[140%] font-semibold text-black inline-block min-w-[59px] z-[1]">
              5 Coins
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[28px]">
            <div className="relative leading-[140%] inline-block min-w-[36px] z-[1]">
              Date
            </div>
            <div className="relative leading-[140%] font-semibold text-black inline-block min-w-[98px] z-[1]">
              Jan 05 2024
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Referral