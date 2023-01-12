import React from "react";
import ProfilePicture from "../../images/ProfilePicture.svg";
import MainButton from "../SlimNav/MainButton";
import { IoIosMail } from "react-icons/io";

export default function SlimAside() {
  return (
    <div>
      <div>
        <img src={ProfilePicture} alt="" />
        <h6>Cassie Kozyrkov</h6>
        <p className="aside-paragraph">115K Followers</p>
        <p className="aside-paragraph">
          Chief Decision Scientist, Google. ❤️ Stats, ML/AI, data, puns, art,
          theatre, decision science. All views are my own. twitter.com/quaesita
        </p>
        <div className="d-flex gap-2">
          <MainButton>Follow</MainButton>
          <MainButton>
            <IoIosMail />
          </MainButton>
        </div>
      </div>
    </div>
  );
}
