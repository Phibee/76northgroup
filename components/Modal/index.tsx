import React, { forwardRef, useEffect, useRef } from 'react';
import * as ReactDom from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';

import styles from './modal.module.css';
import { IoIosCloseCircleOutline } from 'react-icons/io';

export interface ModalProps {
	/**
	 * Modal state.
	 */
	isOpen?: boolean;
	/**
	 * On close callback.
	 */
	onClose?: () => void;
	onCloseButtonClick?: () => void;
	/**
	 * On open callback.
	 */
	onOpen?: () => void;
	/**
	 * modal width
	 */
	width?: number;
	/**
	 * Modal title.
	 */
	title?: string;
	/**
	 * React children.
	 */
	children?: React.ReactNode;
	/**
	 * Class names.
	 */
	className?: string;
}

const Modal = (props: ModalProps) => {
	const modalRef = useRef<HTMLDivElement>(null);

	const onClose = () => {
		props.onClose && props.onClose();
	};

	const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
		if (event.key === 'Escape') props.onClose && props.onClose();
	};

	useEffect(() => {
		if (props.isOpen) {
			modalRef.current?.focus();
			document.querySelector('body')?.classList.add('modal-show');
		} else {
			document.querySelector('body')?.classList.remove('modal-show');
		}
	}, [props.isOpen]);

	return (
		<AnimatePresence>
			{props.isOpen && (
				<ModalBox
					ref={modalRef}
					className={props.className}
					onClick={onClose}
					width={props.width}
					onKeyDown={onKeyDown}
					onCloseButtonClick={props.onCloseButtonClick}
					title={props.title}>
					{props.children}
				</ModalBox>
			)}
		</AnimatePresence>
	);
};

interface ModalBoxProps {
	children: React.ReactNode;
	onClick?: (event?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
	onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
	onCloseButtonClick?: () => void;
	width?: number;
	title?: string;
	className?: string;
}

const ModalBox = forwardRef<HTMLDivElement, ModalBoxProps>(
	({ width = 800, title, className, ...props }, ref) => {
		const overlay = {
			visible: { opacity: 1 },
			hidden: { opacity: 0 },
		};

		const modal = {
			visible: { scale: 1 },
			hidden: { scale: 0.3 },
		};

		return ReactDom.createPortal(
			<motion.div
				key="container"
				initial="hidden"
				animate="visible"
				exit="hidden"
				variants={overlay}
				className={`${styles.overlay} bg-gray-600 bg-opacity-50 flex items-center justify-center flex-col`}
				{...props}>
				<motion.div
					key="modal"
					ref={ref}
					initial="hidden"
					animate="visible"
					exit="hidden"
					variants={modal}
					style={{ width }}
					className={`${styles.modal} w-full bg-white rounded-lg shadow-lg `}
					onClick={(e) => {
						e.stopPropagation();
					}}
					tabIndex={0}
					onKeyDown={props.onKeyDown}>
					<div className={`${styles.closeBtn} close-btn-wrapper`}>
						<span onClick={() => props.onCloseButtonClick?.()}>
							<IoIosCloseCircleOutline color="white" size={32} />
						</span>
					</div>

					{title && (
						<div className="border-b">
							<div className="flex p-4">
								<h1 className="text-3xl">{title}</h1>
								<button
									className="ml-auto focus:ring"
									tabIndex={1}
									onClick={() => {
										props.onClick && props.onClick();
									}}></button>
							</div>
						</div>
					)}
					<div className={`p-4 ${className ?? ''}`}>{props.children}</div>
				</motion.div>
			</motion.div>,
			document.body
		);
	}
);

export default Modal;
