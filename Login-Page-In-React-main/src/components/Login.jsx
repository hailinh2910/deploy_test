import Image from "../assets/image.png";
import Logo from "../assets/logo.png";

const Login = () => {
  return (
    <div className="login-main">
      <div className="login-left">
        <img src={Image} alt="Decorative" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="login-center">
            <h2>Du lịch Hải Dương</h2>
            <p>Welcome back! Please enter your details to continue.</p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
