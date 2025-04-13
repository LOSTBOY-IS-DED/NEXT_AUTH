import { Button } from "./ui/button"

export const Signout = () => {

    const handleSignOut = async () => {}


  return (
    <div className="flex justify-center">
      <Button variant="destructive" onClick={handleSignOut}>Signout</Button>
    </div>
  )
}