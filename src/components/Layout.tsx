export const Layout = () => {
  return (
    <nav className="h-[3vh] mb-2 py-5 text-white bg-green-800 shadow-lg shadow-gray-500 min-w-screen">
      <ul className="flex items-center justify-around h-full">
        <h2 className="font-mono text-xl text-yellow-400 basis-1/3">Learn SBUX</h2>
        <li>POS</li>
        <li>DRINKS</li>
        <li>OTHER</li>
      </ul>
    </nav>
  );
};
