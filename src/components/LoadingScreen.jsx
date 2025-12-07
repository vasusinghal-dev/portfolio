import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing...");

  useEffect(() => {
    const loadingTexts = ["Initializing...", "Almost ready..."];
    let textIndex = 0;

    const textInterval = setInterval(() => {
      textIndex = (textIndex + 1) % loadingTexts.length;
      setLoadingText(loadingTexts[textIndex]);
    }, 750);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(textInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-bg-light dark:bg-bg-dark transition-colors">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-primary) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative text-center max-w-md px-6">
        {/* Animated Logo */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          <div className="absolute inset-0 rounded-full border-2 border-primary/20" />
          <div className="absolute inset-4 rounded-full border-2 border-transparent border-t-primary animate-spin" />

          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-16 h-16 rounded-lg bg-primary flex justify-center items-center">
              <span className="text-white text-2xl font-bold">VD</span>
            </div>
          </div>

          <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-secondary animate-pulse" />
          <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-accent animate-pulse a-delay-500" />
        </div>

        {/* Text */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 gradient-text">VasuDev</h2>

          {/* ✅ Correct light/dark readable text */}
          <p className="mb-1 text-text-light dark:text-text-dark">
            {loadingText}
          </p>

          {/* ✅ Muted stays muted in both modes */}
          <p className="text-sm text-text-muted">
            Recent Graduate • Frontend Developer
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="w-full h-1.5 bg-bg-card rounded-full overflow-hidden mb-2">
            <div
              className="h-full bg-linear-to-r from-primary to-secondary rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* ✅ Correct contrast for numbers */}
          <div className="flex justify-between text-sm text-text-light dark:text-text-dark">
            <span>Loading</span>
            <span>{progress}%</span>
          </div>
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center items-center gap-2">
          {[0, 1, 2].map((i) => {
            const delay = ["a-delay-100", "a-delay-300", "a-delay-500"];
            return (
              <div
                key={i}
                className={`w-2 h-2 rounded-full bg-primary animate-pulse ${delay[i]}`}
              />
            );
          })}
        </div>

        {/* ✅ Subtle footer text */}
        <p className="text-xs text-text-muted-light dark:text-text-muted-dark mt-8 opacity-70">
          This portfolio is built with React & Tailwind CSS
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
