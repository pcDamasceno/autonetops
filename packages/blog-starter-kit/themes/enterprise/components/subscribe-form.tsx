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
			<div className="relative w-full rounded-full bg-white p-3 shadow-md dark:bg-neutral-900">
			  <input
				ref={inputRef}
				type="email"
				placeholder="Enter your email"
				aria-label="Email address"
				className="focus:outline-primary-600 dark:focus:outline-primary-500 w-full rounded-full px-5 py-3 text-base text-slate-800 placeholder:text-slate-400 outline-none dark:bg-neutral-800 dark:text-neutral-50 transition-colors duration-200"
			  />
			  <button
				disabled={requestInProgress}
				onClick={subscribe}
				className="bg-primary-600 dark:bg-primary-500 absolute right-3 top-1/2 -translate-y-1/2 rounded-full px-5 py-2 font-semibold text-white transition-all duration-300 ease-in-out hover:bg-primary-700 dark:hover:bg-primary-600 disabled:cursor-not-allowed disabled:opacity-60"
			  >
				Subscribe
			  </button>
			</div>
		  )}
		  {status === 'PENDING' && (
			<div className="relative w-full rounded-md bg-blue-50 p-5 text-center shadow-md dark:bg-neutral-800">
			  <p className="font-semibold text-blue-700 dark:text-green-500">
				Almost there!
			  </p>
			  <p className="mt-2 text-slate-700 dark:text-neutral-300">
				Check your inbox for a confirmation email and click{' '}
				<strong>“Confirm and Subscribe”</strong> to complete your subscription. Thank you for joining us!
			  </p>
			</div>
		  )}
		</>
	  );
};
