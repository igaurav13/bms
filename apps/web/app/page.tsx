
import { client } from "@repo/db/client";

export default async function Home() {
  const user = await client.user.findFirst();

  return (
    <div>
      First name haha: 
      {user?.username}
      password: 
      {user?.password}
    </div>
  );
}