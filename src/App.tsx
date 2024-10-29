import React from 'react';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import './styles/themes.css';

function App() {
  return (
    <div className="min-h-screen bg-primary text-primary transition-colors">
      <div className="container mx-auto p-8">
        <div className="flex justify-end mb-8">
          <ThemeSwitcher />
        </div>
        
        <div className="bg-secondary rounded-lg p-8 shadow-xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-lg bg-secondary">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Enterprise Certificate Authority Management</h1>
              <p className="text-secondary">Manage SSL/TLS certificates for your enterprise infrastructure</p>
            </div>
          </div>

          <div className="flex gap-4 mb-8">
            <button className="px-6 py-2 rounded-md bg-white text-secondary hover:bg-gray-50">
              Generate
            </button>
            <button className="px-6 py-2 rounded-md bg-accent text-white hover:bg-accent-hover">
              Manage
            </button>
            <button className="px-6 py-2 rounded-md bg-accent text-white hover:bg-accent-hover">
              Revoke
            </button>
            <button className="px-6 py-2 rounded-md bg-accent text-white hover:bg-accent-hover">
              Export
            </button>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Generate New Certificate</h2>
            <p className="text-secondary">Create new certificates for various services and domains</p>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Common Name (CN)</label>
                <input
                  type="text"
                  placeholder="e.g., *.example.com"
                  className="w-full px-4 py-2 rounded-md bg-secondary border border-gray-700 focus:ring-2 focus:ring-accent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Organization (O)</label>
                <input
                  type="text"
                  placeholder="Your Organization"
                  className="w-full px-4 py-2 rounded-md bg-secondary border border-gray-700 focus:ring-2 focus:ring-accent"
                />
              </div>
            </div>

            <button className="w-full py-3 rounded-md bg-gradient-to-r from-accent to-accent-secondary text-white font-medium hover:opacity-90 transition-opacity">
              Generate Certificate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;