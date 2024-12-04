import * as Popover from '@radix-ui/react-popover';
import { Button } from './button';
import { NewsletterPlusSVG } from './icons';
import { SubscribeForm } from './subscribe-form';

export const Subscribe = () => {
	return (
		<div className="fixed bottom-10 right-10 z-50 hidden bg-background md:block">
			<Popover.Root>
				<Popover.Trigger asChild>
					<Button
						label="구독하기"
						type="outline"
						icon={<NewsletterPlusSVG className="h-5 w-5 fill-current" />}
					/>
				</Popover.Trigger>
				<Popover.Portal>
					<Popover.Content
						className="w-[350px] rounded-xl border bg-white p-5 shadow-xl dark:border-neutral-800 dark:bg-neutral-900 md:w-[500px]"
						align="end"
						sideOffset={5}
					>
						<h3 className="text-primary-600 mb-2 text-base font-semibold">
							새로운 글이 발행되면 이메일로 보내드립니다.
						</h3>
						<SubscribeForm />
					</Popover.Content>
				</Popover.Portal>
			</Popover.Root>
		</div>
	);
};
