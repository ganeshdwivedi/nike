import { createClient } from "next-sanity";

export const client = createClient({
    projectId: "y19o6wz8",
    dataset: "production",
    apiVersion: "2021-08-31",
    useCdn: true,
});
