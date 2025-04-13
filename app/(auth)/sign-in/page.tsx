// import { GithubSign } from "@/components/Github-sign"
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import Link from "next/link";

// export const Page = async () => {

//     return (
//         <div className="w-full max-w-sm mx-auto space-v-6">
//             <h1 className="text-2xl font-bold text-center mb-6">
//                 Sign In
//             </h1>
//             <GithubSign />
//             <div className="relative">
//                 <div className="absolute inset-0 flex items-center">
//                     <span className="w-full border-t"></span>
//                 </div>
//                 <div className="relative flex justify-center text-sm">
//                     <span className="bg-background px-2 text-muted-foreground">
//                         Or Continue with Email
//                     </span>
//                 </div>
//             </div>
//             {/* Email password sing in  */}
//             <form className="space-y-4" action={async () => {
//                 "use server";
//             }}>
//                 <Input
//                     name="email"
//                     placeholder="Email"
//                     type="email"
//                     required
//                     autoComplete="email"
//                 />
//                 <Input
//                     name="password"
//                     placeholder="Password"
//                     type="password"
//                     required   
//                     autoComplete="current-password"
//                 />
//                 <Button className="w-full" type="submit">Sign In</Button>
//                 <div className="text-center">
//                     <Button />
//                     <Link href="/sign-up">Don&apos;t have an account? Sign Up</Link>
//                 </div>
//             </form>
//         </div>
//     )
// }  

import { GithubSign } from "@/components/Github-sign";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default async function Page() {
  return (
    <div className="w-full max-w-sm mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>
      <GithubSign />
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t"></span>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-background px-2 text-muted-foreground">
            Or Continue with Email
          </span>
        </div>
      </div>
      <form
        className="space-y-4"
        action={async () => {
          "use server";
        }}
      >
        <Input
          name="email"
          placeholder="Email"
          type="email"
          required
          autoComplete="email"
        />
        <Input
          name="password"
          placeholder="Password"
          type="password"
          required
          autoComplete="current-password"
        />
        <Button className="w-full" type="submit">
          Sign In
        </Button>
        <div className="text-center">
          <Link href="/sign-up">
            Don&apos;t have an account? <span className="underline">Sign Up</span>
          </Link>
        </div>
      </form>
    </div>
  );
}
