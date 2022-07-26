import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = (props: LayoutProps) => {
  return (
    <>
      <nav className="h-[3vh] py-6 text-white bg-stone-900 shadow-lg shadow-gray-500 min-w-screen">
        <ul className="flex items-center justify-around h-full">
          <h2 className="font-mono text-xl text-yellow-400 basis-1/2 hover:text-white">
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
