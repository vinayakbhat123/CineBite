export const CheckValidData = (email,password,name) => {
 const isEmailValid =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
 const isPasswordValid = /^(?=.*?[0-9])(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[^0-9A-Za-z]).{8,32}$/.test(password);
 const isNameValid = /^[a-zA-Z]+(?:\\s[a-zA-Z]+)*$/.test(name);

 if (!isNameValid) return "Name Not Valid"
 if (!isEmailValid) return "Email Id Not valid";
 if (!isPasswordValid) return "Password Not Valid";

 return null;
}