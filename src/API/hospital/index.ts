import request from "@/utils/request";
import type { ResponseData, HospitalDepartmentData } from "./type";

enum API {
  HOSPITAL_URL = "hosp/hospital/",
  //获取某一个医院的科室的数据
  HOSPITAL_DEPARTMENT_URL = "/hosp/hospital/department/",
}

export const getHospitalInfo = (hoscode: any): Promise<ResponseData> =>
  request.get<any, ResponseData>(API.HOSPITAL_URL + hoscode);

export const getHospitalDepartment = (
  hoscode: any
): Promise<HospitalDepartmentData> =>
  request.get<any, HospitalDepartmentData>(
    API.HOSPITAL_DEPARTMENT_URL + hoscode
  );
