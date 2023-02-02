import useAuthUser from "@/hooks/useAuthUser"
import { supabase } from "@/libs/utils/supabaseClient"
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  HStack,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { ChangeDataModal } from "./AccountPageModal"

export const AccountInfo = (props) => {
  const { user } = useAuthUser()

  const defaultValue = {
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    date_of_birth: "",
    course: "",
    department: "",
    class: "",
    student_id: "",
    class_number: "",
  }

  const [fieldValues, setFieldValues] = useState(defaultValue)

  useEffect(() => {
    if (user) getProfile(user.id)
  }, [user])
  useEffect(() => {
    console.log(fieldValues)
  }, [fieldValues])

  const getProfile = async (user_id) => {
    let { data } = await supabase
      .from("profiles")
      .select("firstname,lastname,date_of_birth,course,department,class,student_id,class_number")
      .eq("id", user_id)
    if (data) {
      setFieldValues({
        ...fieldValues,
        email: user?.email,
        firstname: data[0].firstname,
        lastname: data[0].lastname,
        date_of_birth: data[0].date_of_birth,
        course: data[0].course,
        department: data[0].department,
        class: data[0].class,
        student_id: String(data[0].student_id),
        class_number: String(data[0].class_number),
      })
    }
  }

  return (
    <>
      <Card w={"60vw"} border="3mm ridge rgba(211, 220, 50, .6)">
        <CardHeader>
          <HStack justify={"space-between"}>
            <Heading size="md"> アカウント情報 </Heading>
            <ChangeDataModal isUser={true} textValue={"変更"} />
          </HStack>
        </CardHeader>
        <CardBody>
          <Stack
            h={"100%"}
            direction={"column"}
            divider={<StackDivider />}
            spacing="4"
            justify={"space-between"}
          >
            <></>
            <HStack justify={"space-between"}>
              <Heading size="md" textTransform="uppercase" w={"170px"}>
                名前
              </Heading>
              <HStack>
                <Text pt="2" fontSize="xl">
                  {fieldValues.lastname}
                </Text>
                <Text pt="2" fontSize="xl">
                  {fieldValues.firstname}
                </Text>
              </HStack>
              <Box w={"170px"}></Box>
            </HStack>
            <HStack justify={"space-between"}>
              <Heading size="md" textTransform="uppercase" w={"170px"}>
                学科
              </Heading>
              <HStack>
                <Text pt="2" fontSize="xl">
                  {fieldValues.course}
                </Text>
                {fieldValues.course !== "教員" && (
                  <Text pt="2" fontSize="xl">
                    {fieldValues.department}
                  </Text>
                )}
                {fieldValues.class !== "" && (
                  <Text pt="2" fontSize="xl" _after={{ content: `"組"` }}>
                    {fieldValues.class}
                  </Text>
                )}
              </HStack>
              <Box w={"170px"}></Box>
            </HStack>
            <HStack>
              <HStack justify={"space-between"}>
                <Heading size="md" textTransform="uppercase" w={"170px"}>
                  出席番号
                </Heading>
                <Text pt="2" fontSize="xl">
                  {fieldValues.student_id}
                </Text>
                <Box w={"170px"}></Box>
              </HStack>
              <HStack justify={"space-between"}>
                <Heading size="md" textTransform="uppercase" w={"170px"}>
                  出席番号
                </Heading>
                <Text pt="2" fontSize="xl">
                  {fieldValues.class_number}
                </Text>
                <Box w={"170px"}></Box>
              </HStack>
            </HStack>
            <HStack justify={"space-between"}>
              <Heading size="md" textTransform="uppercase" w={"170px"}>
                生年月日
              </Heading>
              <Text pt="2" fontSize="xl">
                {fieldValues.date_of_birth}
              </Text>
              <Box w={"170px"}></Box>
            </HStack>
            <HStack justify={"space-between"}>
              <Heading size="md" textTransform="uppercase" w={"170px"}>
                メールアドレス
              </Heading>
              <Text pt="2" fontSize="xl">
                {fieldValues.email}
              </Text>
              <ChangeDataModal isEmail={true} textValue={"メールアドレス変更"} />
            </HStack>
            <HStack justify={"space-between"}>
              <Heading size="md" textTransform="uppercase" w={"170px"}>
                パスワード
              </Heading>
              <Text pt="2" fontSize="xl"></Text>
              <ChangeDataModal isPass={true} textValue={"パスワード変更"} />
            </HStack>
            <></>
          </Stack>
        </CardBody>
      </Card>
    </>
  )
}
