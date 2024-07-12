import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div>
      <h1 className="text-9xl">Contact</h1>
      <p>
        <Link to="/contact/1">forma de conatato 1</Link>
      </p>

      <p>
        <Link to="/contact/2">forma de conatato 2</Link>
      </p>

      <p>
        <Link to="/contact/3">forma de conatato 3</Link>
      </p>
    </div>
  );
}
