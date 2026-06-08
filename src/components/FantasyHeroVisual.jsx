import { motion } from "framer-motion";

const SPARKLES = [
  { cx: 72, cy: 118, r: 3.5, delay: 0 },
  { cx: 328, cy: 96, r: 3, delay: 0.4 },
  { cx: 340, cy: 268, r: 3.5, delay: 0.8 },
  { cx: 58, cy: 290, r: 3, delay: 1.2 },
  { cx: 200, cy: 42, r: 4, delay: 0.6 },
  { cx: 368, cy: 188, r: 2.8, delay: 1.0 },
  { cx: 120, cy: 60, r: 2.5, delay: 0.3 },
  { cx: 280, cy: 320, r: 3, delay: 0.9 },
  { cx: 48, cy: 200, r: 2.5, delay: 1.4 },
];

const ORBIT_GEMS = [
  { angle: 0, color: "#B8FFFE" },
  { angle: 72, color: "#E9D5FF" },
  { angle: 144, color: "#FBCFE8" },
  { angle: 216, color: "#BAE6FD" },
  { angle: 288, color: "#CFFAFE" },
];

const GemOnOrbit = ({ angle, color, radius = 148 }) => {
  const rad = (angle * Math.PI) / 180;
  const x = 200 + Math.cos(rad) * radius;
  const y = 200 + Math.sin(rad) * radius * 0.38;

  return (
    <circle
      cx={x}
      cy={y}
      r="6"
      fill={color}
      filter="url(#heroGlow)"
      opacity="1"
    />
  );
};

const FantasyHeroVisual = () => {
  return (
    <motion.div
      className="fantasy-hero-visual"
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="fantasy-hero-visual__float"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          viewBox="0 0 400 400"
          className="fantasy-hero-visual__svg"
          role="img"
          aria-label="Magical cosmic orb"
        >
          <defs>
            <radialGradient id="heroOrbCore" cx="38%" cy="32%" r="70%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="25%" stopColor="#F0FFFF" />
              <stop offset="50%" stopColor="#82E8EB" />
              <stop offset="78%" stopColor="#A5B4FC" />
              <stop offset="100%" stopColor="#818CF8" />
            </radialGradient>
            <radialGradient id="heroOrbAura" cx="50%" cy="50%" r="55%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.45)" />
              <stop offset="35%" stopColor="rgba(130, 232, 235, 0.75)" />
              <stop offset="100%" stopColor="rgba(167, 139, 250, 0)" />
            </radialGradient>
            <radialGradient id="heroOrbHalo" cx="50%" cy="50%" r="50%">
              <stop offset="70%" stopColor="rgba(255,255,255,0)" />
              <stop offset="88%" stopColor="rgba(186, 230, 253, 0.55)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.35)" />
            </radialGradient>
            <linearGradient id="heroRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
              <stop offset="35%" stopColor="#82E8EB" stopOpacity="1" />
              <stop offset="65%" stopColor="#E9D5FF" stopOpacity="1" />
              <stop offset="100%" stopColor="#FBCFE8" stopOpacity="1" />
            </linearGradient>
            <filter id="heroGlow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="heroShine" x="-120%" y="-120%" width="340%" height="340%">
              <feGaussianBlur stdDeviation="12" result="blur" />
              <feColorMatrix
                in="blur"
                type="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1.2 0"
              />
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <circle cx="200" cy="200" r="178" fill="url(#heroOrbAura)" className="fantasy-hero-visual__aura" />
          <circle cx="200" cy="200" r="175" fill="none" stroke="url(#heroOrbHalo)" strokeWidth="3" className="fantasy-hero-visual__halo" />

          <motion.g
            style={{ transformOrigin: "200px 200px" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          >
            <ellipse
              cx="200"
              cy="200"
              rx="155"
              ry="58"
              fill="none"
              stroke="url(#heroRingGrad)"
              strokeWidth="2.5"
              strokeDasharray="10 14"
              opacity="1"
              filter="url(#heroGlow)"
            />
            {ORBIT_GEMS.map((gem) => (
              <GemOnOrbit key={gem.angle} {...gem} radius={155} />
            ))}
          </motion.g>

          <motion.g
            style={{ transformOrigin: "200px 200px" }}
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <ellipse
              cx="200"
              cy="200"
              rx="125"
              ry="42"
              fill="none"
              stroke="#E0FFFE"
              strokeWidth="1.8"
              strokeDasharray="4 10"
              opacity="0.85"
              transform="rotate(52 200 200)"
              filter="url(#heroGlow)"
            />
          </motion.g>

          <motion.g
            style={{ transformOrigin: "200px 200px" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          >
            <circle cx="200" cy="52" r="5" fill="#FEF08A" filter="url(#heroGlow)" />
            <circle cx="348" cy="200" r="4.5" fill="#F0ABFC" filter="url(#heroGlow)" />
            <circle cx="200" cy="348" r="5" fill="#7DD3FC" filter="url(#heroGlow)" />
            <circle cx="52" cy="200" r="4.5" fill="#FDA4AF" filter="url(#heroGlow)" />
          </motion.g>

          <motion.g
            animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.04, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "200px 200px" }}
          >
            <polygon
              points="200,148 228,188 218,236 182,236 172,188"
              fill="rgba(255,255,255,0.28)"
              stroke="rgba(255,255,255,0.75)"
              strokeWidth="2"
            />
            <circle
              cx="200"
              cy="200"
              r="58"
              fill="url(#heroOrbCore)"
              filter="url(#heroShine)"
              className="fantasy-hero-visual__core"
            />
            <circle cx="178" cy="176" r="16" fill="rgba(255,255,255,0.65)" />
            <circle cx="218" cy="212" r="6" fill="rgba(255,255,255,0.4)" />
          </motion.g>

          {SPARKLES.map((sparkle, i) => (
            <motion.circle
              key={i}
              cx={sparkle.cx}
              cy={sparkle.cy}
              r={sparkle.r}
              fill="#fff"
              filter="url(#heroGlow)"
              animate={{ opacity: [0.5, 1, 0.5], scale: [0.9, 1.4, 0.9] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: sparkle.delay,
              }}
            />
          ))}
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default FantasyHeroVisual;
