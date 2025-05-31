import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import "../App.css";
interface LoginFormInputs {
  firstName: string;
  email: string;
  password: string;
}

export function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit = (data: LoginFormInputs) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const matchedUser = users.find(
      (user: any) =>
        user.firstName === data.firstName &&
        user.email.toLowerCase() === data.email.toLowerCase() &&
        user.password === data.password
    );

    if (matchedUser) {
      alert(`Welcome to TechCart ${matchedUser.firstName}`);
      navigate("/");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };
    return (
    <div style= {{textAlign:"center"}}>
    <h2>Login Page</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
    <h3>First Name:</h3>
    <input type="text"
        placeholder="First Name"
        className = "border p-2 rounded w-full"
        {...register("firstName", { required: true })}
    />
    {errors.firstName && <p style={{ color: "red" }}>First name is required</p>}
    <h3>Email:</h3>
    <input type="email"
        placeholder="Email"
        className = "border p-2 rounded w-full"
        {...register("email", { required: true })}
    />
    {errors.email && <p style={{ color: "red" }}>Email is required</p>}
    <h3>Password:</h3>
    <input type="password"
        placeholder="Password"
        className = "border p-2 rounded w-full"
        {...register("password", { required: true })}
    /> <br/>
    {errors.password && <p style={{ color: "red" }}>Password is required</p>}
    <br/>
    <button type='submit' style={{ marginTop: "10px", marginBottom: "10px" }}>Sign in</button>
    </form>
    </div>
    )
  }