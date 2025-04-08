import { AxiosInstance } from "axios";
import { UserDTO  } from "@/lib/api/interface";

async function getUser(
  axiosInstance: AxiosInstance,
  userId: string
): Promise<UserDTO | undefined> {
  try {
    const response = await axiosInstance.get(`/users/${userId}`);
    return response.data?.props;
  } catch (error) {
    console.error("Error getting user:", error);
    return undefined;
  }
}

export default getUser;
