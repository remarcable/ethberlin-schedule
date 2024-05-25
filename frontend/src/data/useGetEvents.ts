import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetEvents = () => {
  return useQuery({
    queryKey: ["events"],
    queryFn: () => getEvents(),
    placeholderData: keepPreviousData,
    refetchInterval: 5000,
  });
};
const baseURL = process.env.BACKEND_URL;
const api = axios.create({
  baseURL,
  responseType: "json",
});

const getEvents = async () => {
  return api.get("/events").then((res) => res.data);
};
