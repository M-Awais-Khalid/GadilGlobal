import React, { useState } from 'react';

const FaqItem = ({ question, answer, id }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="border-b border-[#0A071B]/10">
      <button
        className="question-btn flex w-full items-start gap-x-5 justify-between rounded-lg text-left text-lg font-bold text-slate-800 focus:outline-none p-5"
        onClick={handleClick}
        data-toggle={id}
      >
        <span>{question}</span>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          className={`mt-1.5 md:mt-0 flex-shrink-0 transform h-5 w-5 text-[#5B5675] ${isExpanded ? 'rotate-180' : ''}`}
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.293 9.293L12 13.586 7.707 9.293 6.293 10.707 12 16.414l5.707-5.707z"></path>
        </svg>
      </button>
      <div className="answer pt-2 pb-5 px-5 text-sm lg:text-base text-[#343E3A] font-medium" id={id} style={{ display: isExpanded ? 'block' : 'none' }}>
        {answer}
      </div>
    </div>
  );
};

const FaqSection = () => {
  const faqData = [
    {
      id: 'answer-1',
      question: 'What types of hosting plans do you offer?',
      answer: 'We offer shared hosting, VPS hosting, dedicated server hosting, and cloud hosting plans.',
    },
    {
      id: 'answer-2',
      question: 'What is the uptime guarantee for your hosting services?',
      answer: 'We guarantee an uptime of 99.9% for all our hosting services.',
    },
    {
      id: 'answer-3',
      question: 'Do you provide website migration assistance?',
      answer: 'Yes, we offer free website migration assistance for new customers.',
    },
    {
      id: 'answer-4',
      question: 'What security measures do you have in place?',
      answer: 'We employ advanced security measures including firewalls, DDoS protection, and regular security audits.',
    },
  ];

  return (
    <div className="bg-[#F2F4FF] ">
      <section className="max-w-5xl mx-auto py-10 sm:py-20">
        <div className="flex items-center justify-center flex-col gap-y-2 py-5">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Frequently asked questions</h2>
          <p className="text-lg font-medium text-slate-700/70">Questions related to web hosting</p>
        </div>
        <div className="w-full px-7 md:px-10 xl:px-2 py-4">
          <div className="mx-auto w-full max-w-5xl border border-slate-400/20 rounded-lg bg-white">
            {faqData.map((faq) => (
              <FaqItem key={faq.id} id={faq.id} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaqSection;
