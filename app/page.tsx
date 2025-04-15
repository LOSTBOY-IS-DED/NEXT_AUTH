
import { Signout } from "@/components/Signout";
import { redirect } from "next/dist/server/api-utils";


export default async function Home() {

  const session = await useSession();
  if(!session) redirect("/sign-in");


  return (
    <>
    <div>
      <p>Signed in as :</p>
      <p>TODO</p>

    </div>
    <Signout />
    </>

  );
}
