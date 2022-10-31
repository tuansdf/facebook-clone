export interface ILoginUserDto {
  email: string;
  password: string;
}

export interface IJwtPayload {
  id: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
}

export interface IJwtResponse extends IJwtPayload {
  accessToken: string;
}
