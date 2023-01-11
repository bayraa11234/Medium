import ProfilePicture from "../../images/ProfilePicture.svg";
import BigPicture from "../../images/BigPicture.svg";
import Socialicon from "../Socialicon";
export default function SlimBody() {
  const text = [
    {
      title: "",
      paragraph:
        "Happy almost-2023! Chances are that you’re contemplating making some New Year’s resolutions, so let’s get you set up for success with a few resolutions that will unlock the best version of you.",
    },
    {
      title: "#1 — Resolve to stop borrowing resolutions",
      paragraph:
        "Different people are different, so what works for you might not be what works for anyone else.",
    },
    {
      title: "",
      paragraph:
        "Understanding this is the single biggest step you can take in the direction of success. That’s precisely why I’m not going to do the standard guru thing of suggesting you copy my exact wellness plan after proving to you that I have a stack of credentials (I do) and I’m in shape (I am). My plan fits me, but you need a plan that fits you.",
    },
    {
      title: "Quit borrowing other people’s resolutions",
      paragraph:
        "Whenever you’re tempted to copy your favorite celeb’s latest health plan, take a moment to think about some potential reasons that person is able to stick with it (assuming they are) which you might not know about. Do they have a private chef who prevents them from making food decisions? Do they secretly loooove cabbage? Is their job less stressful than yours? And so on.",
    },
  ];
  return (
    <>
      <div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <img src={ProfilePicture} alt="" />
            <div className="p-3">
              <h6>Cassie Kozyrkov</h6>
              <div className="date">Cec 27, 2022 9 min</div>
            </div>
          </div>
          <div className="d-flex social-icon">
            <Socialicon />
          </div>
        </div>
        <div>
          <h1>The best New Year’s resolutions you can make</h1>
          <p className="title">
            Resolutions that actually work, according to a decision scientist
          </p>
          <p className="paragraph">
            Happy almost-2023! Chances are that you’re contemplating making some
            New Year’s resolutions, so let’s get you set up for success with a
            few resolutions that will unlock the best version of you.
          </p>
          <img src={BigPicture} alt="" width="100%" />
        </div>
      </div>
    </>
  );
}
