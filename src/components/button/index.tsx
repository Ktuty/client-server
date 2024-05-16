import { Button as NextButton } from "@nextui-org/react"
import type React from "react"

type Props = {
  children: React.ReactNode
  icon?: JSX.Element
  className?: string
  type?: "button" | "submit" | "reset"
  fullWith?: boolean
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | undefined
}

export const Button: React.FC<Props> = ({
  children,
  icon,
  className,
  type,
  fullWith,
  color,
}) => {
  return (
    <NextButton
      startContent={icon}
      size="lg"
      color={color}
      variant="light"
      className={className}
      type={type}
      fullWidth={fullWith}
    >
      {children}
    </NextButton>
  )
}
