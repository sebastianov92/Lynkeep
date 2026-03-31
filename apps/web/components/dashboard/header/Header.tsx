import Link from "next/link";
import { redirect } from "next/navigation";
import GlobalActions from "@/components/dashboard/GlobalActions";
import ProfileOptions from "@/components/dashboard/header/ProfileOptions";
import { SearchInput } from "@/components/dashboard/search/SearchInput";
import LynkeepLogo from "@/components/LynkeepLogo";
import { getServerAuthSession } from "@/server/auth";

export default async function Header() {
  const session = await getServerAuthSession();
  if (!session) {
    redirect("/");
  }

  return (
    <header className="glass sticky left-0 right-0 top-0 z-50 flex h-16 items-center justify-between overflow-x-auto overflow-y-hidden border-b-0 p-4">
      <div className="hidden items-center sm:flex">
        <Link href={"/dashboard/bookmarks"} className="w-56">
          <LynkeepLogo height={38} />
        </Link>
      </div>
      <div className="flex flex-1 gap-2">
        <SearchInput className="glass-card rounded-xl border-0 transition-all duration-300 focus-within:glow-sm focus-within:ring-1 focus-within:ring-primary/20" />
        <GlobalActions />
      </div>
      <div className="flex items-center">
        <ProfileOptions />
      </div>
    </header>
  );
}
