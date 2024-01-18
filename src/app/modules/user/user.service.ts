import { object } from 'zod';
import config from '../../config';
import { TStudent } from '../student/student.interface';
import { NewUser } from './user.interface';
import { User } from './user.model';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  // if(await Student.isUserExists(studentData.id)){
  //   throw new Error("User already exists")
  // }
  const user: NewUser = {};
  if(!password){
    user.password = config.default_password as string;
  }

  user.role= "student"
  user.id = "2030100001"
  const result = await User.create(user);
  if(Object.keys(result).length){
    studentData.id = result.id;
    studentData.user=result._id;
  }
  return result;
};

export const UserServices = {
  createStudentIntoDB,
};