"use client";
import { useRouter } from "next/navigation";

const useNavbar = () => {
  const router = useRouter();
  const handleMenu = (key: string) => {
    router.push(`${key}`);
  };
  return {
    handleMenu,
  };
};

export default useNavbar;
