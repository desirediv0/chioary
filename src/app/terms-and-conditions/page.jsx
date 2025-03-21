"use client"

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const TermsAndConditionsPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-32">

      <main className="max-w-4xl mx-auto px-4 py-8">
        <motion.div 
          className="bg-white rounded-lg shadow-md p-6 sm:p-8"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-700">
                By accessing our website, you agree to these Terms and Conditions. If you disagree with any part of these terms, please do not use our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">2. Intellectual Property</h2>
              <p className="text-gray-700">
                Our website and its original content, features, and functionality are owned by us and are protected by international copyright laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
              <ul className="list-disc pl-5 text-gray-700">
                <li className="mb-2">You must be 18 years or older to use this service</li>
                <li className="mb-2">You must provide accurate account information</li>
                <li className="mb-2">You are responsible for maintaining account security</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">4. Limitations</h2>
              <p className="text-gray-700">
                We shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">5. Contact Information</h2>
              <p className="text-gray-700">
                For any questions about these Terms, please contact us at:
                <br />
                Email: support@example.com
                <br />
                Phone: (555) 123-4567
              </p>
            </section>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default TermsAndConditionsPage;