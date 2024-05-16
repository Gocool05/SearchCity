import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import SideBar from '../Components/SideBar'

const Settings = () => {

  const [activeTab, setActiveTab] = useState('personal');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };



  return (
    <>
    <Navbar/>
    <SideBar/>
    <div className="absolute top-[140px] left-[309px] leading-[34px] font-medium inline-block min-w-[96px] mq450:text-lgi mq450:leading-[27px]">
        Settings
      </div>

      <main className="absolute top-[217px] left-[309px] rounded-xl bg-white w-[1042px] flex flex-col items-end justify-start pt-[31px] px-[7.5px] pb-[30px] box-border gap-[25px] max-w-full text-center text-xs  font-body-medium">
        <div className="self-stretch h-[1059px] relative rounded-xl bg-white hidden" />
        <section className="w-[992.5px] flex flex-row flex-wrap items-start justify-start gap-[26px] max-w-full text-left text-mid text-slateblue font-body-medium">
      <div className="flex flex-col items-start justify-start pt-[21px] px-0 pb-0">
        <div className="flex flex-col items-start justify-start gap-[44px]">
          <div className="rounded-[4.99px] bg-cornflowerblue flex flex-row items-start justify-start py-3 pr-[21px] pl-[22px] gap-[17px] z-[1]">
            <div className="h-[46px] w-[243px] relative rounded-[4.99px] bg-cornflowerblue hidden" />
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <img
                className="w-3.5 h-3.5 relative z-[2]"
                alt=""
                src="/vector1.svg"
              />
            </div>
            <div className="relative leading-[22px] font-medium z-[2]">
              Personal Information
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-0 pr-[22px] pl-[22.5px] text-center text-black">
            <div
              className="flex flex-row items-start justify-start gap-[16.9px] cursor-pointer z-[1]"
            //   onClick={onGroupContainerClick}
            >
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <img
                  className="w-[13.6px] h-[17px] relative"
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
              <div className="relative leading-[22px] font-medium inline-block min-w-[68px]">
                Security
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[898px] flex flex-col items-start justify-start py-0 pr-[19px] pl-0 box-border">
        <img
          className="w-px flex-1 relative max-h-full z-[1]"
          loading="lazy"
          alt=""
          src="/vector-11.svg"
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start pt-[21px] px-0 pb-0 box-border min-w-[440px] max-w-full mq675:min-w-full">
        <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[22px] max-w-full">
          <div className="w-[658px] flex flex-col items-start justify-start pt-0 pb-[7px] pr-5 pl-0 box-border gap-[24px] max-w-full">
            <div className="relative text-5xl leading-[22px] font-semibold font-body-medium text-black text-center z-[1] mq450:text-lgi mq450:leading-[18px]">
              General Information
            </div>
            <img
              className="self-stretch relative max-w-full overflow-hidden max-h-full z-[1]"
              loading="lazy"
              alt=""
              src="/vector-2.svg"
            />
          </div>
          <div className="flex flex-row items-end justify-start pt-0 pb-4 pr-5 pl-0 box-border gap-[17px] max-w-full">
            <img
              className="h-16 w-16 relative rounded-[61.09px] overflow-hidden shrink-0 object-contain z-[1]"
              loading="lazy"
              alt=""
              src="/profilepics2@2x.png"
            />
            <div className="flex flex-col items-start justify-end pt-0 pb-[17px] pr-[15px] pl-0">
              <div className="relative text-base leading-[22px] font-semibold font-body-medium text-black text-center inline-block min-w-[76px] z-[1]">
                Mani Ram
              </div>
            </div>
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[9px]">
              <div className="rounded-[7.71px] bg-mediumblue-100 overflow-hidden flex flex-row items-start justify-start py-2.5 pr-2.5 pl-[11px] whitespace-nowrap z-[1]">
                <div className="relative text-xs leading-[17px] font-medium font-body-medium text-white text-center inline-block min-w-[105px]">
                  Change profile pic
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[0.5px] max-w-full mq675:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start gap-[20px] min-w-[220px] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch relative text-sm leading-[22px] font-body-medium text-gray-200 text-left z-[1]">
                  Username
                </div>
                <div className="w-[299px] rounded-lg bg-white box-border flex flex-row items-start justify-start py-3.5 px-5 z-[1] border-[1px] border-solid border-gray-700">
                  <div className="relative text-base leading-[24px] font-body-medium text-black text-left inline-block min-w-[111px]">
                    Jeevanantham
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch relative text-sm leading-[22px] font-body-medium text-gray-200 text-left z-[1]">
                  Phone Number
                </div>
                <div className="w-[299px] rounded-lg bg-white box-border flex flex-row items-start justify-start py-3.5 px-5 z-[1] border-[1px] border-solid border-gray-700">
                  <div className="relative text-base leading-[24px] font-body-medium text-black text-left">
                    123-098-345-09
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch relative text-sm leading-[22px] font-body-medium text-gray-200 text-left z-[1]">
                  Address
                </div>
                <div className="w-[299px] rounded-lg bg-white box-border flex flex-row items-start justify-start py-3.5 pr-0 pl-5 z-[1] border-[1px] border-solid border-gray-700">
                  <div className="w-[298.5px] relative text-base leading-[24px] font-body-medium text-black text-left flex items-center shrink-0">
                    xyz
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2.5 gap-[8px]">
                <div className="self-stretch relative text-sm leading-[22px] font-body-medium text-gray-200 text-left z-[1]">
                  City
                </div>
                <div className="w-[299px] rounded-lg bg-white box-border flex flex-row items-start justify-start py-3.5 px-5 z-[1] border-[1px] border-solid border-gray-700">
                  <div className="relative text-base leading-[24px] font-body-medium text-black text-left inline-block min-w-[55px]">
                    Tirupur
                  </div>
                </div>
              </div>
              <div className="rounded-lg bg-mediumblue-100 flex flex-row items-start justify-start py-3 px-[13px] whitespace-nowrap z-[3]">
                <div className="relative text-xs leading-[18px] font-semibold font-body-medium text-white text-center">
                  Use My Current Location
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[126px] min-w-[220px] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch relative text-sm leading-[22px] font-body-medium text-gray-200 text-left z-[1]">
                  Email address
                </div>
                <div className="w-[299px] rounded-lg bg-white box-border flex flex-row items-start justify-start py-3.5 px-5 z-[1] border-[1px] border-solid border-gray-700">
                  <div className="relative text-base leading-[24px] font-body-medium text-black text-left inline-block min-w-[119px] whitespace-nowrap">
                    xyz@gmail.com
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                  <div className="self-stretch relative text-sm leading-[22px] font-body-medium text-gray-200 text-left z-[1]">
                    Country
                  </div>
                  <img
                    className="w-[299px] h-14 relative rounded-lg z-[1]"
                    alt=""
                    src="/frame-18251.svg"
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                  <div className="self-stretch relative text-sm leading-[22px] font-body-medium text-gray-200 text-left z-[1]">
                    State
                  </div>
                  <div className="w-[299px] rounded-lg bg-white box-border flex flex-row items-start justify-start py-3.5 px-5 z-[1] border-[1px] border-solid border-gray-700">
                    <div className="w-[130px] relative text-base leading-[24px] font-body-medium text-black text-left flex items-center shrink-0">
                      Tamildanu
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[638px] h-[228px] relative max-w-full">
          <div className="absolute top-[0px] left-[0px] bg-white w-full h-full overflow-hidden z-[3] text-left text-3xs text-gray-800 font-roboto">
      <img
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/maps--zoom-levels--2-city@2x.png"
      />
      <div className="absolute top-[8px] left-[351px] w-[287px] h-[220px] flex flex-col items-end justify-start gap-[116px]">
        <div className="flex-1 flex flex-row items-start justify-end py-0 px-2">
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px] z-[1]">
            <img
              className="w-7 flex-1 relative max-h-full object-cover"
              loading="lazy"
              alt=""
              src="/controls--zoom-controls@2x.png"
            />
            <div className="w-7 h-7 relative">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_1px_3px_rgba(0,_0,_0,_0.2)] rounded-sm bg-white" />
              <img
                className="absolute h-[71.43%] w-[42.86%] top-[14.29%] right-[28.57%] bottom-[14.29%] left-[28.57%] max-w-full overflow-hidden max-h-full object-contain z-[1]"
                loading="lazy"
                alt=""
                src="/pegmanoffscreen2x@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[1px] z-[1]">
          <div className="h-[15px] flex-1 relative whitespace-nowrap">
            <div className="absolute top-[0px] left-[0px] bg-whitesmoke-400 w-full h-full" />
            <div className="absolute top-[3px] left-[5px] inline-block min-w-[111px] z-[1]">
              Map data @2019 Google
            </div>
          </div>
          <div className="h-[15px] w-[70px] relative whitespace-nowrap">
            <div className="absolute top-[0px] left-[0px] bg-whitesmoke-400 w-full h-full" />
            <div className="absolute top-[3px] left-[5px] inline-block min-w-[60px] z-[1]">
              Terms of Use
            </div>
          </div>
          <div className="h-[15px] w-[94px] relative whitespace-nowrap">
            <div className="absolute top-[0px] left-[0px] bg-whitesmoke-400 w-full h-full" />
            <div className="absolute top-[3px] left-[5px] inline-block min-w-[84px] z-[1]">
              Report a map error
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[8px] left-[5px] flex flex-col items-start justify-start gap-[165px] text-center text-2xs text-black">
        <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[3px]">
          <div className="h-[29px] overflow-x-auto flex flex-row items-start justify-start py-0 px-2 box-border relative gap-[7.5px] z-[1]">
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[0px_1px_3px_rgba(0,_0,_0,_0.2)] rounded-sm bg-white" />
            <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
              <div className="relative font-medium inline-block min-w-[22px] z-[1]">
                Map
              </div>
            </div>
            <div className="h-[30px] w-px relative box-border shrink-0 z-[1] border-r-[1px] border-solid border-whitesmoke-200" />
            <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0 text-dimgray-300">
              <div className="relative inline-block min-w-[40px] z-[1]">
                Satellite
              </div>
            </div>
          </div>
        </div>
        <img
          className="w-[66px] h-[26px] relative z-[1]"
          loading="lazy"
          alt=""
          src="/controls--google-logo--color.svg"
        />
      </div>
    </div>
            <img
              className="absolute top-[95px] left-[309px] w-[27px] h-[43px] object-contain z-[4]"
              loading="lazy"
              alt=""
              src="/markers--near-pin-marker@2x.png"
            />
          </div>
        </form>
      </div>
    </section>
        <div className="flex flex-row items-start justify-end py-0 pr-[39.5px] pl-[39px]">
          <div className="rounded-lg bg-mediumblue-100 flex flex-row items-start justify-start py-[15px] px-[49px] z-[3]">
            <div className="relative leading-[18px] font-semibold inline-block min-w-[43px]">
              Update
            </div>
          </div>
        </div>
      </main>
      </>
  )
}

export default Settings