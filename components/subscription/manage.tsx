import { generatePortalLink } from "@/actions/generatePortalLink";

export default function ManageAccountButton() {
  return <form action={generatePortalLink}>
    <button type="submit">Manage Subscription</button>
  </form>;
}