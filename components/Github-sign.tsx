import { Button } from "./ui/button"

export const GithubSign = () => {
  return (

    <form action={async () => {
        "use server";
    }}>
        <Button className="w-full" variant="outline">Sign in with Github</Button>
    </form>
  )
}