import { createClient } from "@sanity/client";

export const projectId = "elgcoxli";
export const dataset = "production"
export const apiVersion = "2023-01-01"
export const token = "skRyz05xfa5nN0LpfK8B5CAvsUIt9Yq2TJ8JBeaQmNpsMARCaIpiiOo2JyKT99ojtxSZ7YB10BHEVZxwtGULfnpaHaoWsXX0q6a4WUxrUxCkQnXdg8GP0QvSvepXLTDAqjoo85cIyNsbFbPi27PXHjuNQ0VLi9AMNQCQRyGXwXsi8Phwh4CH";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: true,
});
