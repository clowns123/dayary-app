import React from "react";

export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <div>
        <form>
          <input type="text" placeholder="email" />
          <input type="text" placeholder="password" />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}
