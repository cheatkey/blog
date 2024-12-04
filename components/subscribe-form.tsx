import request from 'graphql-request';
import { useRef, useState } from 'react';
import {
	SubscribeToNewsletterDocument,
	SubscribeToNewsletterMutation,
	SubscribeToNewsletterMutationVariables,
	SubscribeToNewsletterPayload,
} from '../generated/graphql';
import { useAppContext } from './contexts/appContext';

const GQL_ENDPOINT = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT;

export const SubscribeForm = () => {
	const [status, setStatus] = useState<SubscribeToNewsletterPayload['status']>();
	const [requestInProgress, setRequestInProgress] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);
	const { publication } = useAppContext();

	const subscribe = async () => {
		const email = inputRef.current?.value;
		if (!email) return;

		setRequestInProgress(true);

		try {
			const data = await request<
				SubscribeToNewsletterMutation,
				SubscribeToNewsletterMutationVariables
			>(GQL_ENDPOINT, SubscribeToNewsletterDocument, {
				input: { publicationId: publication.id, email },
			});
			setRequestInProgress(false);
			setStatus(data.subscribeToNewsletter.status);
		} catch (error) {
			const message = (error as any).response?.errors?.[0]?.message;
			if (message) {
				window.alert(message);
			}
			setRequestInProgress(false);
		}
	};
	return (
		<>
			{!status && (
				<div className="relative flex w-full items-center rounded-lg bg-gray-100 dark:bg-neutral-900">
					<input
						ref={inputRef}
						type="email"
						placeholder="example@example.com"
						className="focus:outline-primary-600 dark:focus:outline-primary-500 left-3 top-3 w-full rounded-lg bg-transparent p-3 text-base text-black outline-none dark:text-neutral-50"
						onKeyPress={(event) => {
							if (event.key === 'Enter') {
								subscribe();
							}
						}}
					/>
					<button
						disabled={requestInProgress}
						onClick={subscribe}
						className="whitespace-nowrap rounded-lg px-3 py-2 text-sm font-semibold text-gray-800 disabled:cursor-not-allowed disabled:opacity-80 dark:text-white"
					>
						구독
					</button>
				</div>
			)}
			{status === 'PENDING' && (
				<div className="relative w-full p-2">
					<p className="font-bold text-green-600 dark:text-green-500">
						구독 신청이 완료되었습니다.
					</p>
					<p className="font-medium text-slate-600 dark:text-neutral-300">
						{inputRef.current?.value} 메일함에서 구독 신청을 완료해주세요.
					</p>
				</div>
			)}
		</>
	);
};
