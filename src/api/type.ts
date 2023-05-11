/* Admin */

export interface ModifyUserReq {
  username: string
  name: string
  fileName: string
  email: string
  phoneNumber: string
  birthDate: string
  joiningDay: string
}

export interface ConfirmRegisterReq {
  username: string
  memberStatus: 'ACTIVATION'
}

export interface SearchUserReq {
  type: string
  keyword: string
  page: number
}

export interface RoleMutateReq {
  username: string
  role: string
}

/* department */

export interface DepartmentRegisterReq {
  departmentName: string
  vacationLimit: number
}

export interface DepartmentEditReq {
  name: string
  vacation: number
  // departmentPersonal: number
}

/* position */

export interface PositionRegisterReq {
  positionName: string
  vacation: number
}

export interface PositionEditReq {
  name: string
  vacation: number
}
