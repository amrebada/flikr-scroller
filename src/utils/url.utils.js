export function convertJSONToQueryString(json) {
  return Object.keys(json)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(json[key])}`)
    .join("&");
}
