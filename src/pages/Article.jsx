import { Container } from "react-bootstrap";
import SlimBody from "../components/SlimBody/SlimBody";
import SlimNav from "../components/SlimNav/SlimNav";

export default function Article() {
  return (
    <>
      <SlimNav />
      <div className="container">
        <div className="row">
          <div className="col-8">
            <SlimBody />
          </div>
          <div className="col-1"></div>
          <div className="col-3 ps-3">
            <h1>Abrdfbgdbf</h1>
          </div>
        </div>
      </div>
    </>
  );
}
