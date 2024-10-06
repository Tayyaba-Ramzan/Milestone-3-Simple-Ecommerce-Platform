import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center p-4 sm:p-8">
      <div className="max-w-md sm:max-w-3xl text-center bg-white p-8 shadow-lg rounded-xl transform transition-transform hover:scale-105">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-gray-800 tracking-tight">
          Explore Content Anytime, Anywhere
        </h1>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Dive into our mobile-friendly blog where engaging content meets convenience! Discover insightful posts and share your insights with fellow readers, all from the comfort of your mobile device.
        </p>

        <Link
          href="/blog"
          className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-5 rounded-full font-semibold shadow-lg transition-transform hover:bg-blue-700 hover:shadow-xl"
        >
          Explore Blog Posts
        </Link>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Latest Posts</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <li className="relative rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
              <Link href="/blog/fifth-post">
                <Image
                  src="/images/mobile5.png"
                  alt="Oppo Find X5 Pro"
                  className="w-[80%] h-auto object-cover transition-transform duration-300 ml-8"
                  width={300}
                  height={300}
                />
              </Link>
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-3 rounded-b-lg text-center">
                <h3 className="font-bold text-lg">Oppo Find X5 Pro</h3>
              </div>
            </li>

            <li className="relative rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
              <Link href="/blog/second-post">
                <Image
                  src="/images/mobile2.png"
                  alt="Apple iPhone 15"
                  className="w-[80%] h-auto object-cover transition-transform duration-300 ml-8"
                  width={300}
                  height={300}
                />
              </Link>
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-3 rounded-b-lg text-center">
                <h3 className="font-bold text-lg">Apple iPhone 15</h3>
              </div>
            </li>

            <li className="relative rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 ml-38">
              <Link href="/blog/third-post">
                <Image
                  src="/images/mobile3.png"
                  alt="Google Pixel 7"
                  className="w-[80%] h-auto object-cover transition-transform duration-300 ml-8"
                  width={300}
                  height={300}
                />
              </Link>
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-3 rounded-b-lg text-center">
                <h3 className="font-bold text-lg">Google Pixel 7</h3>
              </div>
            </li>
            <li className="relative rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 ml-38">
              <Link href="/blog/fourth-post">
                <Image
                  src="/images/mobile4.png"
                  alt="OnePlus 11"
                  className="w-[80%] h-auto object-cover transition-transform duration-300 ml-8"
                  width={300}
                  height={300}
                />
              </Link>
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-3 rounded-b-lg text-center">
                <h3 className="font-bold text-lg">OnePlus 11</h3>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
