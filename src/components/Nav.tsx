import { useLocation } from "@solidjs/router";

function LeftNav() {
  return <div class="border-r-[1px] border-r-white border-dashed w-[15rem]"></div>
}

function RightNav() {
  return <div class="border-l-[1px] border-l-white border-dashed w-[15rem]"></div>
}

export default function Nav() {
  const location = useLocation();

  console.log("location = ", location);

  return (
    <nav class="flex px-8 w-[100%] border-b-[1px] border-b-white">
      <LeftNav />
      <div class="flex w-full items-center px-8 py-5 ">
        <img src="/logo-white.svg" width={50} height={50} />
        <div class="flex ml-auto gap-8">
          <a>Home</a>
          <a>Challenges</a>
          <a>Login</a>
        </div>
      </div>
      <RightNav />
    </nav>
  );
}
