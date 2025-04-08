"use client";

import { useState } from "react";

const faqData = [
  {
    id: 1,
    ques: "Are there any advantages/perks of having a destination wedding?",
    ans: "Today, many couples choose a more intimate gathering at a place they love over traditional (and expensive) weddings. Having a destination wedding allows couples to extend their celebration from four hours to four days, while creating memories that will last a lifetime with their friends and family. Destination weddings can also be more affordable for couples since they tend to be more intimate than traditional weddings.",
  },
  {
    id: 2,
    ques: "Isn't planning a destination wedding less stressful than a traditional, at-home wedding?",
    ans: "Today, many couples choose a more intimate gathering at a place they love over traditional (and expensive) weddings. Having a destination wedding allows couples to extend their celebration from four hours to four days, while creating memories that will last a lifetime with their friends and family. Destination weddings can also be more affordable for couples since they tend to be more intimate than traditional weddings.",
  },
  {
    id: 3,
    ques: "Can I plan my destination wedding within 3 months?",
    ans: "Today, many couples choose a more intimate gathering at a place they love over traditional (and expensive) weddings. Having a destination wedding allows couples to extend their celebration from four hours to four days, while creating memories that will last a lifetime with their friends and family. Destination weddings can also be more affordable for couples since they tend to be more intimate than traditional weddings.",
  },
];

const FAQ = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-[#f9f9f2] py-16 px-4 md:px-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-[40px] md:text-[36px] text-[#2f4b26] playfair font-normal text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="border-t border-b border-gray-300 divide-y divide-gray-300">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="py-6">
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full text-left flex justify-between items-center group"
                >
                  <h3 className="text-[#2f4b26] text-[24px] md:text-[22px] playfair font-normal group-hover:underline transition-all duration-200">
                    {item.ques}
                  </h3>
                  {/* Arrow */}
                  <span
                    className={`transform transition-transform duration-300 w-3 h-3 border-t-2 border-r-2 border-[#686767] ${
                      isOpen ? "rotate-[315deg]" : "rotate-[135deg]"
                    }`}
                  ></span>
                </button>

                {/* Answer */}
                {isOpen && (
                  <p className="text-[#686767] mt-4 text-[20px] font-light md:text-[16px] roboto leading-relaxed transition-all duration-300">
                    {item.ans}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
