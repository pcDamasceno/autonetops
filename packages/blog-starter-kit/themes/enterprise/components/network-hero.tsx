import React from 'react';
import { Network, Server, Workflow, Cloud, Database, Settings, ArrowRight } from 'lucide-react';
import { Container } from '../components/container';
import Link from 'next/link';

const AnimatedHeroSection = () => {
  return (
    <main className="flex-grow">
      <section className="relative py-16 md:py-20 min-h-[65vh] flex items-center justify-center">
        {/* Lighter Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300" />

        {/* Animated Network Lines */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-blue-500 animate-pulse"
              style={{
                width: '35%',
                top: `${i * 20}%`,
                left: `${(i % 2) * 60}%`,
                animationDelay: `${i * 0.7}s`,
                transform: `rotate(${i * 30}deg)`,
                opacity: 0.2,
                animationDirection: 'alternate',
              }}
            />
          ))}
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Network className="text-blue-500 w-12 h-12 absolute top-10 left-10 animate-bounce" />
          <Server className="text-blue-500 w-12 h-12 absolute bottom-10 right-10 animate-bounce delay-75" />
          <Cloud className="text-blue-500 w-10 h-10 absolute top-1/4 right-20 animate-spin-slow" />
          <Database className="text-blue-500 w-10 h-10 absolute bottom-1/4 left-20 animate-spin-slow delay-150" />
          <Workflow className="text-blue-500 w-10 h-10 absolute top-1/3 left-1/4 animate-bounce delay-100" />
          <Settings className="text-blue-500 w-10 h-10 absolute bottom-1/3 right-1/4 animate-spin-slow delay-200" />
        </div>

        {/* Content Container */}
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Simplifying Network, Automation & Cloud Infrastructure
            </h1>

            <p className="text-lg md:text-xl text-blue-700 mb-8">
              Dive into the world of networking through hands-on labs, tutorials, and real-world projects.
            </p>

            {/* Explore Button */}
            <Link href="/blog">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Explore Latest Posts
              </button>
            </Link>
          </div>
        </Container>

        {/* Decorative Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-300 to-transparent opacity-40 pointer-events-none" />
      </section>
    </main>
  );
};

export default AnimatedHeroSection;
