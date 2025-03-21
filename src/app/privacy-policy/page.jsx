"use client"

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const PrivacyPolicyPage = () => {
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
              <h2 className="text-xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
              <p className="text-gray-700">
                We collect information that you provide directly to us, including name, email address, 
                and any other information you choose to provide.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <ul className="list-disc pl-5 text-gray-700">
                <li className="mb-2">To provide and maintain our service</li>
                <li className="mb-2">To notify you about changes to our service</li>
                <li className="mb-2">To provide customer support</li>
                <li className="mb-2">To gather analysis or valuable information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">3. Data Security</h2>
              <p className="text-gray-700">
                The security of your data is important to us. We strive to use commercially 
                acceptable means to protect your personal information but cannot guarantee 
                its absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">4. Cookie Policy</h2>
              <p className="text-gray-700">
                We use cookies and similar tracking technologies to track activity on our service 
                and hold certain information. You can instruct your browser to refuse all cookies 
                or to indicate when a cookie is being sent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">5. Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions about this Privacy Policy, please contact us:
                <br />
                Email: adyashakti@gmail.com
                <br />
                Phone:  (239) 555-0108
              </p>
            </section>
          </div>

        </motion.div>
      </main>
    </div>
  );
};

export default PrivacyPolicyPage;