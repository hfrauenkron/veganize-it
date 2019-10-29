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
        stroke-linecap="round"
        stroke-linejoin="round"
        transform="translate(1.5 19.5)"
        stroke-width="1.5"
        font-size="18"
        font-family="Dosis-ExtraLight_ExtraBold, Dosis"
        font-weight="200"
        letter-spacing="0.02em"
      >
        <tspan x="0" y="0">
          RAW
        </tspan>
      </text>
    </svg>
  );
}
