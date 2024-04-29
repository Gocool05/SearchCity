import { MessageOutlined, PhoneFilled, PhoneOutlined, SendOutlined } from '@ant-design/icons'
import React from 'react'
import Navbar from '../Components/Navbar'
import SideBar from '../Components/SideBar'

const Chat = () => {
  return (
    <>
    <Navbar/>
    <SideBar/>
     <div className="absolute top-[199px] left-[656px] bg-white w-[748px] overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-6 box-border gap-[200px] max-w-full">
        <div className="self-stretch h-20 flex flex-col items-start justify-start py-[18px] px-0 box-border gap-[18px] max-w-full mq450:h-auto">
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-6 box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
              <div className="flex flex-row items-start justify-start gap-[16px]">
                <img
                  className="h-10 w-10 relative rounded-81xl overflow-hidden shrink-0"
                  alt=""
                  src="https://res.cloudinary.com/dx78kzenz/image/upload/v1706526210/timeline_fgjpzm.png"
                />
                <div className="flex flex-col items-start justify-start">
                  <h3 className="m-0 relative text-inherit leading-[125%] font-semibold font-inherit mq450:text-base mq450:leading-[20px]">
                    Ram Electronics
                  </h3>
                  <div className="flex flex-row items-start justify-start gap-[8px] text-xs text-gray-700">
                    <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                      <div className="w-2.5 h-2.5 relative rounded-[50%] bg-green-green400" />
                    </div>
                    <div className="relative leading-[150%] font-semibold inline-block min-w-[38px]">
                      Online
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg bg-mediumblue-200 flex flex-row items-start justify-start py-2.5 px-4 gap-[8px] text-base">
             <PhoneOutlined/>
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <div className="relative leading-[125%]  font-semibold inline-block min-w-[30px]">
                    Call
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-px relative bg-gray-800 shrink-0" />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-6 box-border max-w-full">
        <div className="flex-1 flex flex-col items-end justify-start gap-[32px] max-w-full text-left text-sm text-black font-body-medium">
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[463px] pl-0 gap-[16px]">
        <img
          className="h-10 w-10 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="https://res.cloudinary.com/dx78kzenz/image/upload/v1708337882/profile_xdakag.png"
        />
        <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[118px]">
          <div className="rounded-xl bg-whitesmoke-200 flex flex-row items-start justify-start py-2 px-4 whitespace-nowrap">
            <div className="relative leading-[150%]">omg, this is amazing</div>
          </div>
          <div className="rounded-xl bg-whitesmoke-200 flex flex-row items-start justify-start py-2 px-4 whitespace-nowrap">
            <div className="relative leading-[150%] inline-block min-w-[70px] whitespace-nowrap">
              perfect! ✅
            </div>
          </div>
          <div className="rounded-xl bg-whitesmoke-200 flex flex-row items-start justify-start py-2 px-4 whitespace-nowrap">
            <div className="relative leading-[150%]">
              Wow, this is really epic
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[16px] ">
        <div className="rounded-xl bg-mediumblue-200 flex flex-row items-start justify-start py-2 px-4 whitespace-nowrap">
          <div className="relative leading-[150%] inline-block min-w-[90px]">
            How are you?
          </div>
        </div>
        <div className="h-10 w-10 rounded-81xl bg-aliceblue-200 overflow-hidden shrink-0 flex flex-row items-start justify-start">
          <div className="h-10 w-10 relative rounded-81xl bg-gray-100 overflow-hidden shrink-0">
            <img
              className="absolute top-[-2px] left-[-2px] w-full h-full overflow-hidden object-cover z-[1]"
              alt=""
              src="https://res.cloudinary.com/dx78kzenz/image/upload/v1706526210/timeline_fgjpzm.png"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[458px] pl-0 gap-[16px]">
        <img
          className="h-10 w-10 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="https://res.cloudinary.com/dx78kzenz/image/upload/v1708337882/profile_xdakag.png"
        />
        <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[121px]">
          <div className="rounded-xl bg-whitesmoke-200 flex flex-row items-start justify-start py-2 px-4 whitespace-nowrap">
            <div className="relative leading-[150%]">
              just ideas for next time
            </div>
          </div>
          <div className="rounded-xl bg-whitesmoke-200 flex flex-row items-start justify-start py-2 px-4 whitespace-nowrap">
            <div className="relative leading-[150%] whitespace-nowrap">
              I'll be there in 2 mins ⏰
            </div>
          </div>
          <div className="w-[217px] rounded-xl bg-whitesmoke-200 hidden flex-row items-start justify-start py-2 px-4 box-border whitespace-nowrap">
            <div className="h-[21px] flex-1 relative leading-[150%] inline-block">
              Message content goes here
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[16px] ">
        <div className="flex flex-col items-end justify-start gap-[10px]">
          <div className="rounded-xl bg-mediumblue-200 flex flex-row items-start justify-start py-2 px-4">
            <div className="relative leading-[150%] inline-block min-w-[70px]">
              woohoooo
            </div>
          </div>
          <div className="rounded-xl bg-mediumblue-200 flex flex-row items-start justify-start py-2 px-4 whitespace-nowrap">
            <div className="relative leading-[150%] inline-block min-w-[88px]">
              Haha oh man
            </div>
          </div>
          <div className="rounded-xl bg-mediumblue-200 flex flex-row items-start justify-start py-2 px-4 whitespace-nowrap">
            <div className="relative leading-[150%] whitespace-nowrap">
              Haha that's terrifying 😂
            </div>
          </div>
        </div>
        <div className="h-10 w-10 rounded-81xl bg-aliceblue-200 overflow-hidden shrink-0 flex flex-row items-start justify-start">
          <div className="h-10 w-10 relative rounded-81xl bg-gray-100 overflow-hidden shrink-0">
            <img
              className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="https://res.cloudinary.com/dx78kzenz/image/upload/v1706526210/timeline_fgjpzm.png"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[27px] max-w-full">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[476px] pl-0 gap-[16px]">
          <img
            className="h-10 w-10 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="https://res.cloudinary.com/dx78kzenz/image/upload/v1708337882/profile_xdakag.png"
          />
          <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[109px]">
            <div className="rounded-xl bg-whitesmoke-200 flex flex-row items-start justify-start py-2 px-4">
              <div className="relative leading-[150%] inline-block min-w-[31px]">
                aww
              </div>
            </div>
            <div className="rounded-xl bg-whitesmoke-200 flex flex-row items-start justify-start py-2 px-4 whitespace-nowrap">
              <div className="relative leading-[150%]">
                omg, this is amazing
              </div>
            </div>
            <div className="rounded-xl bg-whitesmoke-200 flex flex-row items-start justify-start py-2 px-4 whitespace-nowrap">
              <div className="relative leading-[150%] inline-block min-w-[88px] whitespace-nowrap">
                woohoooo 🔥
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[24px] max-w-full text-gray-900">
          <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
          <MessageOutlined />
          </div>
          <div className="flex-1 rounded-xl bg-white box-border overflow-hidden flex flex-row items-start justify-between py-[9px] pr-[22px] pl-[18px] min-w-[132px] max-w-full gap-[20px] border-[2px] border-solid border-gray-gray300">
            <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
              <div className="relative leading-[150%] inline-block min-w-[108px]">
                Type a message
              </div>
            </div>
            <SendOutlined />
          </div>
        </div>
      </div>
    </div>
        </div>
      </div>
      <div className="absolute top-[199px] left-[307px] shadow-[1px_0px_0px_rgba(0,_0,_0,_0.08)] bg-white w-[349px] overflow-hidden flex flex-col items-start justify-start pt-7 px-4 pb-[554px] box-border gap-[32px] text-left text-sm text-black font-body-medium">
      <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-gray-900">
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-2">
            <div className="flex-1 rounded-xl bg-whitesmoke-100 overflow-hidden flex flex-row items-start justify-start py-[13.5px] px-5 whitespace-nowrap">
              <div className="relative leading-[150%] inline-block min-w-[117px]">
                Search messages
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-xl bg-mediumslateblue overflow-hidden flex flex-row items-start justify-start p-3 gap-[14px] text-black">
            <img
              className="h-12 w-12 relative rounded-81xl overflow-hidden shrink-0"
              alt=""
              src="https://res.cloudinary.com/dx78kzenz/image/upload/v1706520514/robotics_curric_b3da8688-1894-463e-a830-4011cf394e60_joytx6.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
              <div className="self-stretch relative leading-[150%] font-semibold">
                Ram Electronics
              </div>
              <div className="shadow-[0px_0px_6px_2px_rgba(219,_188,_159,_0.3)] rounded bg-instagram-secondary flex flex-row items-start justify-start pt-[3px] pb-[2.8px] pr-[4.7px] pl-[7px] text-xs text-darkslategray">
                <div className="h-5 w-5 relative shadow-[0px_0px_6px_2px_rgba(219,_188,_159,_0.3)] rounded bg-instagram-secondary hidden" />
                <div className="relative font-semibold inline-block min-w-[8.3px] z-[1]">
                  2
                </div>
              </div>
            </div>
            <div className="relative leading-[150%] font-semibold text-gray-1000 inline-block min-w-[31px]">
              24m
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-3 text-black">
          <div className="flex-1 flex flex-row items-start justify-start gap-[16px]">
            <div className="h-12 w-12 relative rounded-81xl bg-instagram-light-2 overflow-hidden shrink-0" />
            <div className="flex-1 flex flex-col items-start justify-start pt-[13.5px] px-0 pb-0">
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
                    <div className="flex-1 relative leading-[150%] font-semibold">
                      Sangeetha Mobiles
                    </div>
                    <div className="relative leading-[150%] font-semibold text-gray-1000 inline-block min-w-[28px]">
                      12m
                    </div>
                  </div>
                  <div className="self-stretch h-[18px] relative text-xs leading-[150%] font-semibold text-gray-900 hidden">
                    Haha oh man 🔥
                  </div>
                </div>
                <div className="w-[167px] hidden flex-row items-start justify-start gap-[8px] text-xs text-orange-orange600">
                  <div className="h-[22px] rounded-xl bg-orange-orange200 flex flex-row items-start justify-start py-0.5 px-2 box-border">
                    <div className="self-stretch relative leading-[150%] font-semibold">
                      Question
                    </div>
                  </div>
                  <div className="h-[22px] flex-1 rounded-xl bg-green-green200 flex flex-row items-start justify-start py-0.5 px-2 box-border whitespace-nowrap text-green-green600">
                    <div className="self-stretch flex-1 relative leading-[150%] font-semibold">
                      Help wanted
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-3">
        <div className="flex-1 flex flex-row items-start justify-start gap-[16px]">
          <div className="h-12 w-12 relative rounded-81xl bg-instagram-light-2 overflow-hidden shrink-0" />
          <div className="flex-1 flex flex-col items-start justify-start pt-[13.5px] px-0 pb-0">
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
                  <div className="flex-1 relative leading-[150%] font-semibold">
                    Ram Furniture
                  </div>
                  <div className="relative leading-[150%] font-semibold text-gray-1000 inline-block min-w-[16px]">
                    1h
                  </div>
                </div>
                <div className="self-stretch h-[18px] relative text-xs leading-[150%] font-semibold text-gray-900 hidden">
                  Haha that's terrifying 😂
                </div>
              </div>
              <div className="w-[167px] hidden flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[8px] text-xs text-orange-orange600">
                <div className="h-[22px] rounded-xl bg-orange-orange200 flex flex-row items-start justify-start py-0.5 px-2 box-border">
                  <div className="self-stretch relative leading-[150%] font-semibold">
                    Bug
                  </div>
                </div>
                <div className="h-[22px] flex-1 rounded-xl bg-green-green200 flex flex-row items-start justify-start py-0.5 px-2 box-border text-green-green600">
                  <div className="self-stretch flex-1 relative leading-[150%] font-semibold">
                    Hacktoberfest
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-3">
        <div className="flex-1 flex flex-row items-start justify-start gap-[16px]">
          <div className="h-12 w-12 relative rounded-81xl bg-instagram-light-2 overflow-hidden shrink-0" />
          <div className="flex-1 flex flex-col items-start justify-start pt-[13.5px] px-0 pb-0">
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
                  <div className="flex-1 relative leading-[150%] font-semibold">
                    Poorvika
                  </div>
                  <div className="relative leading-[150%] font-semibold text-gray-1000 inline-block min-w-[18px]">
                    5h
                  </div>
                </div>
                <div className="self-stretch h-[18px] relative text-xs leading-[150%] font-semibold text-gray-900 hidden">
                  omg, this is amazing
                </div>
              </div>
              <div className="w-[167px] hidden flex-row items-start justify-start gap-[8px] text-xs text-orange-orange600">
                <div className="h-[22px] rounded-xl bg-orange-orange200 flex flex-row items-start justify-start py-0.5 px-2 box-border">
                  <div className="self-stretch relative leading-[150%] font-semibold">
                    Question
                  </div>
                </div>
                <div className="h-[22px] flex-1 rounded-xl box-border flex flex-row items-start justify-start py-0.5 px-[7px] whitespace-nowrap text-gray-gray600 border-[1px] border-solid border-gray-gray400">
                  <div className="self-stretch relative leading-[150%] font-semibold">
                    Some content
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-3">
        <div className="flex-1 flex flex-row items-start justify-start gap-[14px]">
          <div className="h-12 w-12 relative rounded-81xl bg-instagram-light-2 overflow-hidden shrink-0" />
          <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
            <div className="self-stretch relative leading-[150%] font-semibold">
              Viswa Hotel
            </div>
            <div className="shadow-[0px_0px_6px_2px_rgba(219,_188,_159,_0.3)] rounded bg-instagram-secondary flex flex-row items-start justify-start pt-[3px] pb-[2.8px] pr-[4.7px] pl-[7px] text-xs text-darkslategray">
              <div className="h-5 w-5 relative shadow-[0px_0px_6px_2px_rgba(219,_188,_159,_0.3)] rounded bg-instagram-secondary hidden" />
              <div className="relative font-semibold inline-block min-w-[8.3px] z-[1]">
                1
              </div>
            </div>
          </div>
          <div className="relative leading-[150%] font-semibold text-gray-1000 inline-block min-w-[18px]">
            2d
          </div>
        </div>
      </div>
    </div>
      <h2 className="m-0 absolute top-[142px] left-[307px] text-5xl leading-[34px] font-medium font-inherit inline-block min-w-[55px] mq450:text-lgi mq450:leading-[27px]">
        Chat
      </h2>
      </>
  )
}

export default Chat