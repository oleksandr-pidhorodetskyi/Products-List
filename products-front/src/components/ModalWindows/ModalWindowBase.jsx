import React from 'react';

const ModalWindowBase = ({
	isOppened,
	onModalClose,
	onSuccess,
	title,
	children,
}) => {
	const handleClose = () => {
		onModalClose();
	};
	const handleSuccess = () => {
		onSuccess();
	};
	return (
		<div
			className={`modal__wrapper 
            ${isOppened ? 'd-block h-100' : 'd-none h-0 '} 
            position-fixed bottom-0 left-0 w-100 
            `}
			style={{ backdropFilter: 'blur(10px)', background: 'rgba(0,0,0,0.2)' }}
		>
			<div
				className='modal__body d-flex flex-column
                w-50 m-auto bg-light shadow rounded
                mt-5 p-4 '
			>
				<h2 className='text-center'>{title}</h2>
				<hr />
				{children}
				<hr />
				<div className='d-flex gap-5 justify-content-center align-items-center'>
					<button
						onClick={handleClose}
						type='button'
						className='btn btn-danger'
					>
						<i className='bi bi-x'></i>
					</button>
					<button
						onClick={handleSuccess}
						type='button'
						className='btn btn-success'
					>
						<i className='bi bi-check-lg'></i>
					</button>
				</div>
			</div>
		</div>
	);
};

export default ModalWindowBase;
