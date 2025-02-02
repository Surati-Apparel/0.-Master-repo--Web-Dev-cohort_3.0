"use client"
import axios from "axios";

export default function SignIn() {
    async function submit() {
        const response = await axios.post("http://localhost:3000/api/signin", { username: "jaimin1", passsword: "1234" });
        localStorage.setItem("token", response.data.token);
    }

    return(<>
        <div><input type="text" placeholder="username" /></div>
        <div><input type="text" placeholder="username" /></div>
        <div><button onClick={submit}>Sign in</button></div>
    </>)
}