import { useEffect, useState } from "react";

interface TypewriterProps {
  phrases: string[];
  className?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  pause?: number;
}

/** Editorial typewriter — cycles through phrases with a thin blinking caret. */
export function Typewriter({
  phrases,
  className = "",
  typeSpeed = 70,
  deleteSpeed = 35,
  pause = 1800,
}: TypewriterProps) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index % phrases.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => i + 1);
    } else {
      timeout = setTimeout(
        () => {
          setText((t) =>
            deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1),
          );
        },
        deleting ? deleteSpeed : typeSpeed,
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, phrases, typeSpeed, deleteSpeed, pause]);

  return (
    <span className={className}>
      {text}
      <span aria-hidden="true" className="ml-1 inline-block w-[2px] bg-current animate-blink" style={{ height: "0.9em", verticalAlign: "-0.05em" }} />
    </span>
  );
}
