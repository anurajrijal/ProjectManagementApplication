import {body} from "express-validator";
import {AvailableUserRole} from "../utils/constants.js"

const userRegisterValidator =()=>{
    return [
        body("email")
            .trim()
            .notEmpty()
            .withMessage("Email is required")
            .isEmail()
            .withMessage("Email is invalid"),
        body("username")
            .trim()
            .notEmpty()
            .withMessage("Username is required")
            .isLowercase("Username  must be lowercase")
            .isLength({min:3})
            .withMessage("Username must be at least 3 characters long"),
        body("password")
            .trim()
            .notEmpty()
            .withMessage("Password is required"),

    ]
}

const userLoginValidator =()=>{
    return [
        body("email")
            .optional()
            .isEmail()
            .withMessage("Email is invalid"),
        body("password")
            .notEmpty()
            .withMessage("Password is required"),

    ]
}


// const userLoginValidator = ()=>{
//     return 
//        [ 
//         body("email")
//             .optional()
//             .isEmail()
//             .withMessage("Email is invalid"),
//         body("password")
//             .notEmpty()
//             .withMessage("password is required")
//     ]
    
// }




const userChangeCurrentPasswordValidator =()=>{
    return[
        body("oldPassword").notEmpty().withMessage("old password is required"),
        body("newPassword").notEmpty().withMessage("new password required")

    ]
};
const userForgotPasswordValidator = ()=>{
    return [
        body("email")
        .notEmpty()
        .withMessage("email is required")
        .isEmail()
        .withMessage("email is invalid")
    ]
}

const userResetForgotPasswordValidator = ()=>{
    return[
        body("newPassword").notEmpty().withMessage("password is required")
    ]
}


const createProjectValidator =()=>{
    return [
        body("name")
        .notEmpty()
        .withMessage("Name is required"),
        body("description").optional(),
    ]
}

const addMembertoProjectValidatior= ()=>{
    return [
        body("email")
        .trim()
        .notEmpty()
        .withMeassage("Email is required")
        .isEmail()
        .withMeassage("Email is invalid"),
        body("role")
        .notEmpty()
        .withMessage("Role is required")
        .isIn(AvailableUserRole)
        .withMessage("Role is invalid")


    ]
}
export {
    userRegisterValidator, userLoginValidator,userChangeCurrentPasswordValidator,
    userForgotPasswordValidator,userResetForgotPasswordValidator,createProjectValidator,addMembertoProjectValidatior,
}