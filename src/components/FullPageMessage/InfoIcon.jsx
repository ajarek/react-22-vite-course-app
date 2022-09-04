import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={84}
    height={84}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M37.833 21.167h8.334V29.5h-8.334v-8.333Zm0 16.666h8.334v25h-8.334v-25ZM42 .333C19 .333.333 19 .333 42S19 83.667 42 83.667 83.667 65 83.667 42 65 .333 42 .333Zm0 75C23.625 75.333 8.667 60.375 8.667 42S23.625 8.667 42 8.667 75.333 23.625 75.333 42 60.375 75.333 42 75.333Z"
      fill="#000"
      fillOpacity={0.87}
    />
  </svg>
)

export default SvgComponent

