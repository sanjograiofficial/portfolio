type SkillCircleProps = {
  name: string;
  level: number;
};

function SkillCircle({ name, level }: SkillCircleProps) {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const progress = (level / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative h-60 w-60">
        <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.15"
            strokeWidth="6"
          />

          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={`${progress} ${circumference}`}
            className="transition-all duration-1000 ease-out"
          />
        </svg>

        {/* Percentage in the center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-semibold">{level}%</span>
        </div>
      </div>

      <span className="text-sm font-medium">{name}</span>
    </div>
  );
}

export default SkillCircle;
