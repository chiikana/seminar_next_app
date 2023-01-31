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
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react"
import { useRouter } from "next/router"
import { FaChevronDown, FaChevronRight, FaBars, FaTimes, FaMoon, FaRegSun } from "react-icons/fa"
import { supabase } from "@/libs/utils/supabaseClient"
import useAuthUser from "@/hooks/useAuthUser"
import { useState, useEffect } from "react"

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onToggle } = useDisclosure()
  const toggleTextColor = useColorModeValue("gray.800", "white")
  const toggleBgColor = useColorModeValue("gray.50", "gray.800")
  const router = useRouter()
  const { user } = useAuthUser()

  const defaultValue = {
    firstname: "",
    lastname: "",
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
              {colorMode === "light" ? <FaMoon /> : <FaRegSun />}
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
  // const linkColor = useColorModeValue("gray.800", "gray.200");
  const linkColor = useColorModeValue("gray.800", "white")
  // const linkHoverColor = useColorModeValue("gray.400", "white");
  const linkHoverColor = useColorModeValue("gray.400", "white")
  // const popoverContentBgColor = useColorModeValue("white", "gray.800");
  const popoverContentBgColor = useColorModeValue("gray.50", "gray.800")
  return (
    <Stack direction={"row"} spacing={4}>
      {ROUTE_ITEMS.map((routeItem) => (
        <Box key={routeItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                p={2}
                onClick={() => {
                  router.push(`${routeItem.process ?? ""}`)
                }}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {routeItem.label}
              </Box>
            </PopoverTrigger>

            {routeItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
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
  const toggleTextColor = useColorModeValue("gray.800", "white")
  const toggleBgColor = useColorModeValue("gray.50", "gray.800")
  const toggleBorderColor = useColorModeValue("gray.200", "gray.900")
  const toggleSubNavHoverColor = useColorModeValue("teal.50", "teal.900")
  const subNavTextColor = "green.400"
  const router = useRouter()
  return (
    <Box
      // href={process}
      onClick={() => {
        router.push(`${process}`)
      }}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: toggleSubNavHoverColor }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: subNavTextColor }}
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
          <Icon color={subNavTextColor} w={5} h={5} as={FaChevronRight} />
        </Flex>
      </Stack>
    </Box>
  )
}

const MobileNav = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const router = useRouter()
  const toggleTextColor = useColorModeValue("gray.800", "white")
  const toggleBgColor = useColorModeValue("gray.50", "gray.800")
  const toggleBorderColor = useColorModeValue("gray.200", "gray.900")
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
  const toggleTextColor = useColorModeValue("gray.800", "white")
  const toggleBgColor = useColorModeValue("gray.50", "gray.800")
  const toggleBoderColor = useColorModeValue("gray.200", "gray.900")

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
          borderColor={toggleBoderColor}
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
    label: "Home",
    process: "/profilePage/",
  },
  {
    label: "就活状況",
    children: [
      {
        label: "自分の就活状況",
        subLabel: "自分の就活状況を表示します。",
        process: "/TablePage/",
      },
      {
        label: "みんなの就活状況",
        subLabel: "みんなの就活状況を表示します。",
        process: "/databaseAll",
      },
    ],
  },
]
