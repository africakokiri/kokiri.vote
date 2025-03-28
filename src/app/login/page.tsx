import Image from "next/image";

export default function Login() {
  return (
    <div className="flex h-dvh w-dvw items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <Image
          src="/icons/kokiri.svg"
          alt=""
          width={128}
          height={128}
        />
        <p className="text-2xl font-extrabold">콕끼리~~~~~</p>
      </div>
      <button
        className="absolute bottom-16 h-16 w-[80%] rounded-full
bg-yellow-400 text-xl font-bold"
      >
        카카오 로그인
      </button>
    </div>
  );
}
