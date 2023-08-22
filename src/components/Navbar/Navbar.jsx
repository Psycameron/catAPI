import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link href="/voting">Voting</Link>
      <Link href="/breeds">Breeds</Link>
      <Link href="/gallery">Gallery</Link>
    </nav>
  );
}
