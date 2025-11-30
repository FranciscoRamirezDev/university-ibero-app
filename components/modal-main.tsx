import React, { ReactNode } from 'react';

interface ModalMainProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: ReactNode;
}

const ModalMain: React.FC<ModalMainProps> = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={onClose}
            aria-modal="true"
            role="dialog"
        >
            <div
                className="bg-white rounded-lg shadow-lg p-6 min-w-[300px] max-w-full"
                onClick={e => e.stopPropagation()}
            >
                {title && (
                    <div className="mb-4 flex justify-between items-center">
                        <h2 className="text-lg font-semibold">{title}</h2>
                        <button
                            onClick={onClose}
                            className="text-gray-500 hover:text-gray-700 text-xl font-bold"
                            aria-label="Cerrar modal"
                        >
                            &times;
                        </button>
                    </div>
                )}
                <div>{children}</div>
            </div>
        </div>
    );
};

export default ModalMain;