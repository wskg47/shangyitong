export interface ResponseBaseData {
  code: number;
  message: string;
  ok: boolean;
}
export interface HospitalBookingRule {
  cycle: number;
  releaseTime: string;
  stopTime: string;
  quitDay: number;
  quitTime: string;
  rule: string[];
}

export interface HospitalInfo {
  address: string;
  bookingRule: null;
  cityCode: string;
  createTime: string;
  districtCode: string;
  hoscode: string;
  hosname: string;
  hostype: string;
  id: string;
  intro: null;
  isDeleted: number;
  logoData: string;
  param: {
    hostypeString: string;
    fullAddress: string;
  };
  provinceCode: string;
  route: string;
  updateTime: string;
}

export interface HospitalDetailData {
  hospital: HospitalInfo;
  bookingRule: HospitalBookingRule;
}

export interface ResponseData extends ResponseBaseData {
  data: HospitalDetailData;
}

// 医院部门ts类型
export interface HospitalDepartment {
  depcode: string;
  depname: string;
  children?: HospitalDepartment[];
}

export interface HospitalDepartmentData extends ResponseBaseData {
  data: HospitalDepartment[];
}
