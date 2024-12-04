import illustration from '@/assets/illustration.svg';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, Rss } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

export function Hero() {
	return (
		<section className="container relative flex flex-row justify-between pt-24 md:pt-28 lg:pt-32">
			<div className="flex flex-col items-start gap-4">
				<Badge variant="outline" className="bg-muted/50">
					Frontend
				</Badge>
				<div className="flex flex-col gap-2">
					<h1 className="text-3xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-6xl lg:leading-[1.1]">
						Introducing AI Assistant
					</h1>
					<p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
						Ask AI to make context-aware changes to your docs.
					</p>
				</div>
				<div className="flex items-center gap-2 text-sm text-muted-foreground">
					<time>November 25, 2024</time>
					<span>•</span>
					<span>1 min read</span>
				</div>
				<div className="flex items-center gap-0">
					<Button variant="ghost" size="icon">
						<Github />
					</Button>

					<Link href={`/rss.xml`}>
						<Button variant={'ghost'} size={'icon'}>
							<Rss />
						</Button>
					</Link>

					<Link href={''}>
						<Button variant={'ghost'} size={'icon'}>
							<Linkedin />
						</Button>
					</Link>

					<Link href={''}>
						<Button variant={'ghost'} size={'icon'}>
							<Mail />
						</Button>
					</Link>
				</div>
			</div>

			<Image
				style={{
					transform: 'scale(-1, 1)',
				}}
				src={illustration}
				alt={''}
				width="240"
			/>
		</section>
	);
}
