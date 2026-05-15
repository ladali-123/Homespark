import React from "react";

// lucide-react versions me Facebook/Instagram/Youtube exports consistently available nahi hote.
// Is file me safe fallback icons diye gaye hain taaki Footer build crash na ho.

export function FacebookIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06C2 17.11 5.66 21.27 10.44 22V15.4H7.9V12.06H10.44V9.89C10.44 7.38 11.93 5.99 14.26 5.99C15.32 5.99 16.44 6.18 16.44 6.18V8.54H15.25C14.05 8.54 13.64 9.3 13.64 10.12V12.06H16.33L15.9 15.4H13.64V22C18.42 21.27 22 17.11 22 12.06Z" />
    </svg>
  );
}

export function InstagramIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7Zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm5.5-2.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z" />
    </svg>
  );
}

export function YoutubeIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M21.8 8.001s.2-1.387-.55-2.14c-.77-.77-1.67-.77-2.07-.82C16.34 4.85 12 4.85 12 4.85h-.01s-4.34 0-7.18.19c-.4.05-1.3.05-2.07.82C2 6.614 2.2 8.001 2.2 8.001S2 9.58 2 11.16v1.68c0 1.58.2 3.159.2 3.159s-.2 1.387.55 2.14c.77.77 1.78.75 2.23.81 1.61.16 7.03.22 7.03.22s4.34 0 7.18-.19c.4-.05 1.3-.05 2.07-.82.75-.75.55-2.14.55-2.14s.2-1.58.2-3.159v-1.68c0-1.58-.2-3.159-.2-3.159ZM10 15.5v-7l6 3.5-6 3.5Z" />
    </svg>
  );
}

