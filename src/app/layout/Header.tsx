"use client";
export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4 w-full">
          <h1 className="text-2xl font-bold">Fresh</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
