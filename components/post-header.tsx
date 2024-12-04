import { resizeImage } from '@/utils/image';
import { useState } from 'react';
import { PostFullFragment, User } from '../generated/graphql';
import CoAuthorsModal from './co-authors-modal';
import { useAppContext } from './contexts/appContext';
import { CoverImage } from './cover-image';
import { DateFormatter } from './date-formatter';
import { ReadTimeInMinutes } from './post-read-time-in-minutes';
import { PostTitle } from './post-title';

type Author = Pick<User, 'username' | 'name' | 'profilePicture'>;

type Props = {
	title: string;
	coverImage: string | null | undefined;
	date: string;
	author: Author;
	readTimeInMinutes: number;
};

export const PostHeader = ({ title, coverImage, date, author, readTimeInMinutes }: Props) => {
	const { post: _post } = useAppContext();
	const post = _post as unknown as PostFullFragment;
	const authorsArray = [post.author, ...(post.coAuthors || [])];
	const [isCoAuthorModalVisible, setIsCoAuthorModalVisible] = useState(false);
	const closeCoAuthorModal = () => {
		setIsCoAuthorModalVisible(false);
	};
	const openCoAuthorModal = () => {
		setIsCoAuthorModalVisible(true);
	};
	return (
		<div className={'mx-auto flex flex-col gap-6'}>
			<PostTitle>{title}</PostTitle>
			<div className="flex w-full flex-row flex-wrap items-center justify-center gap-2 px-2 text-slate-700 dark:text-neutral-300 md:px-0">
				<div className="mb-5 flex flex-row items-center justify-center md:mb-0">
					<DateFormatter dateString={date} />
					{readTimeInMinutes && <span className="mx-3 font-bold text-slate-500">&middot;</span>}
					<ReadTimeInMinutes readTimeInMinutes={readTimeInMinutes} />
				</div>
			</div>
			{coverImage && (
				<div className="px-5 sm:mx-0">
					<CoverImage
						title={title}
						src={resizeImage(coverImage, { w: 1600, h: 840, c: 'thumb' })}
						priority={true}
					/>
				</div>
			)}
			{isCoAuthorModalVisible && <CoAuthorsModal closeModal={closeCoAuthorModal} />}
		</div>
	);
};
