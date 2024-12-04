import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
	title: string;
	description: string;
	image: string;
	author: {
		name: string;
		avatar: string;
	};
	date: string;
	slug: string;
}

export function BlogCard({ title, description, image, author, date, slug }: BlogCardProps) {
	return (
		<Link href={slug}>
			<Card className="hover:bg-accent/5 group h-full overflow-hidden rounded-xl border-none bg-transparent transition-colors">
				<div className="group relative aspect-[2/1] overflow-hidden rounded-xl">
					<Image
						src={image}
						alt={title}
						fill
						className="object-cover transition-transform group-hover:scale-105"
					/>

					<div className="absolute bottom-2 right-2 rounded-xl bg-black/70 px-3 py-1 text-sm text-white">
						{date}
					</div>
				</div>
				<CardContent className="grid flex-1 gap-4 p-4">
					<div className="flex-1 space-y-2">
						<h3 className="line-clamp-2 h-[calc(1.9rem*2)] break-keep text-2xl font-semibold tracking-tight">
							{title}
						</h3>
						<p className="text-muted-foreground line-clamp-3 break-keep text-base leading-relaxed">
							{description}
						</p>
					</div>
				</CardContent>
			</Card>
		</Link>
	);
}
