import useAuthUser from "@/hooks/useAuthUser"
import { supabase } from "@/libs/utils/supabaseClient"
import { ToggleTheme } from "@/libs/utils/themes"
import {
  Avatar,
  Box,
  Button,
  Collapse,
  Flex,
  HStack,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  useBreakpointValue,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { FaBars, FaChevronDown, FaChevronRight, FaMoon, FaSun, FaTimes } from "react-icons/fa"

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onToggle } = useDisclosure()
  const { toggleBgColor, toggleTextColor } = ToggleTheme()
  const router = useRouter()
  const { user } = useAuthUser()

  const defaultValue = {
    firstname: "",
    lastname: "",
    id: "",
  }

  const [fieldValues, setFieldValues] = useState(defaultValue)

  useEffect(() => {
    if (user) getProfile(user.id)
  }, [user])

  const getProfile = async (user_id) => {
    let { data } = await supabase.from("profiles").select("firstname,lastname").eq("id", user_id)
    if (data) {
      setFieldValues({
        ...fieldValues,
        firstname: data[0].firstname,
        lastname: data[0].lastname,
      })
    }
  }

  const handleSignOut = async (e) => {
    e.preventDefault()

    const { error } = await supabase.auth.signOut()

    if (error) {
      alert(JSON.stringify(error))
    } else {
      router.push("/")
    }
  }

  return (
    <Box>
      <Flex
        bg={toggleBgColor}
        color={toggleTextColor}
        minW={"full"}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <FaTimes w={3} h={3} /> : <FaBars w={5} h={5} />}
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>

        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }} alignItems={"center"}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontSize={useBreakpointValue({
              base: "lg",
              md: "3xl",
            })}
            color={toggleTextColor}
          >
            NKC就活状況
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <>
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
            alignItems={"center"}
          >
            <Button display={{ base: "none", md: "inline-flex" }} onClick={toggleColorMode}>
              {colorMode === "light" ? <FaMoon /> : <FaSun />}
            </Button>
            <Flex
              // alignItems={"center"}
              direction={"row"}
              zIndex={100}
            >
              <Menu>
                <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: "none" }}>
                  <HStack>
                    <Avatar size={"sm"} src={""} />
                    <Box display={{ base: "none", md: "flex" }}>
                      <FaChevronDown />
                    </Box>
                  </HStack>
                </MenuButton>
                <MenuList>
                  <MenuGroup title={fieldValues.lastname + " " + fieldValues.firstname}></MenuGroup>
                  <MenuDivider />
                  <MenuItem
                    onClick={() => {
                      router.push("/profilePage/")
                    }}
                  >
                    プロフィール
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      router.replace(`/active/${user.id}`)
                    }}
                  >
                    自分の活動
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem onClick={handleSignOut}>ログアウト</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Stack>
        </>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  )
}

const DesktopNav = () => {
  const router = useRouter()
  const { toggleTextColor, toggleHoverBgColor, toggleHoverTextColor, toggleSubBgColor } =
    ToggleTheme()

  return (
    <Stack direction={"row"} spacing={4}>
      {ROUTE_ITEMS.map((routeItem) => (
        <Box key={routeItem.label} cursor={"pointer"}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                p={2}
                onClick={() => {
                  router.push(`${routeItem.process ?? ""}`)
                }}
                fontSize={"sm"}
                fontWeight={500}
                color={toggleTextColor}
                _hover={{
                  textDecoration: "none",
                  color: toggleHoverTextColor,
                }}
              >
                {routeItem.label}
              </Box>
            </PopoverTrigger>

            {routeItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={toggleSubBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {routeItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}

const DesktopSubNav = ({ label, process, subLabel }) => {
  const { toggleMainAccentColor, subAccentColor } = ToggleTheme()
  const router = useRouter()
  return (
    <Box
      cursor={"pointer"}
      onClick={() => {
        {
          process && router.push(`${process}`)
        }
      }}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: toggleMainAccentColor }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: subAccentColor }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={subAccentColor} w={5} h={5} as={FaChevronRight} />
        </Flex>
      </Stack>
    </Box>
  )
}

const MobileNav = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const router = useRouter()
  const { toggleBgColor, toggleBorderColor } = ToggleTheme()
  return (
    <Stack
      bg={toggleBgColor}
      p={4}
      display={{ md: "none" }}
      borderBottom={"1px"}
      borderBottomStyle={"solid"}
      borderBottomColor={toggleBorderColor}
    >
      {ROUTE_ITEMS.map((routeItem) => (
        <MobilerouteItem key={routeItem.label} {...routeItem} />
      ))}
    </Stack>
  )
}

const MobilerouteItem = ({ label, children, process }) => {
  const { isOpen, onToggle } = useDisclosure()
  const router = useRouter()
  const { toggleBgColor, toggleTextColor, toggleBorderColor } = ToggleTheme()

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        onClick={() => {
          router.push(`${process ?? ""}`)
        }}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={600} color={toggleTextColor}>
          {label}
        </Text>
        {children && (
          <Icon
            as={FaChevronDown}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={toggleBorderColor}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Box
                py={2}
                key={child.label}
                onClick={() => {
                  router.push(`${child.process}`)
                }}
              >
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}

const ROUTE_ITEMS = [
  {
    label: "アカウント情報",
    process: "/profilePage/",
  },
  // {
  //   label: "就活状況",
  //   children: [
  //     {
  //       label: "自分の就活状況",
  //       subLabel: "自分の就活状況を表示します。",
  //       process: "/myData/",
  //     },
  //     {
  //       label: "みんなの就活状況",
  //       subLabel: "みんなの就活状況を表示します。",
  //       process: "/databaseAll",
  //     },
  //   ],
  // },
  // {
  //   label: "自分の就活状況",
  //   process: "/myData/",
  // },
  // {
  //   label: "みんなの就活状況",
  //   process: "/databaseAll",
  // },
  {
    label: "就活状況確認",
    process: "/everyoneTable/",
  },
]
