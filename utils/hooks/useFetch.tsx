import { useAuth } from "@/provider/Auth";
import { API_URL } from "@/utils/constants";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export type FetchApiType = {
  queryKey: string;
  path: string;
};

interface IUseFetch<T> {
  path: string;
  queryKey: string[];
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  config?: any;
}

export function useFetch<T>({ path, queryKey, config }: IUseFetch<T>) {
  if (!queryKey) throw new Error("queryKey is required");
  if (!path) throw new Error("path is required");
  const { token } = useAuth();
  const REQUEST_URL = `${API_URL}/api/v1/${path}`;

  const fetchData = async () => {
    try {
      const response = await axios.get(REQUEST_URL, {
        headers: token ? { "x-access-token": token } : {},
      });
      return response.data.data;
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    } catch (error: any) {
      // Handle errors if needed
    }
  };

  const { data, isLoading, refetch, status, error } = useQuery<T>({
    queryKey: queryKey,
    queryFn: fetchData,
    refetchOnWindowFocus: false,
    staleTime: config?.staleTime ?? 60 * 5,
    ...config,
  });

  const response: T | undefined = data;

  return { response, isLoading, refetch, status, error };
}
