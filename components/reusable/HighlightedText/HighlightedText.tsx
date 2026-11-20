import React from 'react';

interface HighlightedTextProps {
  text: string;
  highlight?: string;
  highlightClassName?: string;
}

/**
 * Renders `text`, wrapping the first occurrence of `highlight` in an italic accent span.
 * Falls back to plain text when a locale's highlight word does not appear in its title.
 */
function HighlightedText({ text, highlight, highlightClassName = 'display-em' }: HighlightedTextProps) {
  if (!highlight) return <>{text}</>;
  const start = text.indexOf(highlight);
  if (start === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, start)}
      <em className={highlightClassName}>{highlight}</em>
      {text.slice(start + highlight.length)}
    </>
  );
}

export default HighlightedText;
