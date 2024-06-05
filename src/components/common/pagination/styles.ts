import { tv } from 'tailwind-variants'

const baseItem = tv({
  base: [
    'ui-flex ui-h-[32px] ui-w-[32px] ui-cursor-pointer ui-items-center ui-justify-center ui-rounded-lg ui-border ui-border-border-200 ui-px-1 ui-font-medium ui-leading-[normal] ui-text-text-primary',
  ],
  variants: {
    disabled: {
      true: '!ui-cursor-not-allowed',
    },
  },
})

const item = tv({
  extend: baseItem,
  variants: {
    active: {
      true: 'ui-bg-primary-500 ui-font-bold ui-text-white',
    },
  },
  compoundVariants: [
    {
      active: false,
      disabled: true,
      className: '!ui-cursor-not-allowed',
    },
    {
      active: false,
      disabled: false,
      className: 'hover:ui-border-primary-500 hover:ui-text-primary-500',
    },
  ],
})

const icon = tv({
  extend: baseItem,
  base: 'ui-mx-1',
  variants: {
    active: {
      true: '',
      false: '!ui-cursor-not-allowed',
    },
    next: {
      true: 'ui-cursor-pointer',
    },
  },
  compoundVariants: [
    {
      active: true,
      disabled: true,
      class: '!ui-cursor-not-allowed',
    },
    {
      active: true,
      disabled: false,
      class: 'hover:ui-border-primary-500 hover:ui-text-primary-500',
    },
  ],
})

const dot = tv({
  extend: baseItem,
  base: 'ui-group ui-border-none',
  variants: {
    disabled: {
      true: 'ui-cursor-not-allowed',
      false: 'ui-cursor-pointer',
    },
  },
})

export const paginationStyles = { item, dot, icon }
