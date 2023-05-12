import { Typewritter, AnimatedBackground } from "../components";
import "./Landing.css";

let msgArray = [
  " ",
  "A Software Engineer",
  "Also known as an",
  "Front-end developer",
  "Back-end developer",
  "Full stack developer",
  "Or!",
  '"a coder"',
  " ",
];

function Landing() {
  return (
    <AnimatedBackground>
      <div className="landing-type">
        <div>What am I?</div>
        <Typewritter data={msgArray} />
      </div>
    </AnimatedBackground>
  );
}

export default Landing;
