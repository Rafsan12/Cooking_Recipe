import { GoogleAuthProvider } from "firebase/auth";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context";
import { auth } from "../../firebase.init";

export default function Login() {
  const { loginUserWithEmailAndPassword, CreateUserWithGoogle } =
    useContext(AuthContext);
  const provider = new GoogleAuthProvider();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    const { email, password } = data;
    try {
      await loginUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await CreateUserWithGoogle(auth, provider);

      navigate("/");
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900">
              Login now!
            </h1>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <form onSubmit={handleSubmit(handleLogin)} className="space-y-6">
              <div className="form-control">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  {...register("email", { required: "Email is required" })}
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="form-control">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  id="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Your Password Must be 8 characters",
                    },
                    pattern: {
                      value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#]).+$/,
                      message:
                        "Password must include an uppercase letter, a number, and a special character",
                    },
                  })}
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter your password"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.password.message}
                  </p>
                )}
                <div className="mt-2 text-right">
                  <Link
                    to="/forgot-password"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-500">OR</p>
              <button
                onClick={handleGoogleLogin}
                className="mt-2 w-full flex justify-center py-2 px-4 border border-gray-300 rounded-full shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-100"
              >
                <span className="text-gray-600 text-lg">Google Login</span>
              </button>
            </div>
          </div>
          <p className="mt-2 text-sm text-center text-gray-600">
            No Account?{" "}
            <Link
              to="/register"
              className="font-medium text-blue-600 hover:underline"
            >
              Create an Account
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
