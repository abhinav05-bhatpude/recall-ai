import { signIn } from "@/auth";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <form
        action={async () => {
          "use server";
          await signIn("google", {
            redirectTo: "/dashboard",
          });
        }}
      >
        <button
          className="rounded-md bg-black px-4 py-2 text-white"
          type="submit"
        >
          Sign in with Google
        </button>
      </form>
    </div>
  );
}