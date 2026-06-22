import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Compass, Users, Sparkles, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

interface PhotoItem {
  src: string;
  title: string;
  aspect?: string;
  category: 'youth' | 'family' | 'friend' | 'hobby';
  description?: string;
}

export const Personal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'youth' | 'family' | 'friend' | 'hobby'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Sync activeTab state with URL search param "?tab=..."
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get('tab');
    if (tab && ['youth', 'family', 'friend', 'hobby'].includes(tab)) {
      setActiveTab(tab as any);
    } else {
      setActiveTab('all');
    }
  }, [location.search]);

  // Keyboard accessibility: Escape and Arrow keys for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') handleNextPhoto();
      if (e.key === 'ArrowLeft') handlePrevPhoto();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  const tabs = [
    { id: 'all', label: 'All Chronicles', icon: <Sparkles size={14} /> },
    { id: 'youth', label: 'Youth & Exploration', icon: <Compass size={14} /> },
    { id: 'family', label: 'Family & Warmth', icon: <Heart size={14} /> },
    { id: 'friend', label: 'Friends & Memories', icon: <Users size={14} /> },
    { id: 'hobby', label: 'Hobbies & Fuel', icon: <Sparkles size={14} /> },
  ];

  const photos: PhotoItem[] = [
    // --- YOUTH ---
    {
      src: '/assets/images/personal/youth_paris.jpg',
      title: 'Paris, France',
      category: 'youth',
      description: 'A journey exploring Paris, a symbol of wanderlust and broadening perspectives.',
    },
    {
      src: '/assets/images/personal/youth_korea.jpg',
      title: 'Seoul, Korea',
      category: 'youth',
      description: 'Experiencing Korean culture, part of a lifelong journey of learning.',
    },
    {
      src: '/assets/images/personal/youth_sansiro.jpg',
      title: 'San Siro Stadium, Italy',
      category: 'youth',
      description: 'Standing in front of the legendary stadium, fulfilling a childhood sports dream.',
    },
    {
      src: '/assets/images/personal/youth_nhatrang.jpg',
      title: 'Nha Trang Beach',
      category: 'youth',
      description: 'Immersing in Nha Trang\'s blue water, always loving nature and the sea.',
    },
    {
      src: '/assets/images/personal/youth_myself_1.jpg',
      title: 'Little Bennedict',
      category: 'youth',
      description: 'A childhood moment filled with innocence, warmth, and a bright smile.',
    },
    {
      src: '/assets/images/personal/youth_sister.jpg',
      title: 'With My Little Sister',
      category: 'youth',
      description: 'Sweet childhood memories with my little sister.',
    },

    // --- FAMILY ---
    {
      src: '/assets/images/personal/family_all_1.jpg',
      title: 'Family Gathering',
      category: 'family',
      description: 'My parents, my sister, and me - my ultimate motivation.',
    },
    {
      src: '/assets/images/personal/family_all_2.jpg',
      title: 'Cozy Dinner',
      category: 'family',
      description: 'Both parents are IT professors, guiding and passing the research flame to me.',
    },
    {
      src: '/assets/images/personal/family_cat.jpg',
      title: 'Family Cat - Bi',
      category: 'family',
      description: 'One of the two adorable family cats, the perfect stress reliever.',
    },
    {
      src: '/assets/images/personal/family_cat_bi.jpg',
      title: 'Bi The Explorer',
      category: 'family',
      description: 'A playful cat curious about the world around him.',
    },
    {
      src: '/assets/images/personal/family_cat_bi_0.jpg',
      title: 'Nap Time',
      category: 'family',
      description: 'A cozy and cute lazy moment of our beloved cat.',
    },
    {
      src: '/assets/images/personal/family_cat_bi_2.jpg',
      title: 'Bi Watching',
      category: 'family',
      description: 'Our two cats are an indispensable part of our warm home.',
    },

    // --- FRIEND ---
    {
      src: '/assets/images/personal/friend_group_10.jpg',
      title: 'Phu Nhuan High School Friends',
      category: 'friend',
      description: 'Close high school friends from THPT Phu Nhuan, preserving brilliant student years.',
    },
    {
      src: '/assets/images/personal/friend_group_4.jpg',
      title: 'HCMUT University Classmates',
      category: 'friend',
      description: 'Classmates at Bach Khoa University (HCMUT), studying and growing together.',
    },
    {
      src: '/assets/images/personal/friend_closefriend_0.jpg',
      title: 'Close Friends Gathering',
      category: 'friend',
      description: 'Unique perspectives and support from close friends that keep me striving.',
    },
    {
      src: '/assets/images/personal/friend_closefriend_1.jpg',
      title: 'Coffee Chats',
      category: 'friend',
      description: 'Endless conversations over coffee about life, future, and technology.',
    },
    {
      src: '/assets/images/personal/friend_group_1.jpg',
      title: 'High School Cafe Hangout',
      category: 'friend',
      description: 'Hanging out with close high school buddies at a local Saigon cafe.',
    },
    {
      src: '/assets/images/personal/friend_group_2.jpg',
      title: 'Team Building',
      category: 'friend',
      description: 'Burning our energy together after stressful study hours.',
    },
    {
      src: '/assets/images/personal/friend_group_2.2.jpg',
      title: 'High School Prom/Graduation',
      category: 'friend',
      description: 'Marking a memorable milestone of graduating high school.',
    },
    {
      src: '/assets/images/personal/friend_group_3.jpg',
      title: 'Birthday Celebration',
      category: 'friend',
      description: 'Accompanying each other through every new age milestone.',
    },
    {
      src: '/assets/images/personal/friend_group_5.jpg',
      title: 'Bách Khoa IT Buddies',
      category: 'friend',
      description: 'Studying together, writing code together in the lab at HCMUT.',
    },
    {
      src: '/assets/images/personal/friend_group_6.jpg',
      title: 'Weekend Outing',
      category: 'friend',
      description: 'Weekend chill sessions with the close friend group.',
    },
    {
      src: '/assets/images/personal/friend_group_7.jpg',
      title: 'Café Hangouts',
      category: 'friend',
      description: 'Our familiar spot where interesting ideas are born.',
    },
    {
      src: '/assets/images/personal/friend_group_8.jpg',
      title: 'Reunion Dinner',
      category: 'friend',
      description: 'Always making time to gather despite busy schedules.',
    },
    {
      src: '/assets/images/personal/friend_group_9.jpg',
      title: 'Graduation Day',
      category: 'friend',
      description: 'Saying goodbye to student life to step into the real world.',
    },
    {
      src: '/assets/images/personal/friend_closefriend_2.jpg',
      title: 'Brothers in Arms',
      category: 'friend',
      description: 'Close brothers who overcame academic challenges together.',
    },
    {
      src: '/assets/images/personal/friend_closefriend_3.jpg',
      title: 'Celebrating Projects',
      category: 'friend',
      description: 'A small party celebrating successfully completed tech projects.',
    },
    {
      src: '/assets/images/personal/friend_closefriend_5.jpg',
      title: 'Graduation Photoshoot',
      category: 'friend',
      description: 'Preserving the most beautiful photos of our youth.',
    },
    {
      src: '/assets/images/personal/friend_closefriend_6.jpg',
      title: 'Chill Sessions',
      category: 'friend',
      description: 'Simply sitting together and chatting after a long day.',
    },

    // --- HOBBY ---
    {
      src: '/assets/images/personal/hobby_gym.jpg',
      title: 'Gym & Iron Discipline',
      category: 'hobby',
      description: 'Daily physical training helps build strong willpower and resilience.',
    },
    {
      src: '/assets/images/personal/hobby_mymotorbike.jpg',
      title: 'My Custom AirBlade',
      category: 'hobby',
      description: 'My familiar AirBlade scooter - a companion on every Saigon street.',
    },
    {
      src: '/assets/images/personal/hobby_mymotorbike_2.jpg',
      title: 'Night Rides',
      category: 'hobby',
      description: 'Riding around the city at night to recharge creative inspiration.',
    },
    {
      src: '/assets/images/personal/hobby_figuretoys.jpg',
      title: 'Figure Toys Collection',
      category: 'hobby',
      description: 'Sourcing and collecting animation and superhero figure models.',
    },
    {
      src: '/assets/images/personal/hobby_ronaldo_fan.jpg',
      title: 'Cristiano Ronaldo Fan',
      category: 'hobby',
      description: 'A die-hard fan of CR7, drawing inspiration from his legendary self-discipline.',
    },
    {
      src: '/assets/images/personal/hobby_nab.jpg',
      title: 'Muay Thai & Kickboxing Training',
      category: 'hobby',
      description: 'Martial arts practice to release stress and maintain quick reflexes.',
    },
    {
      src: '/assets/images/personal/hobby_me.jpg',
      title: 'Daily Bennedict',
      category: 'hobby',
      description: 'An active, outgoing lifestyle balancing technology and daily life.',
    },
    {
      src: '/assets/images/personal/hobby_highschool.jpg',
      title: 'Active Lifestyle',
      category: 'hobby',
      description: 'Always seeking outdoor physical activities to refresh myself.',
    }
  ];

  // Filtering logic
  const filteredPhotos = activeTab === 'all' 
    ? photos 
    : photos.filter(p => p.category === activeTab);

  const handleNextPhoto = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length);
  };

  const handlePrevPhoto = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
  };

  // Section descriptions for rich copywriting
  const sectionTexts = {
    all: {
      title: "Life Outside of Code",
      desc: "A visual journal documenting my daily life, physical conditioning, personal hobbies, family roots, and close friendships outside the screen."
    },
    youth: {
      title: "Youth & Exploration",
      desc: "Since childhood, I have always had a deep desire to travel, experience the world, and discover new horizons. My open and outgoing nature makes it easy for me to communicate, meet people, and constantly learn from real-world experiences. This spirit of freedom and curiosity has shaped the open-minded and flexible thinking I carry today."
    },
    family: {
      title: "Family & Roots",
      desc: "My family consists of 4 members: my parents, my little sister, and me, along with the playful presence of our two adorable cats (Bi & Cat). Both of my parents are Information Technology (IT) lecturers at major universities in Vietnam. Their passion for technology and scientific guidance strongly inspired me, helping me take early and confident steps in AI & Software Engineering."
    },
    friend: {
      title: "Friends & Companions",
      desc: "My journey of growing up has always been filled with laughter and memories, thanks to close friends from primary school, high school (Phu Nhuan High School), and university (HCMUT - Bach Khoa). The unique perspectives, unconditional support, and relentless effort of these wonderful friends are a great source of motivation that pushes me to strive every day."
    },
    hobby: {
      title: "Hobbies & Fuel",
      desc: "When not coding, I recharge my energy through personal hobbies filled with discipline and passion. I am a loyal fan of Cristiano Ronaldo - a great source of inspiration for work ethic and determination. I condition my body through Gym training and Muay Thai / Kickboxing to build endurance. In addition, I find joy in assembling figure toys, exploring the city on my familiar AirBlade bike, and capturing ordinary life moments."
    }
  };

  // Split photos into 3 columns dynamically for stable Masonry rendering without multi-column bugs
  const col1 = filteredPhotos.filter((_, i) => i % 3 === 0);
  const col2 = filteredPhotos.filter((_, i) => i % 3 === 1);
  const col3 = filteredPhotos.filter((_, i) => i % 3 === 2);

  return (
    <div className="w-full min-h-screen bg-bg text-text-body flex flex-col items-center overflow-x-hidden">
      <div className="w-full max-w-[1360px] mx-auto px-6 md:px-12 py-24 flex flex-col items-center">
        
        {/* Page Title & Narrative Intro */}
        <ScrollReveal className="text-center mb-14 max-w-3xl">
          <span className="text-xs uppercase tracking-widest font-semibold text-accent">Journal</span>
          <h1 className="text-4xl md:text-6xl font-bold font-display text-text-heading mt-2">
            Personal Life
          </h1>
          <p className="text-sm md:text-base text-text-muted mt-4 leading-relaxed font-body">
            {sectionTexts[activeTab].desc}
          </p>
        </ScrollReveal>

        {/* Dynamic Category Selector */}
        <ScrollReveal className="w-full flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-2 p-1.5 rounded-full glass-panel max-w-max">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => navigate(tab.id === 'all' ? '/personal' : `/personal?tab=${tab.id}`)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'bg-accent text-bg shadow-md'
                    : 'text-text-muted hover:text-text-heading hover:bg-surface-2'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Stable Masonry Flex Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            <AnimatePresence mode="popLayout">
              {col1.map((photo) => {
                const globalIndex = filteredPhotos.findIndex(p => p.src === photo.src);
                return (
                  <motion.div
                    key={photo.src}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setLightboxIndex(globalIndex)}
                    className="group relative overflow-hidden rounded-3xl border border-border-token/20 bg-bg-alt/30 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500 cursor-pointer"
                  >
                    <div className="relative overflow-hidden w-full">
                      <img 
                        src={photo.src} 
                        alt={photo.title}
                        loading="lazy"
                        className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/85 via-bg-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 select-none pointer-events-none">
                        <div className="flex justify-end w-full">
                          <div className="p-1.5 rounded-full bg-accent/20 text-accent">
                            <Maximize2 size={12} />
                          </div>
                        </div>
                        <h3 className="text-base font-bold text-white mt-1.5 font-display">
                          {photo.title}
                        </h3>
                        {photo.description && (
                          <p className="text-xs text-white/70 mt-1 line-clamp-2 leading-relaxed">
                            {photo.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            <AnimatePresence mode="popLayout">
              {col2.map((photo) => {
                const globalIndex = filteredPhotos.findIndex(p => p.src === photo.src);
                return (
                  <motion.div
                    key={photo.src}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setLightboxIndex(globalIndex)}
                    className="group relative overflow-hidden rounded-3xl border border-border-token/20 bg-bg-alt/30 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500 cursor-pointer"
                  >
                    <div className="relative overflow-hidden w-full">
                      <img 
                        src={photo.src} 
                        alt={photo.title}
                        loading="lazy"
                        className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/85 via-bg-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 select-none pointer-events-none">
                        <div className="flex justify-end w-full">
                          <div className="p-1.5 rounded-full bg-accent/20 text-accent">
                            <Maximize2 size={12} />
                          </div>
                        </div>
                        <h3 className="text-base font-bold text-white mt-1.5 font-display">
                          {photo.title}
                        </h3>
                        {photo.description && (
                          <p className="text-xs text-white/70 mt-1 line-clamp-2 leading-relaxed">
                            {photo.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            <AnimatePresence mode="popLayout">
              {col3.map((photo) => {
                const globalIndex = filteredPhotos.findIndex(p => p.src === photo.src);
                return (
                  <motion.div
                    key={photo.src}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setLightboxIndex(globalIndex)}
                    className="group relative overflow-hidden rounded-3xl border border-border-token/20 bg-bg-alt/30 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500 cursor-pointer"
                  >
                    <div className="relative overflow-hidden w-full">
                      <img 
                        src={photo.src} 
                        alt={photo.title}
                        loading="lazy"
                        className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/85 via-bg-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 select-none pointer-events-none">
                        <div className="flex justify-end w-full">
                          <div className="p-1.5 rounded-full bg-accent/20 text-accent">
                            <Maximize2 size={12} />
                          </div>
                        </div>
                        <h3 className="text-base font-bold text-white mt-1.5 font-display">
                          {photo.title}
                        </h3>
                        {photo.description && (
                          <p className="text-xs text-white/70 mt-1 line-clamp-2 leading-relaxed">
                            {photo.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-bg-dark/95 backdrop-blur-md flex items-center justify-center p-4 select-none"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-surface-2/20 border border-white/10 text-white/80 hover:text-white hover:bg-surface-2/40 transition-colors z-50 cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X size={20} />
            </button>

            {/* Left Navigation Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevPhoto();
              }}
              className="absolute left-4 p-3 rounded-full bg-surface-2/20 border border-white/10 text-white/80 hover:text-white hover:bg-surface-2/40 transition-colors z-50 cursor-pointer hidden md:block"
              aria-label="Previous Photo"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Right Navigation Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNextPhoto();
              }}
              className="absolute right-4 p-3 rounded-full bg-surface-2/20 border border-white/10 text-white/80 hover:text-white hover:bg-surface-2/40 transition-colors z-50 cursor-pointer hidden md:block"
              aria-label="Next Photo"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image Container with dynamic scaling */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="max-w-5xl max-h-[80vh] flex flex-col items-center justify-center relative select-text"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredPhotos[lightboxIndex].src}
                alt={filteredPhotos[lightboxIndex].title}
                className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl border border-white/5"
              />

              {/* Bottom Caption Info (Full uncensored description) */}
              <div className="w-full text-center mt-4 px-6 max-w-2xl">
                <h2 className="text-lg md:text-xl font-bold text-white mt-1 font-display">
                  {filteredPhotos[lightboxIndex].title}
                </h2>
                {filteredPhotos[lightboxIndex].description && (
                  <p className="text-xs md:text-sm text-white/70 mt-1.5 leading-relaxed font-body">
                    {filteredPhotos[lightboxIndex].description}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Personal;
