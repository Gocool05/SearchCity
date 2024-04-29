import { useCallback } from "react";
// import { useNavigate } from "react-router-dom";

const Register = () => {

    // const navigate = useNavigate();

    const onRegisterClick = useCallback(() => {

    });
    //   navigate("/");
    // }, [navigate]);
  return (
    <form
      className="m-0 w-[1440px] bg-instagram-light-1 max-w-full overflow-hidden flex flex-col items-center justify-start pt-[241px] px-5 pb-[241.7px] box-border gap-[22.1px] leading-[normal] tracking-[normal] cursor-pointer"
      onClick={onRegisterClick}
    >
      <div className="w-[374px] rounded-smi-6 bg-instagram-light-1 shadow-[0px_21px_31.51px_rgba(147,_154,_176,_0.15)] flex flex-col items-start justify-start pt-[31px] pb-[35px] pr-[27.9px] pl-[29px] box-border gap-[27px] max-w-full mq430:pt-5 mq430:pb-[23px] mq430:box-border">
        <img
          className="w-[374px] h-[430px] relative rounded-smi-6 hidden max-w-full"
          alt=""
          src="/rectangle-101.svg"
        />
        <div className="flex flex-row items-start justify-start py-0 pr-[74px] pl-[73px] mq317:pl-5 mq317:pr-5 mq317:box-border">
          <img
            className="h-14 w-[170px] relative object-cover z-[1]"
            loading="lazy"
            alt=""
            src="https://res.cloudinary.com/dx78kzenz/image/upload/v1714059076/logo_d63y2n.png"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
            <div className="relative text-base font-semibold font-h3-bold text-dimgray-100 text-left inline-block min-w-[65px] z-[1]">
              Register
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-3.5 px-2.5 pb-[1.3px] relative z-[1]">
            <input
          type="text"
          className="w-[276.3px] relative text-sm leading-[24.7px] font-h3-bold text-dimgray-100 text-left p-2 inline-block shrink-0 z-[1] rounded-6xs-3 border-none bg-darkgray"
          placeholder="Mobile Number"
        />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-[14.7px] px-2.5 pb-[1.6px] relative z-[1]">
            <input
          type="text"
          className="w-[276.3px] relative text-sm leading-[24.7px] font-h3-bold text-dimgray-100 text-left p-2 inline-block shrink-0 z-[1] border-none rounded-6xs-3 bg-darkgray"
          placeholder="User Name"
        />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5">
            <div className="flex-1 flex flex-col items-end justify-start gap-[8px]">
              <div className="self-stretch flex flex-row items-start justify-start pt-[14.7px] px-2.5 pb-[12.6px] relative whitespace-nowrap z-[1]">
              <input
          type="text"
          className="w-[276.3px] relative text-sm leading-[24.7px] font-h3-bold text-dimgray-100 text-left p-2 inline-block shrink-0 z-[1] border-none rounded-6xs-3 bg-darkgray"
          placeholder="Enter OTP"
        />
              </div>
              <div className="relative text-xs  font-h3-bold text-#1877F2 text-right inline-block min-w-[70px] z-[1]">
                Resend OTP
              </div>
            </div>
          </div>
        </div>
        <button className="self-stretch border-none rounded-lg bg-gradient-to-r from-[#ff1cf6] via-[#fd6d1c] to-[#de2442] flex flex-row items-start justify-center py-3 pr-5 pl-[21px] z-[1]">
    <div className="h-[42px] w-[315.1px] relative rounded-lg bg-gradient-to-r from-[#ff1cf6] via-[#fd6d1c] to-[#de2442] hidden" />
    <div className="relative text-mini-7 uppercase font-semibold font-h3-bold text-instagram-light-1 text-left inline-block min-w-[78px] z-[1]">
      Submit
    </div>
  </button>
      </div>
      <div className="w-[374px] flex flex-row items-start justify-center py-0 pr-0 pl-px box-border max-w-full">
        <div className="relative text-smi-6 font-h3-bold text-dimgray-100 text-left inline-block min-w-[76.7px]">
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
    </form>
  )
}

export default Register