import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = (props: LayoutProps) => {
  return (
    <>
      <nav className="min-w-screen h-[2vh] border-b-2 border-green-900 bg-black py-6 lg:text-lg text-white shadow-lg shadow-gray-500">
        <ul className="flex h-full items-center px-2 justify-around gap-4">
          <h2 className="basis-1/2 font-mono lg:text-xl text-yellow-400 hover:text-white">
            <Link href="/">
              <a>Learn SBUX</a>
            </Link>
          </h2>
          <li className="hover:text-yellow-400">
            <Link href="/drinks">
              <a>DRINKS</a>
            </Link>
          </li>
          <li className="hover:text-yellow-400">
            <Link href="/pos">
              <a>POS</a>
            </Link>
          </li>
          <li className="hover:text-yellow-400">
            <Link href="/quiz">
              <a>QUIZ</a>
            </Link>
          </li>
          <li className="hover:text-yellow-400">
            <Link href="/login">
              <a>LOGIN</a>
            </Link>
          </li>
        </ul>
      </nav>
      {props.children}
    </>
  );
};
