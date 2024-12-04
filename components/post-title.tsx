import { ReactNode } from 'react';

type Props = {
	children?: ReactNode;
};

export const PostTitle = ({ children }: Props) => {
	return (
		<div className="prose mx-auto max-w-screen-lg break-all px-5 dark:prose-invert md:prose-lg prose-h1:text-center">
			<h1 className="">{children}</h1>
		</div>
	);
};
