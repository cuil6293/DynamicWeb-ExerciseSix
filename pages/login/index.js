import { useEffect } from "react";
import { useRouter } from "next/router";
import LoginForm from "@/components/LoginForm";

export default function Login({ loginUserFunction, isLoggedIn }) {
  const router = useRouter();
  useEffect(() => {
    if (isLoggedIn) router.push("/");
  }, [isLoggedIn]);

  return (
    <div>
      <LoginForm loginUserFunction={loginUserFunction} />
    </div>
  );
}
