import React from "react";

export default function AsideArticle() {
  const AsideText = [
    {
      ProfileImg:
        "http://localhost:3000/static/media/ProfilePicture.f7defadb182124506ed4cf57da44ff1a.svg",
      name: "Kurtis Pykes",
      text: "in The Startup",
      title: "Don’t Just Set Goals. Build Systems",
      BigImg: "https://miro.medium.com/fit/c/112/112/0*Nz897vaKH2yJhSQJ",
    },
    {
      ProfileImg:
        "http://localhost:3000/static/media/ProfilePicture.f7defadb182124506ed4cf57da44ff1a.svg",
      name: "Kurtis Pykes",
      text: "in The Startup",
      title: "Don’t Just Set Goals. Build Systems",
      BigImg: "https://miro.medium.com/fit/c/112/112/0*Nz897vaKH2yJhSQJ",
    },
    {
      ProfileImg:
        "http://localhost:3000/static/media/ProfilePicture.f7defadb182124506ed4cf57da44ff1a.svg",
      name: "Kurtis Pykes",
      text: "in The Startup",
      title: "Don’t Just Set Goals. Build Systems",
      BigImg: "https://miro.medium.com/fit/c/112/112/0*Nz897vaKH2yJhSQJ",
    },
    {
      ProfileImg:
        "http://localhost:3000/static/media/ProfilePicture.f7defadb182124506ed4cf57da44ff1a.svg",
      name: "Kurtis Pykes",
      text: "in The Startup",
      title: "Don’t Just Set Goals. Build Systems",
      BigImg: "https://miro.medium.com/fit/c/112/112/0*Nz897vaKH2yJhSQJ",
    },
  ];
  return (
    <>
      <h6 className="my-5">More from Medium</h6>
      {AsideText.map((item, index) => (
        <div className="my-3">
          <div className="d-flex justify-content-between gap-5">
            <div>
              <div className="d-flex align-items-center gap-3">
                <p>
                  <img src={item.ProfileImg} alt="" width="35px" />
                </p>
                <p>{item.name}</p>
                <p>{item.text}</p>
              </div>
              <div>
                <h5>{item.title}</h5>
              </div>
            </div>
            <div>
              <img src={item.BigImg} alt="" width="80px" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
