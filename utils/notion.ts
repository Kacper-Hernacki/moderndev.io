export default function extractIdFromUrl(url:string) {
  const regex = /([a-f0-9]{32})$/;
  const match = url.match(regex);
  return match ? match[1] : null;
}
