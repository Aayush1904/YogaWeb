import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import img from './yogg.avif';
const YogaPoseAnimation2 = () => {
  const yogaPersonRef = useRef(null);

  gsap.registerPlugin(gsap.plugins.transform); // Ensure transform plugin is registered

  useEffect(() => {
    const tl = gsap.timeline();

    // Downward-Facing Dog Pose (Adho Mukha Svanasana)
    const downwardDog = {
      x: -100, // Move image 100px to the right initially (can be adjusted)
      y: 50,
      rotate: -110,
      scaleX: 0.8,
      scaleY: 0.8,
    };

    // Warrior II Pose (Virabhadrasana II)
    const warriorII = {
      x: 100, // Move image 100px to the left (can be adjusted)
      y: 150,
      rotate: -20,
      scaleX: 1.1,
      scaleY: 1.1,
    };

    // Animate pose transition on mount or tab change (replace with your trigger)
    tl.to(yogaPersonRef.current, {
      duration: 2,
      ease: "power3.inOut",
      ...downwardDog,
    })
    .to(yogaPersonRef.current, {
      duration: 2,
      ease: "power3.inOut",
      ...warriorII,
    });

    // Cleanup function to prevent memory leaks
    return () => tl.kill();
  }, []);

  return (
    <div id="container">
      <img
        src={img}
        alt="Person"
        id="yoga-person"
        ref={yogaPersonRef}
        style={{maxWidth: "400px"}}
      />
    </div>
  );
};

export default YogaPoseAnimation2;
