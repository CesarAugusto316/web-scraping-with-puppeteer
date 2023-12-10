export interface ILogin {
  nameCompany: string;
  address: ILoginAddress;
  email: string;
  economicActivities: EconomicActivities;
  beginningOfActivities: BeginningOfActivities;
  characteristics: Characteristic[];
  founders: Founders;
  authorizedDocumments: AuthorizedDocumment[];
  office: string;
}

export interface ILoginAddress {
  address: AddressElement[];
}

export interface AddressElement {
  sucursalCode: string;
  typeAddress: string;
  address: string;
  startDate: string;
}

export interface AuthorizedDocumment {
  type: string;
  amount: string;
  startDate: string;
}

export interface BeginningOfActivities {
  constitutionDate: string;
  activityDate: string;
  finishActivity: string;
}

export interface Characteristic {
  name: string;
  value: string;
}

export interface EconomicActivities {
  description: string;
  activities: Activity[];
}

export interface Activity {
  activity: string;
  code: string;
  category: string;
  taxType: string;
  startDate: string;
}

export interface Founders {
  founders: Founder[];
  total: string;
}

export interface Founder {
  name: string;
  rut: string;
  capitalInformed: string;
  capitalToInform: string;
  percentage: string;
  utilities: string;
  startDate: string;
}
