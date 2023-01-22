const handleSignUp = async (e, firstName, lastName, dateOfBirth, course, department, studentId) => {
  e.preventDefault()

  try {
    const { data, error } = await supabase.auth.signUp(
      {
        email: fieldValues.email,
        password: fieldValues.pass,
      },
      {
        data: {
          firstName: fieldValues.firstName,
          lastName: fieldValues.lastName,
          dateOfBirth: fieldValues.dateOfBirth,
          course: fieldValues.course,
          department: fieldValues.department,
          studentId: fieldValues.studentId,
        },
      }
    )
    console.log(data)
    if (error) throw error
    alert("success for signup!")
  } catch (error) {
    alert(error.error_description || error.message)
  }
}
