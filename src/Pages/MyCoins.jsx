import { QrcodeOutlined } from '@ant-design/icons'
import React from 'react'
import Navbar from '../Components/Navbar'
import SideBar from '../Components/SideBar'

const MyCoins = () => {
  return (
    <>
    <Navbar/>
    <SideBar/>
     <h3 className="m-0 absolute top-[140px] left-[306px] text-inherit leading-[34px] font-medium font-inherit inline-block min-w-[107px] mq450:text-lgi mq450:leading-[27px]">
    My Coins
  </h3>
  <div className="absolute top-[208px] left-[306px] text-base leading-[140%] font-light">
    Total Earned Coins
  </div>
  <b className="absolute top-[241px] left-[339px] leading-[27px] inline-block text-gray-200 w-12 h-[27px] min-w-[48px] mq450:text-lgi mq450:leading-[22px]">
    700
  </b>
  <img
    className="absolute top-[242px] left-[306px] w-[19.1px] h-[26.8px]"
    loading="lazy"
    alt=""
    src="https://www.kindpng.com/picc/m/36-365323_coin-clip-art-free-clipart-image-image-transparent.png"
  />
  <div className="absolute top-[208px] left-[495px] text-base leading-[140%] font-light inline-block min-w-[107px]">
    Balance Coins
  </div>
  <b className="absolute top-[241px] left-[528px] leading-[27px] inline-block w-12 h-[27px] min-w-[48px] mq450:text-lgi mq450:leading-[22px]">
    350
  </b>
  <img
    className="absolute top-[242px] left-[495px] w-[19.1px] h-[26.8px]"
    alt=""
    src="https://www.kindpng.com/picc/m/36-365323_coin-clip-art-free-clipart-image-image-transparent.png"
  />
  <div className="absolute top-[225px] left-[1264px] shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-lg bg-blue-900 flex flex-col items-center justify-center py-2.5 px-[22.5px] text-sm text-white">
    <div className="flex flex-row items-center justify-center gap-[10px]">
      <QrcodeOutlined/>
      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-row items-center justify-start py-0.5 px-0">
          <div className="relative tracking-[-1px] leading-[20px] font-semibold inline-block min-w-[57px]">
            Purchase
          </div>
        </div>
      </div>
    </div>
  </div>
  <section className="absolute top-[309px] left-[306px] shadow-[0px_2px_27.1px_rgba(0,_0,_0,_0.1)] rounded-mini bg-white w-[1094px] flex flex-col items-start justify-start pt-[30px] pb-[39px] pr-[29px] pl-[30px] box-border gap-[32px] max-w-full text-left text-lg text-black font-body-medium">
      <div className="w-[1094px] h-[314px] relative shadow-[0px_2px_27.1px_rgba(0,_0,_0,_0.1)] rounded-mini bg-white hidden max-w-full" />
      <div className="relative leading-[140%] z-[1]">Transaction History</div>
      <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] text-base text-gray-200 mq900:flex-wrap">
        <div className="flex flex-col items-start justify-start gap-[28px]">
          <div className="relative leading-[140%] inline-block min-w-[16px] z-[1]">
            ID
          </div>
          <div className="flex flex-col items-start justify-start gap-[34px] text-black">
            <div className="relative leading-[140%] font-semibold inline-block min-w-[39px] z-[1]">
              0123
            </div>
            <div className="relative leading-[140%] font-semibold inline-block min-w-[39px] z-[1]">
              0123
            </div>
            <div className="relative leading-[140%] font-semibold inline-block min-w-[39px] z-[1]">
              0123
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start py-0 pr-[13px] pl-0 gap-[28px]">
          <div className="relative leading-[140%] inline-block min-w-[90px] z-[1]">
            Store Name
          </div>
          <div className="flex flex-col items-start justify-start gap-[34px] text-black">
            <div className="relative leading-[140%] font-semibold inline-block min-w-[125px] z-[1]">
              Poorvika Mobile
            </div>
            <div className="relative leading-[140%] font-semibold inline-block min-w-[109px] z-[1]">
              Ram Furniture
            </div>
            <div className="relative leading-[140%] font-semibold z-[1]">
              Sangeetha Mobile
            </div>
          </div>
        </div>
        <div className="w-[454px] flex flex-row items-start justify-start py-0 pr-10 pl-0 box-border gap-[57px] max-w-full mq675:flex-wrap">
          <div className="w-28 flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[28px]">
            <div className="relative leading-[140%] inline-block min-w-[87px] z-[1]">
              Used Coins
            </div>
            <div className="flex flex-col items-start justify-start gap-[34px] text-black">
              <div className="relative leading-[140%] font-semibold inline-block min-w-[29px] z-[1]">
                150
              </div>
              <div className="relative leading-[140%] font-semibold inline-block min-w-[30px] z-[1]">
                100
              </div>
              <div className="relative leading-[140%] font-semibold inline-block min-w-[30px] z-[1]">
                100
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[28px]">
            <div className="relative leading-[140%] inline-block min-w-[36px] z-[1]">
              Date
            </div>
            <div className="flex flex-col items-start justify-start gap-[34px] text-black">
              <div className="relative leading-[140%] font-semibold inline-block min-w-[98px] z-[1]">
                Jan 05 2024
              </div>
              <div className="relative leading-[140%] font-semibold inline-block min-w-[95px] z-[1]">
                Jan 21 2024
              </div>
              <div className="relative leading-[140%] font-semibold inline-block min-w-[98px] z-[1]">
                Feb 05 2024
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[28px]">
            <div className="relative leading-[140%] inline-block min-w-[74px] z-[1]">
              Comment
            </div>
            <div className="flex flex-col items-start justify-start gap-[34px] text-black">
              <div className="relative leading-[140%] inline-block min-w-[90px] z-[1]">
                New mobile
              </div>
              <div className="relative leading-[140%] inline-block min-w-[35px] z-[1]">
                Sofa
              </div>
              <div className="relative leading-[140%] inline-block min-w-[64px] z-[1]">
                Headset
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[46px] px-0 pb-0 text-limegreen">
          <div className="flex flex-col items-start justify-start gap-[26px]">
            <div className="rounded-8xs bg-aliceblue-200 flex flex-row items-start justify-start py-1 px-2.5 z-[1]">
              <div className="relative leading-[140%] inline-block min-w-[81px]">
                Purchased
              </div>
            </div>
            <div className="rounded-8xs bg-aliceblue-200 flex flex-row items-start justify-start py-1 px-2.5 z-[1]">
              <div className="relative leading-[140%] inline-block min-w-[81px]">
                Purchased
              </div>
            </div>
            <div className="rounded-8xs bg-aliceblue-200 flex flex-row items-start justify-start py-1 px-2.5 z-[1]">
              <div className="relative leading-[140%] inline-block min-w-[81px]">
                Purchased
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
   
  )
}

export default MyCoins