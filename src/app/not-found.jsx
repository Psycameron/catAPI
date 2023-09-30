import notFound from "/public/images/new.webp";
import Image from "next/image";

export default function NotFound() {
  return (
    <main>
      <h2>404</h2>
      <p>Oops... Page not found</p>

      <Image src={notFound} alt="not found cat" width={300} height={300} />
    </main>
  );
}
