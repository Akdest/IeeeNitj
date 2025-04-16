/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState } from 'react';
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
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  return (
    <>
      <h1 className={`z-50 text-4xl text-center py-6 ${michroma.className}`}>
        NEWS
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
        ></div>

        {/* Grid & News Cards */}
        <div className="p-4 max-w-6xl mx-auto relative">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {newsItems.map((news) => (
              <div
                key={news.id}
                className="bg-white rounded-lg shadow-md overflow-hidden relative"
              >
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <div className="font-semibold text-lg">{news.title}</div>
                  <button
                    onClick={() => setSelectedNews(news)}
                    className="mt-2 bg-blue-600 text-white px-4 py-1 rounded-full font-semibold"
                  >
                    Play
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Modal / Detail View */}
          <AnimatePresence>
            {selectedNews && (
              <>
                <motion.div
                  key="overlay"
                  className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedNews(null)}
                />

                       {/* Centered detail card */}
            <motion.div
              key="detailCard"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-20 left-20 sm:left-[40%] z-50 w-80 bg-white rounded-xl shadow-lg p-6"
              style={{ transform: 'translate(-50%, -50%)' }}
            >
              <img
                src={selectedNews.image}
                alt={selectedNews.title}
                className="w-full h-48 object-cover rounded-md"
              />
              <div className="mt-4 font-semibold text-xl">{selectedNews.title}</div>
              <p className="mt-2 text-gray-700 text-sm">{selectedNews.description}</p>
              <button
                onClick={() => setSelectedNews(null)}
                className="mt-4 text-blue-600 underline"
              >
                Close
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
   </div>
    </>
  );
};

export default NewsPage;
