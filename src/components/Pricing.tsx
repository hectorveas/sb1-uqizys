import React from 'react';
import { Check } from 'lucide-react';

export default function Pricing() {
  const tiers = [
    {
      name: 'Starter',
      price: 29,
      features: [
        'Up to 50 inspections/month',
        'Basic photo documentation',
        'Standard forms',
        'Email support',
        'Cloud storage (5GB)',
      ],
    },
    {
      name: 'Professional',
      price: 79,
      features: [
        'Unlimited inspections',
        'Advanced photo tools',
        'Custom forms',
        'Priority support',
        'Cloud storage (50GB)',
        'Offline mode',
        'Team collaboration',
      ],
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: [
        'All Professional features',
        'Custom integration',
        'Dedicated support',
        'Unlimited storage',
        'Advanced analytics',
        'SLA guarantee',
        'Custom branding',
      ],
    },
  ];

  return (
    <div id="pricing" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Pricing</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Plans for teams of all sizes
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Choose the perfect plan for your inspection needs
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div key={tier.name} className="border border-gray-200 rounded-lg shadow-sm p-8 bg-white hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900">{tier.name}</h3>
              <p className="mt-4 text-4xl font-extrabold text-gray-900">
                {typeof tier.price === 'number' ? `$${tier.price}` : tier.price}
                {typeof tier.price === 'number' && <span className="text-xl font-medium text-gray-500">/mo</span>}
              </p>
              <ul className="mt-8 space-y-4">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="ml-3 text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-8 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                {tier.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}