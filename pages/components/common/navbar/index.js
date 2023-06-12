import Link from "next/link";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link className="active" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/blog">Blog Post</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
