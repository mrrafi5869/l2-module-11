import Joi from "joi";

const userNameValidationSchema = Joi.object({
    firstName: Joi.string().required().trim().max(20).regex(/^[A-Za-z]+$/).message('First name is not in valid format'),
    middleName: Joi.string().trim(),
    lastName: Joi.string().required().trim().regex(/^[A-Za-z]+$/).message('Last name is not in valid format'),
  });
  
  // Joi schema for Guardian
  const guardianValidationSchema = Joi.object({
    fatherName: Joi.string().required().trim(),
    fatherOccupation: Joi.string().required().trim(),
    fatherContactNo: Joi.string().required().trim(),
    motherName: Joi.string().required().trim(),
    motherOccupation: Joi.string().required().trim(),
    motherContactNo: Joi.string().required().trim(),
  });
  
  // Joi schema for LocalGuardian
  const localGuardianValidationSchema = Joi.object({
    name: Joi.string().required().trim(),
    occupation: Joi.string().required().trim(),
    contactNo: Joi.string().required().trim(),
    address: Joi.string().required().trim(),
  });
  
  // Joi schema for Student
  const studentValidationSchema = Joi.object({
    id: Joi.string().required().trim(),
    name: userNameValidationSchema.required(),
    gender: Joi.string().valid('male', 'female', 'other').required(),
    dateOfBirth: Joi.string(),
    email: Joi.string().required().trim().email(),
    contactNumber: Joi.number().required(),
    emergencyContactNo: Joi.number().required(),
    bloodGroup: Joi.string().valid('A', 'B', 'AB', 'O', 'A+', 'B+', 'AB+', 'O+').required(),
    presentAddress: Joi.string().required().trim(),
    permanentAddress: Joi.string().required().trim(),
    guardian: guardianValidationSchema.required(),
    localGuardian: localGuardianValidationSchema.required(),
    profileImage: Joi.string(),
    isActive: Joi.string().valid('active', 'blocked').default('active').required(),
  });

export default studentValidationSchema;