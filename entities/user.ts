import { ResponseModel } from "~/utils/response";

export interface UserModel {
  id: number;
  name: string;
  username: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
}

export type LoginModel = Pick<UserModel, "email" | "password">;

export type RegisterModel = Pick<
  UserModel,
  "name" | "email" | "password" | "username"
>;

export interface ResponseUserModel extends ResponseModel {
  data: Pick<UserModel, "id" | "name" | "username" | "email">;
}

export interface ResponseUserListModel extends ResponseModel {
  data: Pick<UserModel, "id" | "name" | "username" | "email">[];
}
