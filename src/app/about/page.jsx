// pages/about.js
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Breadcrumb from "@/components/Breadcrumb";

export default function Page() {
  return (
    <>
      {/* <Head className="py-28">
        <title>About Us - Adyashakti Parmarth Niketan Trust</title>
        <meta
          name="description"
          content="Learn about Adyashakti Parmarth Niketan Trust's mission, vision, and journey of selfless service to humanity."
        />
      </Head> */}

      {/* Hero Section */}
      <Breadcrumb />

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/about-main.jpg"
                  alt="Adyashakti Parmarth Niketan Trust"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-amber-800 p-4">
                  <p className="text-amber-50 text-center font-medium">
                    Established in 2010
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-amber-800 mb-4">
                Our Story
              </h2>
              <div className="h-1 w-16 bg-amber-500 mb-6"></div>
              <p className="text-gray-700 mb-4">
                Adyashakti Parmarth Niketan Trust was founded with a vision to
                serve humanity through spiritual wisdom and practical action.
                Our journey began with a small group of dedicated individuals
                committed to making a positive difference in society.
              </p>
              <p className="text-gray-700 mb-4">
                As a religious charitable trust and non-profit organization
                registered under the Indian Trusts Act, we have dedicated
                ourselves to various humanitarian causes including education for
                underprivileged children, nutrition programs in rural areas,
                mental wellness initiatives, spiritual development, and Gau Seva
                (cow protection).
              </p>
              <p className="text-gray-700 mb-6">
                Today, we continue to grow our reach while staying true to our
                founding principles of Seva (selfless service), Satya (truth),
                and Shanti (peace).
              </p>
              <Link
                href="/vision"
                className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-full transition duration-300 shadow-md"
              >
                Explore Our Vision
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-800 mb-4">
              Our Core Values
            </h2>
            <div className="h-1 w-24 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Our work is guided by timeless principles that inspire us to serve
              with compassion and integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center transform transition duration-500 hover:-translate-y-2">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-amber-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-amber-800 mb-3">
                Seva (Selfless Service)
              </h3>
              <p className="text-gray-600">
                We serve others without expectation of reward or recognition,
                believing that compassionate action is a pathway to spiritual
                growth.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center transform transition duration-500 hover:-translate-y-2">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-amber-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-amber-800 mb-3">
                Satya (Truth)
              </h3>
              <p className="text-gray-600">
                We strive for honesty and transparency in all our dealings,
                seeking wisdom and higher consciousness through adherence to
                truth.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center transform transition duration-500 hover:-translate-y-2">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-amber-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-amber-800 mb-3">
                Shanti (Peace)
              </h3>
              <p className="text-gray-600">
                We cultivate inner peace and harmony, believing that a peaceful
                mind is essential for effective service and spiritual growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Impact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-bold text-amber-800 mb-4">
                Our Mission
              </h2>
              <div className="h-1 w-16 bg-amber-500 mb-6"></div>
              <p className="text-gray-700 mb-4">
                Our mission is to uplift society through compassionate service,
                promoting holistic wellbeing, spiritual awareness, and
                sustainable living practices.
              </p>
              <p className="text-gray-700 mb-6">
                We strive to create positive change through five primary areas
                of focus:
              </p>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-amber-600 font-bold">1</span>
                  </span>
                  <div>
                    <h4 className="font-bold text-gray-800">Education</h4>
                    <p className="text-gray-600">
                      Providing quality education and life skills to
                      underprivileged children
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-amber-600 font-bold">2</span>
                  </span>
                  <div>
                    <h4 className="font-bold text-gray-800">Nutrition</h4>
                    <p className="text-gray-600">
                      Combating malnutrition through sustainable food programs
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-amber-600 font-bold">3</span>
                  </span>
                  <div>
                    <h4 className="font-bold text-gray-800">Mental Wellness</h4>
                    <p className="text-gray-600">
                      Supporting mental health through counseling and
                      mindfulness practices
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-amber-600 font-bold">4</span>
                  </span>
                  <div>
                    <h4 className="font-bold text-gray-800">
                      Spiritual Growth
                    </h4>
                    <p className="text-gray-600">
                      Facilitating spiritual development through education and
                      practice
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-amber-600 font-bold">5</span>
                  </span>
                  <div>
                    <h4 className="font-bold text-gray-800">Gau Seva</h4>
                    <p className="text-gray-600">
                      Protecting and caring for cows according to traditional
                      practices
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-amber-800 mb-4">
                Our Impact
              </h2>
              <div className="h-1 w-16 bg-amber-500 mb-6"></div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-amber-50 p-6 rounded-lg text-center">
                  <span className="text-4xl font-bold text-amber-700">
                    5000+
                  </span>
                  <p className="text-gray-700 font-medium">Children Educated</p>
                </div>
                <div className="bg-amber-50 p-6 rounded-lg text-center">
                  <span className="text-4xl font-bold text-amber-700">20+</span>
                  <p className="text-gray-700 font-medium">Villages Served</p>
                </div>
                <div className="bg-amber-50 p-6 rounded-lg text-center">
                  <span className="text-4xl font-bold text-amber-700">
                    100+
                  </span>
                  <p className="text-gray-700 font-medium">Cows Protected</p>
                </div>
                <div className="bg-amber-50 p-6 rounded-lg text-center">
                  <span className="text-4xl font-bold text-amber-700">
                    15,000+
                  </span>
                  <p className="text-gray-700 font-medium">Meals Provided</p>
                </div>
              </div>

              <p className="text-gray-700 mb-6">
                Through the generous support of our donors and dedicated
                volunteers, we have been able to make a tangible difference in
                thousands of lives across India.
              </p>

              <Link
                href="/donate"
                className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-full transition duration-300 shadow-md"
              >
                Support Our Cause
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-800 mb-4">
              Our Leadership Team
            </h2>
            <div className="h-1 w-24 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Meet the dedicated individuals who guide our organization with
              wisdom and compassion.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative pt-[100%]">
                <div className="absolute inset-0 bg-amber-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-24 w-24 text-amber-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-800 mb-1">
                  Swami Dharmendra Ji
                </h3>
                <p className="text-amber-600 font-medium mb-3">
                  Founder & Spiritual Guide
                </p>
                <p className="text-gray-600 mb-4">
                  With over 30 years of spiritual practice, Swami Ji leads our
                  organization with wisdom and compassion.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative pt-[100%]">
                <div className="absolute inset-0 bg-amber-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-24 w-24 text-amber-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-800 mb-1">
                  Dr. Priya Sharma
                </h3>
                <p className="text-amber-600 font-medium mb-3">
                  Managing Trustee
                </p>
                <p className="text-gray-600 mb-4">
                  Dr. Sharma brings her expertise in public health to oversee
                  our nutrition and wellness programs.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative pt-[100%]">
                <div className="absolute inset-0 bg-amber-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-24 w-24 text-amber-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-800 mb-1">
                  Rajesh Patel
                </h3>
                <p className="text-amber-600 font-medium mb-3">
                  Director of Operations
                </p>
                <p className="text-gray-600 mb-4">
                  Rajesh ensures the efficient implementation of all our
                  programs and initiatives across regions.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/team"
              className="inline-block border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white font-medium py-3 px-6 rounded-full transition duration-300"
            >
              Meet Our Full Team
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Your support enables us to continue our mission of service and
            compassion. Together, we can create a more harmonious and equitable
            world.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="/donate"
              className="bg-white text-amber-700 hover:bg-amber-50 font-bold py-3 px-8 rounded-full transition duration-300 shadow-md"
            >
              Donate Now
            </Link>
            <Link
              href="/volunteer"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-amber-700 font-bold py-3 px-8 rounded-full transition duration-300"
            >
              Volunteer
            </Link>
          </div>
        </div>
      </section>

      {/* Legal Information */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-amber-800 mb-4">
              Legal Status
            </h2>
            <div className="h-1 w-16 bg-amber-500 mb-6"></div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">
                Adyashakti Parmarth Niketan Trust is registered as a religious
                and charitable trust under the Indian Trusts Act.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Registration Number:</strong> APNT/2010/RG-1234
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Section 80G:</strong> All donations to the trust are
                exempt from Income Tax under Section 80G of the Income Tax Act.
              </p>
              <p className="text-gray-700">
                <strong>FCRA Registration:</strong> The trust is authorized to
                receive foreign contributions under the Foreign Contribution
                Regulation Act (FCRA).
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
