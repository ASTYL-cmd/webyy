interface WordmarkProps {
  /** Size/spacing utilities only (e.g. "text-3xl"). Typography and colour are fixed by .wordmark in index.css. */
  className?: string;
}

/**
 * The one WEBYY wordmark: "Web" in the primary text colour + "yy" in brand blue,
 * Poppins Bold 700. Use this everywhere the brand name is shown as a logo.
 */
export default function Wordmark({ className = '' }: WordmarkProps) {
  return (
    <span className={`wordmark ${className}`}>
      <span className="sr-only">Webyy</span>
      <span aria-hidden="true">
        Web<span className="wordmark-y">yy</span>
      </span>
    </span>
  );
}
