import React, { FC } from "react"

const MoonIcon: FC<{
  className?: string
}> = ({ className }) => {
  return (
    <svg
      width="47"
      height="50"
      className={`${className}`}
      viewBox="0 0 47 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.9939 39.301C22.9726 39.301 33.4939 28.7797 33.4939 15.801C33.4939 9.71716 31.1821 4.17331 27.3889 0C38.3513 2.64986 46.4939 12.5245 46.4939 24.301C46.4939 38.1081 35.301 49.301 21.4939 49.301C12.3544 49.301 4.36041 44.3967 0 37.0761C3.03275 38.5032 6.42016 39.301 9.9939 39.301Z"
        fill="#FFFB94"
      />
    </svg>
  )
}

export default MoonIcon
