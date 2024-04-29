import React from 'react'

const Navbar = () => {
  return (
    <header className="absolute top-[0px] left-[0px] bg-instagram-light-1 w-full flex flex-col items-start justify-start pt-7 px-0 pb-5 box-border gap-[9px] max-w-full z-[1] text-left text-lg text-mediumblue font-base-regular lg:h-auto">
    <div className="self-stretch h-[100px] relative bg-instagram-light-1 hidden" />
    <div className="self-stretch flex flex-row items-start justify-start py-0 px-6 box-border max-w-full">
      <div className="flex-1 flex flex-row items-center  justify-between max-w-full gap-[20px] lg:flex-wrap">
        <img
          className="self-stretch w-[137px] relative max-h-full object-cover min-h-[45px] z-[1]"
          loading="lazy"
          alt=""
          src="https://res.cloudinary.com/dx78kzenz/image/upload/v1714059076/logo_d63y2n.png"
        />
        <div className="w-[732px] flex flex-col items-start justify-end pt-0 px-0 pb-2.5 box-border max-w-full">
          <div
            className="flex flex-row items-start justify-start gap-[8px] cursor-pointer z-[1]"
          >
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              loading="lazy"
              
              alt=""
              src="https://www.kindpng.com/picc/m/108-1084428_budweiser-events-center-colorado-eagles-png-budweiser-location.png"
            />
            <div className="relative leading-[140%] font-medium">
              Select your location
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-0.5 text-black">
          <div className="flex flex-row items-start justify-start gap-[30px]">
            <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
              <img
                className="w-[23px] h-6 relative z-[1]"
                loading="lazy"
                alt=""
                src="https://www.kindpng.com/picc/m/699-6998335_bell-sino-notification-notificao-youtube-icon-cone-youtube.png"
              />
            </div>
            <div className="flex flex-row items-start justify-start gap-[8px]">
              <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                <div className="relative tracking-[-1px] leading-[140%] font-semibold inline-block min-w-[118px] z-[1]">
                  Jeevanantham
                </div>
              </div>
              <div className="h-10 w-10 rounded-81xl bg-aliceblue-200 overflow-hidden shrink-0 flex flex-row items-start justify-start z-[1]">
                <div className="h-10 w-10 relative rounded-81xl bg-gray-100 overflow-hidden shrink-0">
                  <img
                    className="absolute top-[-2px] left-[-2px] w-full h-full overflow-hidden object-cover z-[1]"
                    alt=""
                    src="https://www.kindpng.com/picc/m/24-248729_stockvader-predicted-adig-user-profile-image-png-transparent.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="self-stretch h-px relative box-border shrink-0 z-[1] border-t-[1px] border-solid border-lightsteelblue" />
  </header>
  )
}

export default Navbar