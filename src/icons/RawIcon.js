import React from "react";

export default function RawIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="41"
      height="25"
      viewBox="0 0 41 25"
      className={className}
    >
      <text
        id="RAW"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(1.5 19.5)"
        strokeWidth="1.5"
        fontSize="18"
        fontFamily="Dosis-ExtraLight_ExtraBold, Dosis"
        fontWeight="200"
        letterSpacing="0.02em"
      >
        <tspan x="0" y="0">
          RAW
        </tspan>
      </text>
    </svg>
  );
}
