import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.svg";
import ToggleMode from "../toggle-mode/toggle-mode";
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

const Navbar = async () => {
	const user = await auth();
	return (
		<div className="navbar bg-base-100 drop-shadow-md px-8">
			<div className="flex-1">
				<Link href="/" className="text-xl font-bold flex items-center gap-2">
					<Image src={Logo} alt="logo" width={30} height={30} />
					Resume AI
				</Link>
			</div>
			<div className="flex gap-4">
				{user.userId && <Link href={"/dashboard"}>Dashboard</Link>}
				<SignedOut>
					<SignInButton />
				</SignedOut>
				<SignedIn>
					<UserButton />
				</SignedIn>
				<ToggleMode />
			</div>
		</div>
	);
};

export default Navbar;
