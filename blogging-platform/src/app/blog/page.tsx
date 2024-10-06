import Link from 'next/link';

const posts = [
    { slug: 'first-post', title: 'Samsung Galaxy S23', image: '/images/mobile1.png' },
    { slug: 'second-post', title: 'Apple iPhone 15', image: '/images/mobile2.png' }, 
    { slug: 'third-post', title: 'Google Pixel 7', image: '/images/mobile3.png' },
    { slug: 'fourth-post', title: 'OnePlus 11', image: '/images/mobile4.png' },
    { slug: 'fifth-post', title: 'Xiaomi 13 Pro', image: '/images/mobile5.png' },
    { slug: 'sixth-post', title: 'Oppo Find X5 Pro', image: '/images/mobile6.png' },
    { slug: 'seventh-post', title: 'Sony Xperia 1 IV', image: '/images/mobile7.png' },
    { slug: 'eighth-post', title: 'Vivo X90 Pro', image: '/images/mobile8.png' },
    { slug: 'ninth-post', title: 'Motorola Edge 30 Pro', image: '/images/mobile9.png' },
    { slug: 'tenth-post', title: 'Realme GT 2 Pro', image: '/images/mobile10.png' },
    { slug: 'eleventh-post', title: 'Asus ROG Phone 6', image: '/images/mobile11.png' },
    { slug: 'twelfth-post', title: 'Huawei P50 Pro', image: '/images/mobile12.png' },
    { slug: 'thirteenth-post', title: 'Nokia G60', image: '/images/mobile13.png' },
    { slug: 'fourteenth-post', title: 'Honor Magic 4 Pro', image: '/images/mobile14.png' },
    { slug: 'fifteenth-post', title: 'Nothing Phone (1)', image: '/images/mobile15.png' },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-blue-500 p-8">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-white">Blog Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div key={post.slug} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <Link href={`/blog/${post.slug}`} className="flex flex-col">
              <img src={post.image} alt={post.title} className="w-[60%] ml-16 h-48  transition-transform duration-300 transform hover:scale-110" />
              <div className="p-6 flex-grow">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">{post.title}</h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
