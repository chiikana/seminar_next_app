import { theme, useColorModeValue } from "@chakra-ui/react"

export const themeColor = {
  bg: {
    main: {
      light: "gray.50",
      dark: "gray.800",
    },
    sub: {
      light: "gray.100",
      dark: "gray.700",
    },
  },
  text: {
    light: "gray.800",
    dark: "white",
  },
  border: {
    light: "gray.900",
    dark: "gray.200",
  },
  hover: {
    light: "gray.600",
    dark: "gray.200",
  },
  accent: {
    main: {
      light: "teal.50",
      dark: "teal.900",
    },
    sub: "green.400",
  },
}

export const ToggleTheme = () => {
  const toggleMainBgColor = useColorModeValue(themeColor.bg.main.light, themeColor.bg.main.dark)
  const toggleSubBgColor = useColorModeValue(themeColor.bg.sub.light, themeColor.bg.sub.dark)
  const toggleTextColor = useColorModeValue(themeColor.text.light, themeColor.text.dark)
  const toggleBorderColor = useColorModeValue(themeColor.border.light, themeColor.border.dark)
  const toggleHoverColor = useColorModeValue(themeColor.hover.light, themeColor.hover.dark)
  const toggleMainAccentColor = useColorModeValue(
    themeColor.accent.main.light,
    themeColor.accent.main.dark
  )
  const subAccentColor = themeColor.accent.sub

  return {
    toggleMainBgColor,
    toggleSubBgColor,
    toggleTextColor,
    toggleBorderColor,
    toggleHoverColor,
    toggleMainAccentColor,
    subAccentColor,
  }
}
