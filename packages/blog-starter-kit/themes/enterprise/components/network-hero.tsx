import React from 'react';
import { Network, Server, Workflow, ArrowRight } from 'lucide-react';

const NetworkHero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Network Background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px w-1/3 bg-blue-400 animate-pulse"
            style={{
              top: `${i * 20}%`,
              left: `${(i % 2) * 60}%`,
              animationDelay: `${i * 0.5}s`,
              transform: `rotate(${i * 30}deg)`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 h-screen flex items-center">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Network Automation
                  <span className="block text-blue-400">Made Simple</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-300">
                  Transform your network infrastructure with powerful automation tools. 
                  Streamline operations, reduce errors, and boost efficiency.
                </p>
              </div>



              {/* Feature Highlights */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-700">
                <div className="text-center">
                  <Server className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                  <p className="text-sm text-slate-300">Infrastructure as Code</p>
                </div>
                <div className="text-center">
                  <Network className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                  <p className="text-sm text-slate-300">Real-time Monitoring</p>
                </div>
                <div className="text-center">
                  <Workflow className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                  <p className="text-sm text-slate-300">Automated Workflows</p>
                </div>
              </div>
            </div>

            {/* Right Column - Visual Element */}
            <div className="hidden lg:block relative">
              <div className="relative">
                {/* Network Nodes Visual */}
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-4 h-4 bg-blue-400 rounded-full animate-pulse"
                    style={{
                      top: `${Math.sin(i) * 150 + 200}px`,
                      left: `${Math.cos(i) * 150 + 200}px`,
                      animationDelay: `${i * 0.2}s`
                    }}
                  >
                    <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping" />
                  </div>
                ))}
                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full">
                  <path
                    d="M200,200 L300,300 L400,200 L300,100 Z"
                    className="stroke-blue-400/30"
                    fill="none"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkHero;
