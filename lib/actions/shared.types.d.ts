export interface addSubscriberParams {
  email: string;
  path: string;
}

export interface addContactParams {
  fullName: string;
  email: string;
  path: string;
  contactNumber: string;
  typeOfService: string;
  message: string;
}

export interface addCareerParams {
  fullName: string;
  email: string;
  path: string;
  contactNumber: string;
  typeOfPosition: string;
  message: string;
  // resume: File;
}
