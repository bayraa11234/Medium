import ProfilePicture from "../../images/ProfilePicture.svg";
import CommentIcon from "../icon/CommentIcon";
import ReactionIcon from "../icon/ReactionIcon";
import Socialicon from "../icon/Socialicon";
import UploadIcon from "../icon/UploadIcon";
import SaveIcon from "../icon/SaveIcon";
import Content from "./Content";
import Button from "./Button";
import BackBody from "./BackBody";
export default function SlimBody() {
  const text = [
    {
      smallTitle: "",
      paragraph:
        "Happy almost-2023! Chances are that you’re contemplating making some New Year’s resolutions, so let’s get you set up for success with a few resolutions that will unlock the best version of you.  ",
      img: "https://miro.medium.com/max/1400/1*yRE1TACIEdzWswVNaDgvLg.webp",
      copy: "All copyright belongs to the author.",
    },
    {
      smallTitle: "#1 — Resolve to stop borrowing resolutions",
      paragraph:
        "Different people are different, so what works for you might not be what works for anyone else.",
      img: "",
    },
    {
      smallTitle: "",
      paragraph:
        "Understanding this is the single biggest step you can take in the direction of success. That’s precisely why I’m not going to do the standard guru thing of suggesting you copy my exact wellness plan after proving to you that I have a stack of credentials (I do) and I’m in shape (I am). My plan fits me, but you need a plan that fits you.",
      img: "",
    },
    {
      smallTitle: "Quit borrowing other people’s resolutions",
      paragraph:
        "Whenever you’re tempted to copy your favorite celeb’s latest health plan, take a moment to think about some potential reasons that person is able to stick with it (assuming they are) which you might not know about. Do they have a private chef who prevents them from making food decisions? Do they secretly loooove cabbage? Is their job less stressful than yours? And so on.",
      img: "",
    },
  ];
  const ArrBtn = [
    "Resolutions",
    "Decision Making",
    "Psychology",
    "Self Improvement",
    "Science",
  ];
  const nemelt = [
    {
      date: "Dec 24, 2022",
      smallTitle: "2022: The year that changed the way we work",
      paragraph:
        "Remember 2020? So many of us thought that was going to be the big one for the way we work. I thought it would be the year that changes productivity forever. And in many ways it was; it forced us to spring clean our dusty attic of beliefs about what…",
      img: "https://miro.medium.com/max/1400/1*vYY1SEsgBpByheTg9aHNEQ.webp",
      btn: "Productivity",
    },
    {
      date: "Dec 21, 2022",
      smallTitle: "AI: Science Fiction vs Reality",
      paragraph:
        "Will AI fully exit the realm of science fiction and begin to change everything? — Now that everyone is talking about ChatGPT, I’m finding myself dodging some version of this question more often: “Will AI fully ",
      img: "https://miro.medium.com/max/1400/1*vYY1SEsgBpByheTg9aHNEQ.webp",
      btn: "Artificial Intelligence",
    },
    {
      date: "Dec 8, 2022",
      smallTitle: "Introducing ChatGPT!",
      paragraph:
        "The Revolutionary New Tool for Conversation Generation — Today, I want to demystify ChatGPT — a fascinating new application of GANs* (Generative Adversarial Networks) that has been generating a lot of buzz in the AI…",
      img: "https://miro.medium.com/max/1400/1*vYY1SEsgBpByheTg9aHNEQ.webp",
      btn: "Chatgpt",
    },
    {
      date: "· Nov 30, 2022",
      smallTitle:
        "Overusing the Term “Statistically Significant” Makes You Look Clueless",
      paragraph:
        "A primer on interpreting other people’s hypothesis tests — If you’re in the market for a new tongue-twister, try this paraphrase of a classic: “The difference between statistically significant and statistically non-significant is not necessarily significant.",
      img: "https://miro.medium.com/max/1400/1*vYY1SEsgBpByheTg9aHNEQ.webp",
      btn: "Editors Pick",
    },
    {
      date: "· Nov 30, 2022",
      smallTitle: "Why is MSE = Bias² + Variance?",
      paragraph:
        "Introduction to “good” statistical estimators and their properties — The bias-variance tradeoff “The bias-variance tradeoff” is a popular concept you’ll encounter in the context of ML/AI. In building up to making it intuitive,",
      img: "https://miro.medium.com/max/1400/1*vYY1SEsgBpByheTg9aHNEQ.webp",
      btn: "Data Science",
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
              <div className="date">Dec 27, 2022 · 9 min</div>
            </div>
          </div>
          <div className="d-flex social-icon">
            <a>
              <Socialicon />
            </a>
          </div>
        </div>
        <div>
          <Content
            bigTitle="The best New Year’s resolutions you can make"
            items={text}
          />
          <div className="d-flex justify-content-between">
            <ul className="d-flex icon-menu">
              <li>
                <ReactionIcon />
              </li>
              <li>
                <CommentIcon />
              </li>
            </ul>
            <ul className="d-flex icon-menu">
              <li>
                <UploadIcon />
              </li>
              <li>
                <SaveIcon />
              </li>
            </ul>
          </div>
          <div className="d-flex gap-2 ">
            {ArrBtn.map((item, index) => (
              <Button>{item}</Button>
            ))}
          </div>
        </div>
        <BackBody item={nemelt} />
      </div>
    </>
  );
}
