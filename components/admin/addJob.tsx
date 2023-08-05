"use client";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { AddJobsProps } from "@/types";

export const AddJob = ({
  isOpen,
  closeModal,
  handleSubmit,
  handleChange,
  value,
}: AddJobsProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-xl font-medium leading-6 text-gray-900 flex-center"
                >
                  Ажлын нэр ээ оруулна уу?
                </Dialog.Title>
                <form onSubmit={handleSubmit}>
                  <div className="mt-2">
                    <input
                      className="w-full px-3 py-1 border-none rounded-md text-lg bg-secondary"
                      type="text"
                      value={value}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mt-4 flex gap-3">
                    <button
                      type="button"
                      className="border w-full py-2 rounded-md border-main"
                      onClick={() => closeModal()}
                    >
                      Буцах
                    </button>
                    <button
                      type="submit"
                      className=" w-full py-2 rounded-md bg-gray-900 text-white bg-main"
                    >
                      Нэмэх
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
