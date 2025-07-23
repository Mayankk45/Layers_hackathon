import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        localStorage.setItem("user", JSON.stringify(data));
        toast.success("Signup successful!");
        navigate("/login");
    };

    return (
        <div className="signup-page">
            <div className="signup-box">
                <h2>Create Account</h2>
                <p>Sign up to explore Layers</p>

                <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
                    <div className="input-group">
                        <label>Name</label>
                        <input
                            type="text"
                            placeholder="Your full name"
                            {...register("name", {
                                required: "Name is required",
                                minLength: {
                                    value: 3,
                                    message:
                                        "Name should be at least 3 characters",
                                },
                            })}
                        />
                        {errors.name && (
                            <span className="error">{errors.name.message}</span>
                        )}
                    </div>

                    <div className="input-group">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Your email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Enter a valid email",
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
                            placeholder="Create a password"
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

                    <div className="login-redirect">
                        <p>Already have an account?</p>
                        <Link to="/login">Login here</Link>
                    </div>

                    <button type="submit" className="signup-btn">
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
