import React from 'react'

const Breadcrumb = () => {
  return (
    <div>
      <div className="relative py-28  bg-amber-50">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/images/temple-bg.jpg')" }}
        ></div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4">
              Our Journey
            </h1>
            <div className="h-1 w-24 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-xl text-amber-900 mb-6 font-medium italic">
              &quot;सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः। सर्वे भद्राणि पश्यन्तु
              मा कश्चित् दुःखभाग्भवेत्॥&quot;
            </p>
            <p className="text-lg text-amber-700">
              May all be happy, may all be free from illness, may all see what
              is auspicious, may no one suffer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb
