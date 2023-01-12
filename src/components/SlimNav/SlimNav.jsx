import NavbarDropdown from "./NavbarDropdown";
import MainButton from "./MainButton";
import SearchIcon from "./Search-icon";
import WriteIcon from "./WriteIcon";
import ProfilePicture from "../../images/ProfilePicture.svg";
import logoSmall from "../../images/logoSmall.svg";

export default function SlimNav() {
  const dropdownItems = [
    { label: "Profile", link: "#" },
    { label: "Inbox", link: "#" },
    { label: "Settings", link: "#" },
    { label: "---", link: "#" },
    { label: "Sign out", link: "#" },
  ];

  return (
    <>
      <div className="d-flex justify-content-between py-2 px-4 slim-nav">
        <div>
          <div className="d-flex">
            <img src={logoSmall} alt="" className="me-3" />
            <form className="position-relative">
              <input
                type="text"
                className="form-control search-input"
                placeholder="Search Medium"
              />
              <button className="btn search-button">
                <SearchIcon />
              </button>
            </form>
          </div>
        </div>
        <div>
          <ul className="d-flex align-items-center slim-nav-menu">
            <li>
              <a href="#" className="slim-nav-link">
                <WriteIcon /> Write
              </a>
            </li>
            <li>
              <MainButton>Sign up</MainButton>
            </li>
            <li>
              <a href="#" className="slim-nav-link">
                Sign in
              </a>
            </li>
            <li>
              <NavbarDropdown img={ProfilePicture} items={dropdownItems} />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
