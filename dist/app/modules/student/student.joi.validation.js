"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const userNameValidationSchema = joi_1.default.object({
    firstName: joi_1.default.string().required().trim().max(20).regex(/^[A-Za-z]+$/).message('First name is not in valid format'),
    middleName: joi_1.default.string().trim(),
    lastName: joi_1.default.string().required().trim().regex(/^[A-Za-z]+$/).message('Last name is not in valid format'),
});
// Joi schema for Guardian
const guardianValidationSchema = joi_1.default.object({
    fatherName: joi_1.default.string().required().trim(),
    fatherOccupation: joi_1.default.string().required().trim(),
    fatherContactNo: joi_1.default.string().required().trim(),
    motherName: joi_1.default.string().required().trim(),
    motherOccupation: joi_1.default.string().required().trim(),
    motherContactNo: joi_1.default.string().required().trim(),
});
// Joi schema for LocalGuardian
const localGuardianValidationSchema = joi_1.default.object({
    name: joi_1.default.string().required().trim(),
    occupation: joi_1.default.string().required().trim(),
    contactNo: joi_1.default.string().required().trim(),
    address: joi_1.default.string().required().trim(),
});
// Joi schema for Student
const studentValidationSchema = joi_1.default.object({
    id: joi_1.default.string().required().trim(),
    name: userNameValidationSchema.required(),
    gender: joi_1.default.string().valid('male', 'female', 'other').required(),
    dateOfBirth: joi_1.default.string(),
    email: joi_1.default.string().required().trim().email(),
    contactNumber: joi_1.default.number().required(),
    emergencyContactNo: joi_1.default.number().required(),
    bloodGroup: joi_1.default.string().valid('A', 'B', 'AB', 'O', 'A+', 'B+', 'AB+', 'O+').required(),
    presentAddress: joi_1.default.string().required().trim(),
    permanentAddress: joi_1.default.string().required().trim(),
    guardian: guardianValidationSchema.required(),
    localGuardian: localGuardianValidationSchema.required(),
    profileImage: joi_1.default.string(),
    isActive: joi_1.default.string().valid('active', 'blocked').default('active').required(),
});
exports.default = studentValidationSchema;
