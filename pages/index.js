import { useEffect } from "react";
import { useRouter } from "next/router";
import UserProfileCard from "@/components/UserProfileCard";

export default function Home({ isLoggedIn, userInformation }) {
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) router.push("/login");
  }, [isLoggedIn]);
  return (
    <div>
      <UserProfileCard userInformation={userInformation} />
    </div>
  );
}
