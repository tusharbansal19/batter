    
"use client"
import React, { useState } from 'react';
import { Phone, Home, RefreshCw, DollarSign, Check, Shield, BarChart3, Building2, FileText } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const BetterMortgageInterface = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Progress Indicator */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-2">
            <div className="h-2 w-20 bg-gray-200 rounded-full"></div>
            <div className="h-4 w-4 bg-green-500 rounded-full"></div>
            <div className="h-2 w-20 bg-gray-200 rounded-full"></div>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Hi, I'm Betsy!
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-700">
            What can I help you with?
          </h2>
        </div>

        {/* Option Buttons */}
        <div className="space-y-4 mb-16">
          {/* Buying a home */}
          <button
            onClick={() => setSelectedOption('buying')}
            className={`w-full p-4 border-2 rounded-lg text-left transition-all duration-200 ${
              selectedOption === 'buying'
                ? 'border-green-500 bg-green-50'
                : 'border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center space-x-4">
              <div className={`p-2 rounded-lg ${
                selectedOption === 'buying' ? 'bg-green-100' : 'bg-gray-100'
              }`}>
                <Home className={`h-6 w-6 ${
                  selectedOption === 'buying' ? 'text-green-600' : 'text-gray-600'
                }`} />
              </div>
              <span className="text-lg font-medium text-gray-900">Buying a home</span>
            </div>
          </button>

          {/* Refinancing my mortgage */}
          <button
            onClick={() => setSelectedOption('refinancing')}
            className={`w-full p-4 border-2 rounded-lg text-left transition-all duration-200 ${
              selectedOption === 'refinancing'
                ? 'border-green-500 bg-green-50'
                : 'border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center space-x-4">
              <div className={`p-2 rounded-lg ${
                selectedOption === 'refinancing' ? 'bg-green-100' : 'bg-gray-100'
              }`}>
                <RefreshCw className={`h-6 w-6 ${
                  selectedOption === 'refinancing' ? 'text-green-600' : 'text-gray-600'
                }`} />
              </div>
              <span className="text-lg font-medium text-gray-900">Refinancing my mortgage</span>
            </div>
          </button>

          {/* Get cash from my home */}
          <button
            onClick={() => setSelectedOption('cash')}
            className={`w-full p-4 border-2 rounded-lg text-left transition-all duration-200 ${
              selectedOption === 'cash'
                ? 'border-green-500 bg-green-50'
                : 'border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center space-x-4">
              <div className={`p-2 rounded-lg ${
                selectedOption === 'cash' ? 'bg-green-100' : 'bg-gray-100'
              }`}>
                <DollarSign className={`h-6 w-6 ${
                  selectedOption === 'cash' ? 'text-green-600' : 'text-gray-600'
                }`} />
              </div>
              <span className="text-lg font-medium text-gray-900">Get cash from my home</span>
            </div>
          </button>
        </div>

        {/* Continue Button */}
        {selectedOption && (
          <div className="text-center mb-12">
            <button 
              onClick={() => {
                // Navigate to next step based on selection
                if (selectedOption === 'buying') {
                  window.location.href = '/mortgage-calculator';
                } else if (selectedOption === 'refinancing') {
                  window.location.href = '/mortgage-calculator';
                } else if (selectedOption === 'cash') {
                  window.location.href = '/mortgage-calculator';
                }
              }}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 text-lg"
            >
              Continue with {selectedOption === 'buying' ? 'Buying' : selectedOption === 'refinancing' ? 'Refinancing' : 'Getting Cash'}
            </button>
          </div>
        )}

        {/* Statistics */}
        <div className="text-center mb-12">
          <div className="grid sm:grid-cols-2 gap-8 sm:gap-16">
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">$100B</div>
              <div className="text-gray-600">home loans funded entirely online</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">400K</div>
              <div className="text-gray-600">Customers who chose a Better Mortgage</div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-green-50 rounded-lg p-6 sm:p-8">
          <div className="text-center mb-6">
            <p className="text-gray-700 font-medium">After a few questions, you'll unlock</p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
              <span className="text-gray-700">Custom mortgage rates</span>
            </div>
            <div className="flex items-center space-x-3">
              <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
              <span className="text-gray-700">Exclusive offers</span>
            </div>
            <div className="flex items-center space-x-3">
              <BarChart3 className="h-5 w-5 text-green-600 flex-shrink-0" />
              <span className="text-gray-700">A personalized dashboard</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BetterMortgageInterface;