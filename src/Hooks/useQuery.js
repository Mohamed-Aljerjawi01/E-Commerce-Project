import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../API/axiosInstance";

export function useCategoriesQuery() {
    const getCategories = async () => {
        const response = await axiosInstance.get("/Categories");
        console.log(response);
        return response.data.response;
    }

    const query = useQuery({
        queryKey: ['categories'],
        queryFn: getCategories,
        staleTime: 1 * 60 * 1000
    })

    return query;
}