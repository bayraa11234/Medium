import React from "react";
import MainButton from "../SlimNav/MainButton";
import { IoIosMail } from "react-icons/io";

export default function BackBody() {
  const nemelt = [
    {
      date: "Dec 24, 2022",
      smallTitle: "2022: The year that changed the way we work",
      paragraph:
        "Remember 2020? So many of us thought that was going to be the big one for the way we work. I thought it would be the year that changes productivity forever. And in many ways it was; it forced us to spring clean our dusty attic of beliefs about what…",
      img: "https://miro.medium.com/max/1400/1*vYY1SEsgBpByheTg9aHNEQ.webp",
      btn: "Productivity",
      hourAgo: "8 min read",
    },
    {
      date: "Dec 21, 2022",
      smallTitle: "AI: Science Fiction vs Reality",
      paragraph:
        "Will AI fully exit the realm of science fiction and begin to change everything? — Now that everyone is talking about ChatGPT, I’m finding myself dodging some version of this question more often: “Will AI fully ",
      img: "https://miro.medium.com/max/1400/1*vYY1SEsgBpByheTg9aHNEQ.webp",
      btn: "Artificial Intelligence",
      hourAgo: "6 min read",
    },
    {
      date: "Dec 8, 2022",
      smallTitle: "Introducing ChatGPT!",
      paragraph:
        "The Revolutionary New Tool for Conversation Generation — Today, I want to demystify ChatGPT — a fascinating new application of GANs* (Generative Adversarial Networks) that has been generating a lot of buzz in the AI…",
      img: "https://miro.medium.com/max/1400/1*vYY1SEsgBpByheTg9aHNEQ.webp",
      btn: "Chatgpt",
      hourAgo: "7 min read",
    },
    {
      date: "· Nov 30, 2022",
      smallTitle:
        "Overusing the Term “Statistically Significant” Makes You Look Clueless",
      paragraph:
        "A primer on interpreting other people’s hypothesis tests — If you’re in the market for a new tongue-twister, try this paraphrase of a classic: “The difference between statistically significant and statistically non-significant is not necessarily significant.",
      img: "https://miro.medium.com/max/1400/1*vYY1SEsgBpByheTg9aHNEQ.webp",
      btn: "Editors Pick",
      hourAgo: "6 min read",
    },
    {
      date: "· Nov 30, 2022",
      smallTitle: "Why is MSE = Bias² + Variance?",
      paragraph:
        "Introduction to “good” statistical estimators and their properties — The bias-variance tradeoff “The bias-variance tradeoff” is a popular concept you’ll encounter in the context of ML/AI. In building up to making it intuitive,",
      img: "https://miro.medium.com/max/1400/1*vYY1SEsgBpByheTg9aHNEQ.webp",
      btn: "Data Science",
      hourAgo: "8 min read",
    },
  ];
  return (
    <>
      <div className="backBody px-5 py-5">
        <div className="d-flex justify-content-between gap-5">
          <div>
            <p>More from Cassie Kozyrkov</p>
            <p className="aside-paragraph">
              Chief Decision Scientist, Google. ❤️ Stats, ML/AI, data, puns,
              art, theatre, decision science. All views are my own.
              twitter.com/quaesita
            </p>
          </div>
          <div className="d-flex gap-2">
            <MainButton>Follow</MainButton>
            <MainButton>
              <IoIosMail />
            </MainButton>
          </div>
        </div>
        <div>
          {nemelt.map((item, index) => (
            <div className="d-flex gap-5 my-5 border-bottom">
              <div>
                <div className="date my-2">{item.date}</div>
                <h4>{item.smallTitle}</h4>
                <div>{item.paragraph}</div>
                <div className="d-flex my-5 align-items-center gap-3 date">
                  <button className="btn body-btn">{item.btn}</button>
                  <div>{item.hourAgo}</div>
                </div>
              </div>
              <div>
                <img src={item.img} alt="" width="100px" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
