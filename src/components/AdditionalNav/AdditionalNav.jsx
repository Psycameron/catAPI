import Link from "next/link";

export default function AdditionalNav() {
  return (
    <div>
      <Link href="/likes">Likes</Link>
      <Link href="/favourites">Fav</Link>
      <Link href="/dislikes">Dislikes</Link>
    </div>
  );
}
