import Link from "next/link";

// import notFound from "/public/images/asdasd.webp";
// import Image from "next/image";

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
      {/* <Image src={notFound} alt="not found cat" width={300} height={300} /> */}
    </div>
  );
}
