"use client";

import { usePathname } from "next/navigation";

export function SwitchPlatform() {
  const pathname = usePathname();
  const parts = pathname.split("/");
  const page = parts[2];
  const isBrickPage = page === "brick";
  const clickHandler = () => {
    if (isBrickPage) {
      window.location.href = "/";
    } else {
      window.location.href = "/brick";
    }
  };
  return (
    <>
      <button
        onClick={clickHandler}
        type="submit"
        className="text-white w-full bg-tertiary text-sm font-normal p-3 justify-self-end"
      >
        {isBrickPage ? "Switch to Onyx" : "Switch to Bricks"}
      </button>
    </>
  );
}
