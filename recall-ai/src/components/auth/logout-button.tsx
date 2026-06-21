import { signOut } from "@/auth";

export function LogoutButton() {
  return (
    <form
      action={async () => {
        "use server";

        await signOut({
          redirectTo: "/",
        });
      }}
    >
      <button
        type="submit"
        className="rounded-md bg-red-500 px-4 py-2 text-white"
      >
        Logout
      </button>
    </form>
  );
}