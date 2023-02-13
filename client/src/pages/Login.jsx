import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-32">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form className="max-w-md mx-auto">
          <input type="email" placeholder="your@email.com" />
          <input type="password" placeholder="password" />
          <button className="primary" type="submit">
            Login
          </button>
          <div className="text-gray-500 text-center py-3">
            Don't have an account yet?{" "}
            <Link className="underline" to={"/register"}>
              Register Now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
