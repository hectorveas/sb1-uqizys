import React from 'react';
import { Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white">InspectPro</span>
            </div>
            <p className="mt-4 text-gray-400">
              Making insurance claims inspection simple and efficient.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Product</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#features" className="text-gray-300 hover:text-white">Features</a></li>
              <li><a href="#workflow" className="text-gray-300 hover:text-white">Workflow</a></li>
              <li><a href="#pricing" className="text-gray-300 hover:text-white">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white">About</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Careers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Documentation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} InspectPro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}