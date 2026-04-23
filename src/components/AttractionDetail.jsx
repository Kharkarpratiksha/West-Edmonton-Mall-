import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const attractionData = {
  'world-waterpark': {
    title: 'World Waterpark',
    label: 'Aquatic Entertainment',
    description:
      "Canada's largest indoor waterpark — 5 acres of year-round aquatic thrills. With 50+ water slides, a massive wave pool, and a lazy river, World Waterpark draws over 1 million riders annually from across Canada and beyond.",
    video:
      'https://res.cloudinary.com/du5io3wiz/video/upload/v1776934603/World-Waterpark1_qfxxkk.mp4',
    stat1: { value: '1M+', label: 'Annual Riders' },
    stat2: { value: '5', label: 'Acres of Water' },
    stat3: { value: '50+', label: 'Water Slides' },
    highlights: [
      {
        title: 'Wave Pool',
        desc: "North America's largest indoor wave pool — perfect for group experiences and branded activations.",
      },
      {
        title: 'Lazy River',
        desc: 'A 400-metre lazy river circuit winding through the entire park.',
      },
      {
        title: 'Thriller Slides',
        desc: '50+ slides ranging from family-friendly to extreme — something for every group demographic.',
      },
      {
        title: 'Private Cabanas',
        desc: 'Premium cabana rentals available for corporate groups and VIP bookings.',
      },
    ],
    packages: [
      {
        name: 'Group Visit',
        size: '20+ guests',
        includes: 'Admission, locker access, group coordinator',
      },
      {
        name: 'Corporate Package',
        size: '50+ guests',
        includes: 'Private hours, catering, branded signage options',
      },
      {
        name: 'Full Buyout',
        size: '500+ guests',
        includes: 'Exclusive access, full catering, AV setup, branding',
      },
    ],
  },

  galaxyland: {
    title: 'Galaxyland',
    label: 'Amusement Park',
    description:
      "One of Canada's largest indoor amusement parks — 30+ rides, live entertainment zones, and family programming running 365 days a year.",
    video:
      'https://res.cloudinary.com/du5io3wiz/video/upload/q_auto/f_auto/v1776934747/Amusement1_bmgutg.mp4',
    stat1: { value: '800K+', label: 'Annual Visitors' },
    stat2: { value: '30+', label: 'Rides & Attractions' },
    stat3: { value: '365', label: 'Days Open' },
    highlights: [
      {
        title: 'Mindbender',
        desc: "World's largest indoor triple-loop roller coaster.",
      },
      {
        title: 'Family Zones',
        desc: 'Rides, games, and entertainment for kids.',
      },
      {
        title: 'Live Entertainment',
        desc: 'Daily shows and seasonal performances.',
      },
      {
        title: 'Event Spaces',
        desc: 'Corporate bookings and brand activations.',
      },
    ],
    packages: [
      {
        name: 'Group Visit',
        size: '15+ guests',
        includes: 'Admission, wristbands, group entry lane',
      },
      {
        name: 'Corporate Package',
        size: '40+ guests',
        includes: 'Private zone access, catering, branding',
      },
      {
        name: 'Full Buyout',
        size: '300+ guests',
        includes: 'Exclusive access, F&B, activation space',
      },
    ],
  },
};

const AttractionDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const data = attractionData[slug];

  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    guests: '',
    date: '',
    package: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!data) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="text-center">
          <p className="text-white text-2xl mb-6">Attraction not found.</p>
          <button
            onClick={() => navigate('/')}
            className="px-8 py-3 border border-white/20 text-white text-[11px] uppercase"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">

      {/* Back button */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={() => navigate(-1)}
          className="text-white/60 hover:text-white text-[11px] uppercase"
        >
          ← Back
        </button>
      </div>

      {/* Hero */}
      <div className="relative h-[60vh]">
        <video
          className="absolute w-full h-full object-cover"
          src={data.video}
          autoPlay
          loop
          muted
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute bottom-10 left-10">
          <p className="text-gray-400 text-[11px] uppercase tracking-[3px]">
            {data.label}
          </p>
          <h1 className="text-5xl md:text-7xl font-light">{data.title}</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* Stats */}
        <div className="grid grid-cols-3 mb-16">
          {[data.stat1, data.stat2, data.stat3].map((s) => (
            <div key={s.label} className="text-center p-6 border border-[#1a1a1a]">
              <div className="text-4xl">{s.value}</div>
              <div className="text-[11px] text-gray-500 uppercase">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-400 mb-16">{data.description}</p>

        {/* Highlights */}
        <div className="grid gap-4 mb-16">
          {data.highlights.map((h, i) => (
            <div key={i} className="p-4 border border-[#1a1a1a]">
              <h3 className="text-white">{h.title}</h3>
              <p className="text-gray-500 text-sm">{h.desc}</p>
            </div>
          ))}
        </div>

        {/* Packages */}
        <div className="grid md:grid-cols-3 gap-4 mb-20">
          {data.packages.map((p, i) => (
            <div key={i} className="p-6 border border-[#1a1a1a]">
              <h3 className="text-white">{p.name}</h3>
              <p className="text-gray-500 text-sm">{p.size}</p>
              <p className="text-gray-600 text-sm mt-2">{p.includes}</p>
            </div>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl">

          <input
            placeholder="Name"
            className="w-full p-3 bg-[#111] border border-[#1a1a1a]"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            placeholder="Email"
            className="w-full p-3 bg-[#111] border border-[#1a1a1a]"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            placeholder="Guests"
            className="w-full p-3 bg-[#111] border border-[#1a1a1a]"
            value={form.guests}
            onChange={(e) => setForm({ ...form, guests: e.target.value })}
          />

          <input
            type="date"
            className="w-full p-3 bg-[#111] border border-[#1a1a1a]"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
          />

          <button
            type="submit"
            className="w-full p-3 border border-white text-white uppercase text-[11px] hover:bg-white hover:text-black"
          >
            Submit
          </button>

        </form>

      </div>
    </div>
  );
};

export default AttractionDetail;