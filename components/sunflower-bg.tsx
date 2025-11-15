export function SunflowerBackground() {
  return (
    <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
        <defs>
          <pattern
            id="sunflower"
            x="0"
            y="0"
            width="400"
            height="400"
            patternUnits="userSpaceOnUse"
          >
            {/* Center circle */}
            <circle cx="200" cy="200" r="60" fill="#B8860B" opacity="0.6" />
            {/* Petals */}
            {[...Array(16)].map((_, i) => (
              <g key={i} transform={`rotate(${i * 22.5} 200 200)`}>
                <ellipse
                  cx="200"
                  cy="60"
                  rx="30"
                  ry="60"
                  fill="#FFD700"
                  opacity="0.5"
                />
              </g>
            ))}
          </pattern>
        </defs>
        <rect width="400" height="400" fill="url(#sunflower)" />
      </svg>
    </div>
  );
}

export function SunflowerHeroPattern() {
  return (
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
        <circle
          cx="200"
          cy="200"
          r="80"
          stroke="currentColor"
          strokeWidth="2"
          className="text-amber-600"
        />
        {[...Array(12)].map((_, i) => (
          <g key={i} transform={`rotate(${i * 30} 200 200)`}>
            <ellipse
              cx="200"
              cy="80"
              rx="20"
              ry="40"
              fill="currentColor"
              className="text-amber-400 opacity-30"
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
