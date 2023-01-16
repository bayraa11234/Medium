// import { Container } from "react-bootstrap";
import SlimAside from "../components/SlimAside/SlimAside";
import SlimBody from "../components/SlimBody/SlimBody";
import SlimNav from "../components/SlimNav/SlimNav";

export default function Article() {
  return (
    <>
      <SlimNav />
      <div className="container">
        <div className="row">
          <div className="col-7">
            <SlimBody />
          </div>
          <div className="col-1"></div>
          <div className="col-4 ps-3">
            <SlimAside />
          </div>
        </div>
      </div>
    </>
  );
}
