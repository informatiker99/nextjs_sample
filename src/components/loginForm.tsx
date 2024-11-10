// import { authenticate } from "@/app/lib/actions";

export default function Page() {
  return (
    <form >
      <input type="text" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit" className="border p-2">Login</button>
    </form>
  );
}
