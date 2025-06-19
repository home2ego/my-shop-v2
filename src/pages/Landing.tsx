import { Link } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  return (
    <>
      <h1>Online shopping simplified</h1>
      <p className="landing-tagline text-dimmed">
        Order your groceries from MyShop with our easy to use app, and get your
        products delivered straight to your doorstep.
      </p>

      <div className="landing-wrapper">
        <Link className="btn-link btn-link__secondary" to="/products">
          Start shopping
        </Link>

        <img
          width="400"
          height="400"
          src="/landing.svg"
          alt="Shopping cart display with purchases"
        />
      </div>
    </>
  );
};

export default Landing;
