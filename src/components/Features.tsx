import React from 'react';
import { Camera, CloudLightning, Map, Shield, Smartphone, Wifi } from 'lucide-react';

export default function Features() {
  const features = [
    {
      name: 'Offline Capability',
      description: 'Continue working without internet connection. All data syncs automatically when back online.',
      icon: Wifi
    },
    {
      name: 'Photo Documentation',
      description: 'Capture high-quality photos with built-in annotation tools and automatic GPS tagging.',
      icon: Camera
    },
    {
      name: 'Real-time Sync',
      description: 'Instantly sync inspection data with your team and backend systems.',
      icon: CloudLightning
    },
    {
      name: 'Location Tracking',
      description: 'Built-in GPS tracking for accurate location documentation of inspections.',
      icon: Map
    },
    {
      name: 'Mobile First',
      description: 'Optimized for field work with an intuitive mobile interface.',
      icon: Smartphone
    },
    {
      name: 'Secure Data',
      description: 'Enterprise-grade security for sensitive insurance claim information.',
      icon: Shield
    }
  ];

  return (
    <div id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need for field inspections
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Powerful tools designed specifically for insurance claim inspectors working in the field.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute h-12 w-12 text-blue-600">
                  <feature.icon className="h-8 w-8" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}