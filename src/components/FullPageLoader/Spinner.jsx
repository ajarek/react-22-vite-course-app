import * as React from "react"

export const Spinner = (props) => (
  <svg
    width={40}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m2 10 3.4 1.963a15.956 15.956 0 0 1 2.56-3.326 15.992 15.992 0 0 1 5.11-3.445 15.966 15.966 0 0 1 6.252-1.261 15.991 15.991 0 0 1 11.363 4.706 15.99 15.99 0 0 1 3.446 5.11A15.884 15.884 0 0 1 35.396 20c0 2.171-.425 4.278-1.261 6.253a15.995 15.995 0 0 1-3.445 5.11 15.994 15.994 0 0 1-5.11 3.445 15.967 15.967 0 0 1-6.253 1.261c-1.4 0-2.784-.18-4.123-.53a15.973 15.973 0 0 1-3.718-1.506 16.159 16.159 0 0 1-6.082-6L2 30c.147.257.302.506.457.755C6.012 36.315 12.237 40 19.322 40c11.045 0 20-8.955 20-20s-8.955-20-20-20C11.922 0 5.457 4.02 2 10Z"
      fill="#323330"
    />
  </svg>
)

export default Spinner
