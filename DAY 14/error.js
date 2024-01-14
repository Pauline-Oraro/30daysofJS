//try block wraps the code that may throw an error
//catch block executes the code if an error occurs
//finally block executes the code regardless of whether a code occurs or not


try{
    let lastName = " Oraro"
    let fullName = firstName + lastName;
} catch (error){
    console.log(error)
} finally {
    console.log("It will still be executed")
}