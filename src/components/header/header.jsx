import hamburgerMenu from "../../assets/icons8-hamburger-menu-50.png";
import youTubeLogo from "../../assets/Black.svg";
import search from "../../assets/loupe.png";
import video from "../../assets/video-camera.png";
import dotsMenu from "../../assets/dots-menu.png";
import ball from "../../assets/notification.png";
import accaunt from "../../assets/avatar-2.png";
import "./header.scss";

function Header() {
  return (
    <header className="header fixed ps-7 pb-5 pt-5 cursor-pointer w-full bg-white">
      <div className="container mx-auto">
        <div className="wrapper flex items-center">
          <a href="/" className="">
            <img
              src={hamburgerMenu}
              width={20}
              height={17}
              alt="hamburgerMenu"
              className="hamburger me-7"
            />
          </a>
          <img src={youTubeLogo} width={116} height={25} alt="youTubeLogo" />
          <form className="form ms-14 me-[100px]">
            <input
              type="text"
              placeholder="Search"
              className="w-[730px] h-[44px] px-3 bg-[#EBEBEB] rounded-3xl "
            />
            <img
              src={search}
              width={18}
              height={18}
              alt="search"
              className="img me-3"
            />
          </form>
          <div className="box flex items-center gap-12 me-3">
            <img src={video} width={27} height={20} alt="videocamera" />
            <img src={dotsMenu} width={21} height={21} alt="dotsMenu" />
            <img src={ball} width={18} height={18} alt="ball" />
          </div>
          <img
            src={accaunt}
            width={40}
            height={40}
            alt="accaunt"
            className="accaunt"
          />
        </div>
      </div>
    </header>
  );
}
export default Header;
