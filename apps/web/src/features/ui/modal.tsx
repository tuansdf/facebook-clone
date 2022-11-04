import { Dialog, Transition } from "@headlessui/react";
import { ComponentChildren, Fragment } from "preact";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  children: ComponentChildren;
}

export default function Modal({ isOpen, closeModal, children }: Props) {
  return (
    <Transition
      appear
      show={isOpen}
      as={Fragment}
      enter="ease-out duration-100"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Dialog className="relative z-10" onClose={closeModal}>
        <div className="fixed inset-0 bg-black bg-opacity-25" />

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Dialog.Panel className="flex w-full max-w-md transform flex-col overflow-hidden rounded-base border-base bg-white p-4 text-left shadow-lg transition-all">
              {children}
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
