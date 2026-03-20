export default function Login() {
  return (
    <div className="login-page">
      <h2>Login to UniGrid</h2>

      <input type="email" placeholder="College Email" />
      <input type="password" placeholder="Password" />

      <button className="login-submit">Login</button>

      <p className="note">
        ⚠ Only use college email
      </p>

      
    </div>
  );
}