import { generatePortalLink } from "@/actions/generatePortalLink";

export default function ManageAccountButton() {
  return (
    <form  action={generatePortalLink}>
    <button className="btn btn-primary text-xl" type="submit">Manage Subscription</button>
  </form>
  );
}