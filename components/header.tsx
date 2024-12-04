'use client';
import { ThemeToggle } from '@/components/themeToggle';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { Drawer } from 'vaul';

export default function Header() {
	const LinksJSX = (
		<>
			<Link
				href="/"
				className="text-muted-foreground hover:text-primary font-medium transition-colors"
			>
				Posts
			</Link>
			<Link
				href="/"
				className="text-muted-foreground hover:text-primary font-medium transition-colors"
			>
				Series
			</Link>
			<Link
				href="/pricing"
				className="text-muted-foreground hover:text-primary font-medium transition-colors"
			>
				About me
			</Link>
		</>
	);

	return (
		<div className="fixed inset-[0.5rem_0_auto_0] z-[999] mx-auto flex h-auto min-h-[3.2rem] w-full items-center justify-center gap-4 px-6">
			<header
				className="w-full max-w-[66rem] auto-cols-fr grid-cols-[0.25fr,1fr,0.5fr] justify-between
		gap-4 rounded-xl bg-[#ffffff08] p-2 backdrop-blur-[20px] transition-all duration-200"
			>
				<div className="container flex h-16 w-full flex-row items-center justify-between">
					<Link href="/" className="flex items-center">
						<span className="flex-nowrap pr-8 font-semibold">프론트엔드 공방</span>
					</Link>

					<nav className="flex flex-1 flex-row items-center justify-between">
						<div>
							<div className="hidden flex-row items-center gap-8 text-sm md:flex">{LinksJSX}</div>
						</div>

						<div className="flex flex-row items-center gap-2">
							<ThemeToggle />

							<div className="flex items-center md:hidden">
								<Drawer.Root>
									<Drawer.Trigger>
										<Menu className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
									</Drawer.Trigger>
									<Drawer.Portal>
										<Drawer.Overlay className="fixed inset-0 bg-black/40" />
										<Drawer.Content className="bg-background fixed bottom-0 left-0 right-0 z-50 flex h-fit justify-center outline-none">
											<div className="flex flex-col gap-4 px-2 py-8 text-center text-xl">
												{LinksJSX}

												<Link
													href="/" // 별도 페이지 제작
													className="text-muted-foreground hover:text-primary font-medium transition-colors"
												>
													Subscribe
												</Link>
											</div>
										</Drawer.Content>
									</Drawer.Portal>
								</Drawer.Root>
							</div>
						</div>
					</nav>
				</div>
			</header>
		</div>
	);
}
