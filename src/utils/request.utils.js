import { convertJSONToQueryString } from "./url.utils";

export async function request({
  method = "GET",
  url,
  data = {},
  headers = {},
  key = "",
}) {
  try {
    if (method === "GET") {
      url = `${url}?${convertJSONToQueryString({
        ...data,
        ...(!!key ? { api_key: key } : {}),
      })}`;
    }

   const res = await fetch(url, {
      ...(method !== "GET" ? { body: JSON.stringify(data) } : {}),
      method,
      headers: {
        ...headers,
      },
    });
    return await res.json();
  } catch (error) {
    console.log("Request Error: ", error.message);
    // throw error;
  }
  return null;
}
