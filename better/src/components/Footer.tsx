"use client"
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="text-2xl font-bold text-green-800 mb-4">Better</div>
          <p className="text-gray-600 max-w-md">
            Better is a family of companies serving all your homeownership needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold text-green-800 mb-4">Better <span className="text-gray-400">Mortgage</span></h4>
            <p className="text-sm text-gray-600 mb-6">
              We can't wait to say "Welcome home." Apply 100% online, with expert customer support.
            </p>
            
            <h4 className="font-bold text-green-800 mb-4">Better <span className="text-gray-400">Real Estate</span></h4>
            <p className="text-sm text-gray-600 mb-6">
              Connect with a local Better Real Estate Partner Agent to find out all the ways you can save.
            </p>
            
            <h4 className="font-bold text-green-800 mb-4">Better <span className="text-gray-400">Cover</span></h4>
            <p className="text-sm text-gray-600 mb-6">
              Shop, bundle, and save on insurance coverage for home, auto, life, and more.
            </p>
            
            <h4 className="font-bold text-green-800 mb-4">Better <span className="text-gray-400">Inspect</span></h4>
            <p className="text-sm text-gray-600 mb-6">
              Get free repair estimates, 24-hour turnarounds on reports, and rest easy with our 100-day inspection guarantee.
            </p>
            
            <h4 className="font-bold text-green-800 mb-4">Better <span className="text-gray-400">Settlement Services</span></h4>
            <p className="text-sm text-gray-600">
              Get transparent rates when you shop for title insurance all in one convenient place.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Resources</h4>
            <div className="space-y-2 text-sm">
              <Link href="/mortgage-calculator" className="block text-gray-600 hover:text-gray-800">Home affordability calculator</Link>
              <Link href="/mortgage-calculator" className="block text-gray-600 hover:text-gray-800">Mortgage calculator</Link>
              <Link href="/mortgage-calculator" className="block text-gray-600 hover:text-gray-800">Free mortgage calculator</Link>
              <Link href="/mortgage-calculator" className="block text-gray-600 hover:text-gray-800">Mortgage calculator with taxes</Link>
              <Link href="/mortgage-calculator" className="block text-gray-600 hover:text-gray-800">Mortgage calculator with PMI</Link>
              <Link href="/mortgage-calculator" className="block text-gray-600 hover:text-gray-800">Rent vs buy calculator</Link>
              <Link href="/mortgage-calculator" className="block text-gray-600 hover:text-gray-800">HELOC payment calculator</Link>
              <Link href="/mortgage-calculator" className="block text-gray-600 hover:text-gray-800">HELOC vs cash-out refinance calculator</Link>
              <Link href="/" className="block text-gray-600 hover:text-gray-800">Buy a home</Link>
              <Link href="/" className="block text-gray-600 hover:text-gray-800">Sell a home</Link>
              <Link href="/" className="block text-gray-600 hover:text-gray-800">Get home inspection</Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Company</h4>
            <div className="space-y-2 text-sm">
              <Link href="/about-us" className="block text-gray-600 hover:text-gray-800">About Us</Link>
              <a href="#" className="block text-gray-600 hover:text-gray-800">Careers</a>
              <a href="#" className="block text-gray-600 hover:text-gray-800">Media</a>
              <a href="#" className="block text-gray-600 hover:text-gray-800">Partner With Us</a>
              <a href="#" className="block text-gray-600 hover:text-gray-800">Learning center</a>
              <a href="#" className="block text-gray-600 hover:text-gray-800">FAQs</a>
              <a href="#" className="block text-gray-600 hover:text-gray-800">Investor Relations</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Contact Us</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p>hello@better.com</p>
              <p>415-523-8837</p>
              <p>FAQ</p>
              <p>Glossary</p>
            </div>
            
            <h4 className="font-semibold text-gray-800 mb-4 mt-8">Legal</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-gray-600 hover:text-gray-800">NMLS Consumer Access</a>
              <a href="#" className="block text-gray-600 hover:text-gray-800">Privacy Policy</a>
              <a href="#" className="block text-gray-600 hover:text-gray-800">Terms of Use</a>
              <a href="#" className="block text-gray-600 hover:text-gray-800">Disclosures & Licensing</a>
              <a href="#" className="block text-gray-600 hover:text-gray-800">Affiliated Business</a>
              <a href="#" className="block text-gray-600 hover:text-gray-800">Browser Disclaimer</a>
            </div>
            
            <div className="flex space-x-2 mt-4">
              <div className="w-12 h-8 bg-gray-300 rounded"></div>
              <div className="w-12 h-8 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-xs text-gray-500 space-y-2">
            <p>
              ¹ Better Mortgage's One Day Mortgage™ promotion offers qualified customers who provide certain required financial information/documentation to Better Mortgage within 4 hours of locking a rate on a mortgage loan the opportunity to receive an underwriting determination from Better Mortgage within 24 hours of their rate lock. The underwriting determination is subject to customary terms, including fraud and anti-money laundering checks, that take place pre-closing and which may trigger additional required documentation from the customer. Better Mortgage does not guarantee that initial underwriting approval will result in a final underwriting approval. See One Day Mortgage™ Terms and Conditions.
            </p>
            <p>
              ² Better Mortgage's One Day HELOC™ promotion offers customers who provide certain required financial information/documentation to Better Mortgage within 4 hours of locking a rate on a HELOC loan the opportunity to receive an underwriting determination from Better Mortgage within 24 hours of their rate lock. The underwriting determination is subject to customary terms, including fraud and anti-money laundering checks, that take place pre-closing and which may trigger additional required documentation from the customer. Better Mortgage does not guarantee that initial underwriting approval will result in final underwriting approval. See One Day Heloc™ Terms and Conditions.
            </p>
            <p>
              ³ Assumes borrowers are eligible for the Automated Valuation Model (AVM) to calculate their home value; their loan amount is less than $400,000; all required documents are uploaded to their Better Mortgage online account within 24 hours of application; closing is scheduled for the earliest available date and time; and a notary is readily available. Funding timelines may vary and may be longer if an appraisal is required to calculate a borrower's home value.
            </p>
          </div>
          
          <div className="mt-8 text-xs text-gray-500">
            <p>© 2025 Better Home & Finance Holding Company and/or its affiliates. Better is a family of companies. Better Mortgage Corporation provides home loans; Better Real Estate, LLC and Better Real Estate California Inc License # 02164405 provides real estate services; Better Cover, LLC sells insurance products; and Better Inspect, LLC provides home inspection services; and Better Settlement Services, LLC provides title insurance services. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


