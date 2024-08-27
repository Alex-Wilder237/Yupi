import {
  PanInfo,
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom"; // Assuming you're using react-router-dom

const menuItems = [
  {
    linkName: "Accueil",
    linkUrl: "/",
  },
  {
    linkName: "À Propos",
    linkUrl: "/a-propos",
  },
  {
    linkName: "Service",
    linkUrl: "/Service",
  },
  {
    linkName: "Contact",
    linkUrl: "/contact",
  },
];

const angleIncrement = 360 / menuItems.length;
const dragFactor = 0.01;

export default function DraggableCurvedMenu() {
  const controls = useAnimation();
  const rotation = useMotionValue(0);
  const containerRef = useRef(null);
  const [middleItem, setMiddleItem] = useState(menuItems[0]);
  const location = useLocation(); // For highlighting the active link

  useEffect(() => {
    const unsubscribe = rotation.onChange((value) => {
      const adjustedRotation = ((value % 360) + 360) % 360;
      const middleIndex =
        Math.round(adjustedRotation / angleIncrement) % menuItems.length;
      const actualMiddleItem =
        menuItems[(menuItems.length - middleIndex) % menuItems.length];
      setMiddleItem(actualMiddleItem);
    });
    return () => unsubscribe();
  }, [rotation]);

  const onDrag = (_: any, info: PanInfo) => {
    const currentRotation = rotation.get() + info.offset.y * dragFactor;
    rotation.set(currentRotation);
  };

  const onDragEnd = (_: any, info: PanInfo) => {
    const endRotation = rotation.get() + info.velocity.y * dragFactor;
    controls.start({
      rotate: endRotation,
      transition: { type: "spring", mass: 0.1 },
    });
  };

  const transform = useTransform(rotation, (value) => {
    return `rotate(${value}deg)`;
  });

  return (
    <div
      className="relative flex h-[800px] w-full items-center justify-center overflow-hidden"
      ref={containerRef}
    >
      <div className="pointer-events-none absolute left-0 top-0 z-50 h-full w-full to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)] dark:bg-neutral-900"></div>
      <motion.div
        className="relative -ml-[800px] flex h-full w-[1600px] cursor-grab items-center justify-center active:cursor-grabbing"
        animate={controls}
        style={{
          transformOrigin: "center center",
          transform,
        }}
        drag="y"
        onDrag={onDrag}
        onDragEnd={onDragEnd}
      >
        {menuItems.map((item, index) => {
          const rotate = angleIncrement * index;

          return (
            <motion.div
              key={`${item.linkName}-${index}`}
              className={`absolute ${
                item === middleItem
                  ? "text-black font-bold text-2xl dark:text-mauve-dark-12"
                  : "text-mauve-light-12/30 text-sm dark:text-mauve-dark-12/30"
              } transition-colors duration-150`}
              style={{
                left: "50%",
                transform: `rotate(${rotate}deg) translateX(300px)`,
                transformOrigin: "left center",
              }}
            >
              <NavLink
                to={item.linkUrl}
                className={
                  location.pathname === item.linkUrl
                    ? "text-blue-700 pb-2 font-extrabold text-xl"
                    : " text-6xl text-blue-500"
                }
              >
                {item.linkName}
              </NavLink>
            </motion.div>
          );
        })}
      </motion.div>
      <div className="pointer-events-none absolute bottom-0 left-0 z-50 h-32 w-full bg-neutral-100 to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-neutral-900"></div>
    </div>
  );
}
