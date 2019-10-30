import React from "react";

export default function SpeechBubble({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
      width="151.758"
      height="49.24"
      viewBox="0 0 151.758 49.24"
      className={className}
    >
      <defs>
        <filter
          id="Polygon_5"
          x="0"
          y="0"
          width="38.592"
          height="37.458"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dx="2" dy="2" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="1" result="blur" />
          <feFlood flood-opacity="0.161" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Rectangle_106"
          x="21.758"
          y="6.24"
          width="130"
          height="43"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dx="2" dy="2" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="1" result="blur-2" />
          <feFlood flood-opacity="0.161" />
          <feComposite operator="in" in2="blur-2" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Polygon_5)">
        <path
          id="Polygon_5-2"
          data-name="Polygon 5"
          d="M11,0,22,25H0Z"
          transform="translate(1 20.15) rotate(-60.5)"
          fill="#fff"
        />
      </g>
      <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Rectangle_106)">
        <rect
          id="Rectangle_106-2"
          data-name="Rectangle 106"
          width="124"
          height="37"
          rx="5"
          transform="translate(22.76 7.24)"
          fill="#fff"
        />
      </g>
    </svg>
  );
}
