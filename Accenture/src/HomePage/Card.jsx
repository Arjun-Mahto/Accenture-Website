import React from "react";

const cards = [
  {
    tag: "CASE STUDY",
    title: "The NFL’s gameplan: reinventing the future of football",
    desc: "How the NFL is reinventing the future of football with new technology and strategy.",
    image: "https://images.pexels.com/photos/19142973/pexels-photo-19142973.jpeg",
    hoverBg: "bg-black text-white",
  },
  {
    tag: "RESEARCH REPORT",
    title: "Powered for Change 2025",
    desc: "This year's Powered for Change research shows how to make progress in industrial decarbonization, scaling net-zero infrastructure rapidly and cost-effectively.",
    image: "https://images.pexels.com/photos/19142973/pexels-photo-19142973.jpeg",
    hoverBg: "bg-white text-black",
  },
  {
    tag: "RESEARCH REPORT",
    title: "Learning, reinvented. Accelerating human-AI collaboration",
    desc: "Discover how human-AI collaboration can transform learning and accelerate innovation.",
    image: "https://images.pexels.com/photos/19142973/pexels-photo-19142973.jpeg",
    hoverBg: "bg-white text-black",
  },
  {
    tag: "RESEARCH REPORT",
    title: "4 critical actions to take now to strengthen your cyber defenses",
    desc: "Explore four key strategies organizations must adopt to improve cyber resilience in the digital age.",
    image: "https://images.pexels.com/photos/19142973/pexels-photo-19142973.jpeg",
    hoverBg: "bg-black text-white",
  },
];

export default function Cards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 bg-black">
      {cards.map((card, index) => (
        <div
          key={index}
          className="relative group rounded-lg shadow-lg cursor-pointer transition-transform duration-500 hover:scale-105"
        >
          {/* Background Image */}
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-100 object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Default Overlay */}
          <div className="absolute inset-0 bg-black/50 transition-opacity duration-500 group-hover:opacity-0"></div>

          {/* Default Text */}
          <div className="absolute top-6 left-6 text-white transition-opacity duration-500 group-hover:opacity-0">
            <p className="text-sm font-semibold">{card.tag}</p>
            <h2 className="mt-2 text-lg font-bold">{card.title}</h2>
          </div>

          {/* Hover Expanded Content */}
          <div
            className={`absolute inset-0 flex flex-col justify-between p-6 opacity-0 group-hover:opacity-100 transition duration-500 ${card.hoverBg}`}
          >
            <div>
              <p className="text-sm font-semibold">{card.tag}</p>
              <h2 className="mt-2 text-lg font-bold">{card.title}</h2>
              <p className="mt-4 text-sm">{card.desc}</p>
            </div>
            <div className="flex items-center justify-end font-semibold">
              Expand <span className="ml-1">➜</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
