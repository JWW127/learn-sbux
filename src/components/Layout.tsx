import Link from "next/link";
export const Layout = () => {
  return (
    <nav className="h-[3vh] mb-2 py-5 text-white bg-green-800 shadow-lg shadow-gray-500 min-w-screen">
      <ul className="flex items-center justify-around h-full">
        <h2 className="font-mono text-xl text-yellow-400 basis-1/3"><Link href="/"><a>Learn SBUX</a></Link></h2>
        <li><Link href="/pos"><a>POS</a></Link></li>
        <li><Link href="/drinks"><a>DRINKS</a></Link></li>
        <li>OTHER</li>
      </ul>
    </nav>
  );
};
