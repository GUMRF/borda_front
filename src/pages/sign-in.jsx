import { useState } from "react";
import { useGetAuthMutation } from "../api/auth";

export function SignIn() {
  const [newLogin, setNewLogin] = useState("");
  const [newPass, setNewPass] = useState("");
  const [inputLogin, {}] = useGetAuthMutation();

  const handleLogin = async () => {
    if (newLogin) {
      await inputLogin({
        password: newPass,
        username: newLogin,
      }).unwrap();
      setNewLogin("");
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={newLogin}
          onChange={(e) => setNewLogin(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          value={newPass}
          onChange={(e) => setNewPass(e.target.value)}
        />
      </div>
      <button
        type="button"
        class="px-5 py-2.5 text-black bg-white focus:ring-4 focus:outline-none focus:ring-grey font-medium rounded-lg text-sm text-center"
        onClick={handleLogin}
      ></button>
    </>
  );
}
