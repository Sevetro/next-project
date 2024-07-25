"use client";

export const LoginButton = () => {
  function dupa() {
    console.log(1);
  }
  return (
    <button onClick={dupa} className="bg-red-600 w-fit h-fit px-5">
      Login
    </button>
  );
};
