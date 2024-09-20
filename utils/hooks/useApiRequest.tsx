import { API_URL } from "@/utils/constants";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import useToast from "./useToast";
import { useAuth } from "@/provider/Auth";

type DataRequestType<T> = {
  path: string;
  data: T;
};

type MutationFunction<T> = {
  data: T;
  path: string;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  callback?: (res: any) => void;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  errorCallBack?: (res: any) => void;
};

interface IUsePostApi<T> {
  key?: string;
  isSuccessToast?: boolean;
  method?: "post" | "put" | "delete" | "patch";
}

const useApiRequest = <T,>({
  isSuccessToast = true,
  key,
  method = "post",
}: IUsePostApi<T> = {}) => {
  const { token: userToken } = useAuth();
  const { toastError, toastSuccess } = useToast();
  const headers = userToken ? { "x-access-token": userToken } : {};

  const postRequest = ({ data, path }: DataRequestType<T>) => {
    const REQUEST_PATH = `${API_URL}/api/v1/${path}`;
    switch (method) {
      case "post":
        return axios.post(REQUEST_PATH, data, {
          headers: {
            ...headers,
          },
        });
      case "put":
        return axios.put(REQUEST_PATH, data, {
          headers: {
            ...headers,
          },
        });
      case "delete":
        return axios.delete(REQUEST_PATH, {
          headers: {
            ...headers,
          },
        });
      case "patch":
        return axios.patch(REQUEST_PATH, data, {
          headers: {
            ...headers,
          },
        });
      default:
        throw new Error("Invalid method provided");
    }
  };

  const { mutate, isPending } = useMutation({
    mutationFn: postRequest,
    mutationKey: [key],
  });

  function mutationFunction({
    data,
    path,
    callback = () => {},
    errorCallBack = () => {},
  }: MutationFunction<T>) {
    mutate(
      {
        path,
        data,
      },
      {
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        onSuccess: (res: any) => {
          isSuccessToast && toastSuccess(res?.data?.message);
          callback(res);
        },
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        onError: (res: any) => {
          toastError(res?.response?.data?.message);
          errorCallBack(res);
        },
      }
    );
  }

  return {
    mutationFunction,
    isPending,
  };
};

export default useApiRequest;
