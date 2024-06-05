import { IIconProps } from "../interfaces/IIconProps"

const IconArrowRight = ({ className, color, width = 16 }: IIconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={width}
      viewBox='0 0 16 16'
      fill='none'
      className={className}
      color={color}
    >
      <path
        d='M6.00006 12.6666L9.67459 8.82483C10.1085 8.37113 10.1085 7.62871 9.67459 7.175L6.00006 3.33325'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default IconArrowRight