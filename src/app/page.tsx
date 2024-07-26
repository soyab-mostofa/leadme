import Image from "next/image";
import Link from "next/link";

// import { LatestPost } from "~/app/_components/post";
// import { api } from "~/trpc/server";

export default async function Home() {
  // const hello = await api.post.hello({ text: "from tRPC" });

  // void api.post.getLatest.prefetch();

  const mockUrls = [
    "https://utfs.io/f/2cb37e27-8c79-48a5-b494-4deb7b182c8c-s52zr7.png",
    "https://utfs.io/f/2cb37e27-8c79-48a5-b494-4deb7b182c8c-s52zr7.png",
    "https://utfs.io/f/2cb37e27-8c79-48a5-b494-4deb7b182c8c-s52zr7.png",
    "https://utfs.io/f/2cb37e27-8c79-48a5-b494-4deb7b182c8c-s52zr7.png",
    "https://utfs.io/f/2cb37e27-8c79-48a5-b494-4deb7b182c8c-s52zr7.png",
    "https://utfs.io/f/2cb37e27-8c79-48a5-b494-4deb7b182c8c-s52zr7.png",
  ];
  const mockImages = mockUrls.map((url, index) => ({ id: index + 1, url }));

  return (
    <div>
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <Image src={image.url} alt="image" width={300} height={300} />
          </div>
        ))}
      </div>
    </div>
  );
}
