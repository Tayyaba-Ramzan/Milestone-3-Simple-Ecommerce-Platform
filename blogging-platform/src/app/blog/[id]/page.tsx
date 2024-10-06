'use client';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';

// Sample blog posts data
const blogPosts = {
  'first-post': {
    title: 'Samsung Galaxy S23 Overview',
    content: 'Explore the amazing features of the Samsung Galaxy S23, including its advanced camera and performance enhancements.',
    image: '/images/mobile1.png',
    mobileName: 'Samsung Galaxy S23',
  },
  'second-post': {
    title: 'Apple iPhone 15 Features',
    content: 'Discover the latest updates and features of the Apple iPhone 15, a powerhouse in the smartphone market.',
    image: '/images/mobile2.png',
    mobileName: 'Apple iPhone 15',
  },
  'third-post': {
    title: 'Google Pixel 7 Review',
    content: 'A deep dive into the Google Pixel 7, highlighting its exceptional camera capabilities and software features.',
    image: '/images/mobile3.png',
    mobileName: 'Google Pixel 7',
  },
  'fourth-post': {
    title: 'OnePlus 11 Unboxing',
    content: 'Unboxing the OnePlus 11, showcasing its design, performance, and value for money.',
    image: '/images/mobile4.png',
    mobileName: 'OnePlus 11',
  },
  'fifth-post': {
    title: 'Xiaomi 13 Pro Insights',
    content: 'Get insights into the Xiaomi 13 Pro, known for its fast charging and impressive display.',
    image: '/images/mobile5.png',
    mobileName: 'Xiaomi 13 Pro',
  },
  'sixth-post': {
    title: 'Oppo Find X5 Pro Features',
    content: 'Exploring the high-end features of the Oppo Find X5 Pro, including its camera technology and battery life.',
    image: '/images/mobile6.png',
    mobileName: 'Oppo Find X5 Pro',
  },
  'seventh-post': {
    title: 'Sony Xperia 1 IV Analysis',
    content: 'Analyzing the Sony Xperia 1 IV, a top choice for photography enthusiasts with its versatile camera setup.',
    image: '/images/mobile7.png',
    mobileName: 'Sony Xperia 1 IV',
  },
  'eighth-post': {
    title: 'Vivo X90 Pro Overview',
    content: 'An overview of the Vivo X90 Pro, focusing on its premium design and performance.',
    image: '/images/mobile8.png',
    mobileName: 'Vivo X90 Pro',
  },
  'ninth-post': {
    title: 'Motorola Edge 30 Pro Review',
    content: 'Reviewing the Motorola Edge 30 Pro, emphasizing its display and processing power.',
    image: '/images/mobile9.png',
    mobileName: 'Motorola Edge 30 Pro',
  },
  'tenth-post': {
    title: 'Realme GT 2 Pro Features',
    content: 'Highlighting the standout features of the Realme GT 2 Pro, known for its gaming performance.',
    image: '/images/mobile10.png',
    mobileName: 'Realme GT 2 Pro',
  },
  'eleventh-post': {
    title: 'Asus ROG Phone 6 Review',
    content: 'A comprehensive review of the Asus ROG Phone 6, designed specifically for gamers.',
    image: '/images/mobile11.png',
    mobileName: 'Asus ROG Phone 6',
  },
  'twelfth-post': {
    title: 'Huawei P50 Pro Insights',
    content: 'Insights into the Huawei P50 Pro, with its stunning camera features and performance.',
    image: '/images/mobile12.png',
    mobileName: 'Huawei P50 Pro',
  },
  'thirteenth-post': {
    title: 'Nokia G60 Features',
    content: 'Exploring the Nokia G60, focusing on its durability and performance.',
    image: '/images/mobile13.png',
    mobileName: 'Nokia G60',
  },
  'fourteenth-post': {
    title: 'Honor Magic 4 Pro Overview',
    content: 'An overview of the Honor Magic 4 Pro, emphasizing its premium features and camera quality.',
    image: '/images/mobile14.png',
    mobileName: 'Honor Magic 4 Pro',
  },
  'fifteenth-post': {
    title: 'Nothing Phone (1) Review',
    content: 'Reviewing the Nothing Phone (1), highlighting its unique design and performance.',
    image: '/images/mobile15.png',
    mobileName: 'Nothing Phone (1)',
  },
};

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts[id as keyof typeof blogPosts];

  const [comments, setComments] = useState<string[]>([]);
  const [comment, setComment] = useState('');

  const handleAddComment = () => {
    if (comment.trim()) {
      setComments((prevComments) => [...prevComments, comment]);
      setComment('');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-blue-500 p-6">
      <div className="bg-white shadow-xl rounded-lg max-w-lg w-full p-6 mx-auto">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">
          {post.mobileName}
        </h2>
        
        <Image
          src={post.image}
          alt={post.title}
          className="rounded-lg mb-4 w-[60%]  ml-20"
          width={500}
          height={300}
        />
        
        <h1 className="text-3xl font-bold text-center mb-4 text-gray-900">{post.title}</h1>
        
        {/* Post Content */}
        <p className="text-lg text-gray-700 mb-6">{post.content}</p>

        <div className="comments-section">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Comments</h2>
          <ul className="space-y-4 mb-4">
            {comments.length === 0 && (
              <li className="text-gray-500">No comments yet. Be the first to comment!</li>
            )}
            {comments.map((comment, index) => (
              <li key={index} className="bg-gray-100 p-4 rounded-md shadow-sm">{comment}</li>
            ))}
          </ul>

          <div className="add-comment flex flex-col">
            <input
              type="text"
              className="border border-gray-300 p-2 rounded-md w-full mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Add a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button
              onClick={handleAddComment}
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-2 rounded-full w-full hover:bg-blue-700 transition duration-300 font-bold"
            >
              Post Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

