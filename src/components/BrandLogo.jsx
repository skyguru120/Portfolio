import { useId } from "react";
import { motion } from "framer-motion";

const BrandLogo = ({ size = 44, className = "", initials = "YK", animated = true }) => {
  const uid = useId().replace(/:/g, "");
  const fillGrad = `brand-fill-${uid}`;
  const strokeGrad = `brand-stroke-${uid}`;
  const glowFilter = `brand-glow-${uid}`;
  const [first, second] = [initials[0], initials.slice(1)];

  const Wrapper = animated ? motion.div : "div";
  const wrapperProps = animated
    ? { whileHover: { scale: 1.05 }, transition: { type: "spring", stiffness: 400, damping: 20 } }
    : {};

  return (
    <Wrapper
      className={`brand-logo ${className}`}
      style={{ height: size }}
      {...wrapperProps}
    >
      <svg
        viewBox="0 0 108 52"
        className="brand-logo__svg"
        style={{ height: size, width: "auto" }}
        role="img"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={fillGrad} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="45%" stopColor="#82E8EB" />
            <stop offset="100%" stopColor="#C4B5FD" />
          </linearGradient>
          <linearGradient id={strokeGrad} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="100%" stopColor="#E879F9" stopOpacity="0.9" />
          </linearGradient>
          <filter id={glowFilter} x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="2.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          d="M 8 44 Q 54 28 100 44"
          fill="none"
          stroke={`url(#${strokeGrad})`}
          strokeWidth="1.5"
          strokeLinecap="round"
          className="brand-logo__arc"
          opacity="0.65"
        />

        <text
          x="18"
          y="40"
          className="brand-logo__letter brand-logo__letter--1"
          fontFamily="Poppins, Arial, sans-serif"
          fontSize="38"
          fontWeight="900"
          fill={`url(#${fillGrad})`}
          stroke={`url(#${strokeGrad})`}
          strokeWidth="0.6"
          paintOrder="stroke fill"
          filter={`url(#${glowFilter})`}
        >
          {first}
        </text>
        <text
          x="54"
          y="40"
          className="brand-logo__letter brand-logo__letter--2"
          fontFamily="Poppins, Arial, sans-serif"
          fontSize="38"
          fontWeight="900"
          fill={`url(#${fillGrad})`}
          stroke={`url(#${strokeGrad})`}
          strokeWidth="0.6"
          paintOrder="stroke fill"
          filter={`url(#${glowFilter})`}
        >
          {second}
        </text>

        <circle cx="6" cy="12" r="1.5" fill="#82E8EB" className="brand-logo__spark brand-logo__spark--1" />
        <circle cx="102" cy="14" r="1.2" fill="#F9A8D4" className="brand-logo__spark brand-logo__spark--2" />
        <circle cx="98" cy="46" r="1.4" fill="#FFFFFF" className="brand-logo__spark brand-logo__spark--3" />
      </svg>
    </Wrapper>
  );
};

export default BrandLogo;
