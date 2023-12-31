import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient from "../services/api-client";
import { CACHE_KEY_PLATFORMS } from "../constants";

const apiClient = new APIClient<Platform>('/platforms/lists/parents');
export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => useQuery({
    queryKey: CACHE_KEY_PLATFORMS,
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24hr
    initialData: { count: platforms.length, results: platforms }

});

export default usePlatforms;