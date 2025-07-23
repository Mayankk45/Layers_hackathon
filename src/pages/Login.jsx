import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (storedUser) {
            if (
                storedUser.email === data.email &&
                storedUser.password === data.password
            ) {
                toast.success("Login successful!");
                localStorage.setItem("currentUser", JSON.stringify(storedUser));

                setTimeout(() => {
                    navigate("/products");
                }, 700);
            } else {
                toast.error("Invalid email or password.");
            }
        } else {
            toast.warning("No user found. Please sign up first.");
        }
    };

    return (
        <div className="login-page">
            <div className="login-box">
                <h2>Welcome Back</h2>
                <p>Please login to continue</p>
                <form onSubmit={handleSubmit(onSubmit)} className="login-form">
                    <div className="input-group">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Invalid email address",
                                },
                            })}
                        />
                        {errors.email && (
                            <span className="error">
                                {errors.email.message}
                            </span>
                        )}
                    </div>

                    <div className="input-group">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message:
                                        "Password must be at least 6 characters",
                                },
                            })}
                        />
                        {errors.password && (
                            <span className="error">
                                {errors.password.message}
                            </span>
                        )}
                    </div>

                    <button type="submit" className="login-btn">
                        Login
                    </button>
                </form>
                <div className="register">
                    <p>OR</p>
                    <Link to="/signup">Register here</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
