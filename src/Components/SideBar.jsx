import { useNavigate } from "react-router-dom";
import {
  GiftOutlined,
  HomeOutlined, RadiusBottomleftOutlined, SettingOutlined, UserAddOutlined, WechatWorkOutlined,
} from '@ant-design/icons';
const SideBar = () => {
 const navigate = useNavigate();
 const home = () =>{
  navigate("/");
 }
 const topSaver = () =>{
  navigate("/topSaver");
 }
 const chat = () =>{
  navigate("/chat");
 }


  return (
    
    <div className="relative top-[80px] left-[0px] bg-instagram-light-1 box-border w-[266px] h-[1187px] flex flex-col items-start justify-start pt-[30px] px-[23px] pb-8 gap-[12px] text-left text-lg text-gray-200 font-base-regular border-r-[1px] border-solid border-aliceblue-100">
      <div className="self-stretch rounded-lg flex flex-row items-start justify-start py-[15.5px] px-4 gap-[16px] top-[0] z-[99]">
      <HomeOutlined />
        <div onClick={home} className="relative leading-[140%] font-medium inline-block min-w-[52px]">
          Home
        </div>
      </div>
      <div
        className="rounded-lg flex flex-row items-start justify-start py-[15.5px] px-4 gap-[16px] cursor-pointer"
     
      >
    <UserAddOutlined/>
        <div  onClick={topSaver} className="relative leading-[140%] font-medium">
          Top Smart Saver
        </div>
      </div>
      <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[12px]">
        <div
          className="self-stretch rounded-lg flex flex-row items-start justify-start py-[15.5px] px-4 gap-[16px] cursor-pointer"
   
        >
        <WechatWorkOutlined />
          <div onClick={chat} className="flex-1 relative leading-[140%] font-medium">
            Chats
          </div>
          <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 text-xs text-darkslategray">
            <div className="shadow-[0px_0px_6px_2px_rgba(219,_188,_159,_0.3)] rounded bg-instagram-secondary flex flex-row items-start justify-start pt-[3px] pb-[2.8px] pr-[5.7px] pl-1.5">
              <div className="h-5 w-5 relative shadow-[0px_0px_6px_2px_rgba(219,_188,_159,_0.3)] rounded bg-instagram-secondary hidden" />
              <div className="relative font-semibold inline-block min-w-[8.3px] z-[1]">
                3
              </div>
            </div>
          </div>
        </div>
        <div
          className="self-stretch rounded-lg flex flex-row items-start justify-start py-[15.5px] px-4 gap-[16px] cursor-pointer"
    
        >
       <GiftOutlined />
          <div className="relative leading-[140%] font-medium inline-block min-w-[120px]">
            Refer a Friend
          </div>
        </div>
        <div
          className="self-stretch rounded-lg flex flex-row items-start justify-start py-[15.5px] px-4 gap-[16px] cursor-pointer"

        >
          <SettingOutlined />
          <div className="relative leading-[140%] font-medium inline-block min-w-[81px]">
            My Coins
          </div>
        </div>
        <div
          className="self-stretch rounded-lg flex flex-row items-start justify-start py-[15.5px] px-4 gap-[16px] cursor-pointer"
       
        >
          <SettingOutlined />
          <div className="relative leading-[140%] font-medium inline-block min-w-[72px]">
            Settings
          </div>
        </div>
        <div className="rounded-lg flex flex-row items-start justify-start py-[15.5px] pr-[11px] pl-4 gap-[16px]">
        <SettingOutlined />
          <div className="relative leading-[140%] font-medium">
            About SmartSave
          </div>
        </div>
      </div>
      <div className="self-stretch rounded-lg flex flex-row items-start justify-start py-[15.5px] px-4">
        <div className="relative leading-[140%]">{`Privacy & Policy`}</div>
      </div>
    </div>
  )
}

export default SideBar