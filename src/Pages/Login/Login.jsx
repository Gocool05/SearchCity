import React from 'react'
import { useCallback } from "react";

const Login = () => {

    const onDesktop25Click = useCallback(() => {
        // Please sync "Register" to the project
      }, []);

  return (
    <div
      className="w-[1440px] bg-instagram-light-1 max-w-full overflow-hidden flex flex-col items-center justify-start pt-[241px] px-5 pb-[241.7px] box-border gap-[63px] leading-[normal] tracking-[normal] cursor-pointer text-left text-[12.6px] text-dimgray-100 font-h3-bold mq450:gap-[31px]"
      onClick={onDesktop25Click}
    >
      <form className="m-0 w-[374px] rounded-smi-6 bg-instagram-light-1 shadow-[0px_21px_31.51px_rgba(147,_154,_176,_0.15)] flex flex-col items-start justify-start pt-[31px] px-[29px] pb-[50px] box-border gap-[49px] max-w-full mq450:gap-[24px] mq450:pt-5 mq450:pb-8 mq450:box-border">
  <img
    className="w-[374px] h-[390px] relative rounded-smi-6 hidden max-w-full"
    alt=""
    src="/rectangle-10.svg"
  />
  <div className="self-stretch flex flex-col items-end justify-start gap-[27px]">
    <div className="flex flex-row items-start justify-end py-0 pr-[72.1px] pl-[73px] mq450:pl-5 mq450:pr-5 mq450:box-border">
      <img
        className="h-14 w-[170px] relative object-cover z-[1]"
        loading="lazy"
        alt=""
        src="https://res.cloudinary.com/dx78kzenz/image/upload/v1714059076/logo_d63y2n.png"
      />
    </div>
    <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
      <div className="relative text-base font-semibold font-h3-bold text-dimgray-100 text-left inline-block min-w-[65px] z-[1]">
        LOGIN
      </div>
      {/* Mobile Number Input Field */}
      <div className="self-stretch flex flex-row items-start justify-start pt-3.5 px-2.5 pb-[13.3px] relative whitespace-nowrap z-[1]">
        <input
          type="text"
          className="w-[276.3px] relative text-sm leading-[24.7px] font-h3-bold text-dimgray-100 text-left p-2 inline-block shrink-0 z-[1] rounded-6xs-3 border-none bg-darkgray"
          placeholder="Mobile Number"
        />
      </div>
      {/* User Name Input Field */}
      <div className="self-stretch flex flex-row items-start justify-start pt-3.5 px-2.5 pb-[13.3px] relative whitespace-nowrap z-[1]">
        <input
          type="text"
          className="w-[276.3px] relative text-sm leading-[24.7px] font-h3-bold text-dimgray-100 text-left p-2 inline-block shrink-0 z-[1] border-none rounded-6xs-3 bg-darkgray"
          placeholder="User Name"
        />
      </div>
    </div>
  </div>
  {/* Continue Button */}
  <button className="self-stretch border-none rounded-lg bg-gradient-to-r from-[#ff1cf6] via-[#fd6d1c] to-[#de2442] flex flex-row items-start justify-center py-3 pr-5 pl-[21px] z-[1]">
    <div className="h-[42px] w-[315.1px] relative rounded-lg bg-gradient-to-r from-[#ff1cf6] via-[#fd6d1c] to-[#de2442] hidden" />
    <div className="relative text-mini-7 uppercase font-semibold font-h3-bold text-instagram-light-1 text-left inline-block min-w-[78px] z-[1]">
      Login
    </div>
  </button>
  <a  href='https://strapi.tamilvaidhyam.com/api/connect/keycloak' className="self-stretch border-none rounded-lg bg-gradient-to-r from-[#ff1cf6] via-[#fd6d1c] to-[#de2442] flex flex-row items-start justify-center py-3 pr-5 pl-[21px] z-[1]">
    <div className="h-[42px] w-[315.1px] relative rounded-lg bg-gradient-to-r from-[#ff1cf6] via-[#fd6d1c] to-[#de2442] hidden" />
    <div className="relative text-mini-7 uppercase font-semibold font-h3-bold text-instagram-light-1 text-left inline-block min-w-[78px] z-[1]">
      Keyclock
    </div>
  </a>
</form>
      <div className="w-[373.7px] flex flex-col items-start justify-start gap-[21.1px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px]">
          <div className="relative inline-block min-w-[76.7px] shrink-0 [debug_commit:1de1738]">
            Get the App.
          </div>
        </div>
        <div className="flex flex-row flex-wrap items-start justify-center gap-[20.9px] shrink-0 [debug_commit:1de1738] text-mini-7 text-gray-300 font-nexa">
          <img
            className="self-stretch w-[176.4px] relative max-h-full min-h-[53px]"
            loading="lazy"
            alt=""
            src="https://res.cloudinary.com/dx78kzenz/image/upload/v1714060333/APPSTORE_yd0woc.png"
          />
          <img
            className="self-stretch w-[176.4px] relative max-h-full min-h-[53px]"
            loading="lazy"
            alt=""
            src="https://res.cloudinary.com/dx78kzenz/image/upload/v1714060334/PLAYSTORE_zhpsxd.png"
          />
        </div>
      </div>
    </div>
  )
}

export default Login