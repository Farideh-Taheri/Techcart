import { useState } from 'react';
import "../App.css";
import { z } from "zod";

const ValidationSchema = z.object({
    firstName: z.string().min(2, "First name is required").regex(/^[A-Za-z]+$/, "First name must contain only letters"),
    lastName: z.string().min(2, "Last name is required").regex(/^[A-Za-z]+$/, "Last name must contain only letters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
})
interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
export function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async() => {
        const validation = ValidationSchema.safeParse({
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            email: email.trim(),
            password: password.trim(),
        });
        if (!validation.success) {
            const firstError = validation.error.errors[0]?.message;
            alert(firstError)
            return;
        }

        const users: User[] = JSON.parse(localStorage.getItem("users") || "[]" );
        const userExists = users.some((user: User) => user.email === email);
            if (userExists) {
                alert("User with this email already exists.");
                return;
            }
        if (password.toLowerCase() === firstName.toLowerCase() || password.toLowerCase() === lastName.toLowerCase()) {
            alert('Password can not be your first name or last name');
            return;
        }

        const newUser = {
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            email: email.trim(),
            password: password.trim()
        };
        
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));

        alert("You have been successfully registered.");
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        };

    return (
    <div className="register-page" style= {{textAlign:"center"}}>
    <h3>Email:</h3>
    <input type="email"
        placeholder="Email"
        className = "border p-2 rounded w-full"
        value = {email}
        onChange={(e) => setEmail(e.target.value) }
    />
    <h3>First Name:</h3>
    <input type="text"
        placeholder="First Name"
        className = "border p-2 rounded w-full"
        value = {firstName}
        onChange={(e) => setFirstName(e.target.value)}
    />
    <h3>Last Name:</h3>
    <input type="text"
        placeholder="Last Name"
        className = "border p-2 rounded w-full"
        value = {lastName}
        onChange={(e) => setLastName(e.target.value)}
    />
    <h3>Password:</h3>
    <input type="password"
        placeholder="Password"
        className = "border p-2 rounded w-full"
        value = {password}
        onChange={(e) => setPassword(e.target.value)}
    /> <br/>
    <br/>
    <button type='button' onClick={handleSubmit} style={{ marginTop: "10px", marginBottom: "10px" }}>Register</button>
    </div>
    )
  }
  