import { Link, useLocation, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import toast from 'react-hot-toast';
AOS.init();

const Login = () => {
  const { loginUser, googleLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  //   console.log(location.state);

  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // resetting the form
    e.currentTarget.reset();

    loginUser(email, password)
      .then(res => {
        console.log(res.user);
        toast.success('Signed in successfully!');
        navigate(location?.state ? location.state : '/');
      })
      .catch(error => toast.error(error.message));
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success('Successfully signed in using Google');
        navigate(location?.state ? location.state : '/');
      })
      .catch(error => toast.error(error.message));
  };

  return (
    <div data-aos="zoom-in">
      <div className="hero bg-transparent mt-10 mb-28">
        <div className="hero-content">
          <div className="card w-[375px] shadow-2xl bg-base-100 bg-opacity-20 py-6">
            <h1 className="text-4xl font-bold text-center text-white">
              Login now!
            </h1>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Your password"
                  className="input input-bordered"
                  required
                />
                <label className="mt-4 text-right text-white text-sm">
                  <span>
                    Not a member?{' '}
                    <Link
                      to="/register"
                      className="text-amber-300 text-base font-bold hover:text-white"
                    >
                      Register
                    </Link>
                  </span>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-warning text-base">
                  Login
                </button>
              </div>
            </form>
            <div className="px-8 mb-4">
              <div className="flex items-center mb-8">
                <div className="border h-[1px] w-full"></div>
                <p className="text-white mx-2"> OR </p>
                <div className="border h-[1px] w-full"></div>
              </div>
              <div className="relative">
                <button
                  onClick={handleGoogleLogin}
                  className="btn btn-info btn-outline bg-base-200 w-full text-base capitalize"
                >
                  Continue with Google
                </button>
                <img
                  className="w-8 top-2 left-4 absolute"
                  src="/google.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
