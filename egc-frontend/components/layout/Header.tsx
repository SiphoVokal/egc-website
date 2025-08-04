import Link from "next/link";

const Header: React.FC = () => {
    return (
        <header className= "py-4">
            <div className="container mx-auto m-auto flex justify-evenly items-center px-4">
                <h3 className="text-xl">
                    <Link href="/">EGC</Link>
                </h3>
                <nav>
                    <ul className="flex space-x-12">
                        <li className="hover:underline">
                            <Link href="/home">ABOUT</Link>
                        </li>
                        <li className="hover:underline">
                            <Link href="/about">SERVICES</Link>
                        </li>
                        <li className="hover:underline">
                            <Link href="/posts">SERMONS</Link>
                        </li>
                        <li className="hover:underline">
                            <Link href="/home">MINISTRIES</Link>
                        </li>
                        <li className="hover:underline">
                            <Link href="/about">EVENTS</Link>
                        </li>
                        <li className="hover:underline">
                            <Link href="/posts">LATEST</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;