import { AxiosInstance } from "axios";
import { CreateUserDTO, UserDTO } from "@/lib/api/interface";

async function createUser(
  axiosInstance: AxiosInstance,
  data: CreateUserDTO
): Promise<UserDTO> {
  try {
    const response = await axiosInstance.post("/users", data);

    return response.data?.props;
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Failed to create user");
  }
}

export default createUser;
