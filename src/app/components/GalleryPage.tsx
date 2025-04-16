/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Michroma, Montserrat } from 'next/font/google';

const michroma = Michroma({ subsets: ['latin'], weight: ['400'] });

type NewsItem = {
  id: number;
  title: string;
  image: string;
  description: string;
};

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: 'Global Economy Update',
    image: '/image1.jpeg',
    description:
      'The global economy is showing signs of recovery with increased trade and investment flows...',
  },
  {
    id: 2,
    title: 'Tech Innovations 2024',
    image: '/image2.jpeg',
    description:
      'This year has seen remarkable innovations in AI, renewable energy, and space exploration...',
  },
  {
    id: 3,
    title: 'Health Advances',
    image: '/image3.jpeg',
    description:
      'New breakthroughs in medical research promise better treatments for chronic diseases...',
  },
  {
    id: 4,
    title: 'Climate Change Actions',
    image: '/image4.jpeg',
    description:
      'Countries worldwide are committing to ambitious climate goals to reduce carbon emissions...',
  },
  {
    id: 5,
    title: 'Sustainable Cities',
    image: '/image4.jpeg',
    description:
      'Urban centers are going green with smart infrastructure and eco-friendly public transit...',
  },
  {
    id: 6,
    title: 'Education Trends',
    image: '/image4.jpeg',
    description:
      'Modern education is shifting to hybrid models and tech-enhanced learning experiences...',
  },
];

const NewsPage: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  return (
    <>
      <h1 className={`z-50 text-4xl text-center py-6 ${michroma.className}`}>
        GALLERY
      </h1>

      <div className="relative w-full h-screen">
        {/* Background Gradient */}
        <div
          className="fixed top-0 h-screen w-screen -z-50"
          style={{
            background: 'linear-gradient(180deg, #EBF7FD 80%, #AFCFF1 100%)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        />

        {/* Image Grid */}
        <div className="p-4 max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {newsItems.map((news) => (
              <div
                key={news.id}
                onClick={() => setSelectedNews(news)}
                className="cursor-pointer"
              >
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-48 object-cover rounded-md shadow-md transition-transform hover:scale-105 duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsPage;
