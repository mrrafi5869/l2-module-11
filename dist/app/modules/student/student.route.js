"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const student_crontroller_1 = require("./student.crontroller");
const router = express_1.default.Router();
router.get('/:studentId', student_crontroller_1.StudentControllers.getSingleStudent);
router.delete('/:studentId', student_crontroller_1.StudentControllers.deleteStudent);
router.get('/', student_crontroller_1.StudentControllers.getAllStudents);
exports.StudentRoutes = router;
