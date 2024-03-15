import ReactPlayer from "react-player";
import { FaWhatsapp } from "react-icons/fa";
import "./App.css";

const videoURL = "https://youtu.be/jg5d59ligW4?si=li5QDGXUBYy3jIml";
function App() {
  return (
    <div className="App">
      <div className="top">
        <div className="top-l">
          <h1 className="head">Mobishaala</h1>
          <p className="p1">
            Create your <span className="span">Digital classroom</span> in 5
            mins for <span className="span">FREE</span> <br /> & connect to 1+
            Million Studets
          </p>
          <ul className="ul">
            <li>No technical knowledge required.</li>
            <li>Quickly setup live class,tests,notes,ebooks and more.</li>
            <li>React out to million of students anywhere,anytime.</li>
          </ul>
        </div>
        <div className="top-r">
          <ReactPlayer
            url={videoURL}
            className="video"
            height={250}
            width={450}
          />
          <button className="but">Buy</button>
        </div>
      </div>
      <div className="bottom">
        <p className="p2">Institute/Teacher</p>
        <button className="but-1">Get Started</button>
        <p className="p2">Student</p>
        <button className="but-1">Download App</button>

        <button className="but-w">
          <FaWhatsapp /> Talk to Us
        </button>
      </div>
      <div className="footer">
        <h1 className="head-1">Mobishaala</h1>
        <div className="cont">
          <p>Vision</p>
          <p>
            Empower Institute and Teachers with state of the art digital
            classroom Technology.
          </p>
        </div>
        <div className="cont">
          <p>Vision</p>
          <p>
            Empower Institute and Teachers with state of the art digital
            classroom Technology.
          </p>
        </div>
        <div className="cont">
          <p>Vision</p>
          <p>
            Empower Institute and Teachers with state of the art digital
            classroom Technology.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
