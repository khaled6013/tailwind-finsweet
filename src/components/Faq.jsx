import React, { useState } from "react";

const faqs = [
    {
        id: 1,
        question: "How much time does it take?",
        answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 2,
        question: "What is your class naming convention?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 3,
        question: "How do you communicate?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 4,
        question: "I have a bigger project. Can you handle it?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 5,
        question: "What is your class naming convention?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
];

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(1);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <div className="bg-white lg:py-[120px] py-10">
            <div className="lg:w-10/12 w-11/12 mx-auto">
                <div className="lg:flex">
                    <div className="lg:w-2/6">
                        <div className="">
                            <h2 className="text-[#282938] lg:text-[38px] text-[22px] font-semibold font-pops">Frequently asked questions</h2>
                            <div className="lg:mt-[16px]">
                                <a href="#" className="text-[#2405F2] lg:text-[18px] text-[13px] font-medium font-pops opacity-[80%]">Contact us for more info</a>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-4/6 w-full">
                        <div className="lg:mt-0 mt-7 space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={faq.id} className="border-b pb-4">
                                    <button
                                        onClick={() => toggle(index)}
                                        className="w-full flex items-center justify-between text-left"
                                    >
                                        <span className="text-indigo-600 font-medium lg:w-8 w-7">
                                            {faq.id.toString().padStart(2, "0")}
                                        </span>
                                        <span className="flex-1 text-gray-900 font-semibold lg:text-lg text-sm">
                                            {faq.question}
                                        </span>
                                        <span className="text-gray-400 text-xl">
                                            {openIndex === index ? "✕" : "+"}
                                        </span>
                                    </button>

                                    {openIndex === index && faq.answer && (
                                        <div className="mt-3 pl-8 text-gray-600 text-sm leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq