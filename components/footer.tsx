import { useAppContext } from './contexts/appContext';
import { SubscribeForm } from './subscribe-form';

export const Footer = () => {
	const { publication } = useAppContext();

	return (
		<footer className="w-full border-t py-16 dark:border-neutral-800">
			<div className="mx-auto md:max-w-screen-md">
				<h3 className="text-primary-600 mb-2 pl-2 text-base font-semibold">
					새로운 글이 발행되면 이메일로 보내드립니다.
				</h3>
				<div className="w-[500px]">
					<SubscribeForm />
				</div>

				<p className="mt-24 text-muted-foreground">
					© 2024. Frontend Atelier All rights reserved.
				</p>
			</div>
		</footer>
	);
};
