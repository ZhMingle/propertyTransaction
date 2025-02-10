import { forwardRef, useImperativeHandle, useRef } from "react";
import { CloseOutlined } from "@ant-design/icons";
import { DialogActions } from "@/types/dialog";
const Dialog = forwardRef<DialogActions>((props, ref) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeDialog = () => {
    console.log("888");

    dialogRef.current?.close();
    document.body.style.overflow = "";
  };
  useImperativeHandle(ref, () => ({
    openDialog: () => {
      dialogRef.current?.showModal();
      document.body.style.overflow = "hidden";
    },
    closeDialog,
  }));
  return (
    <dialog
      ref={dialogRef}
      className="fixed left-0 top-0 w-full h-full  transition-opacity backdrop-blur-sm p-0 bg-transparent opacity-0 pointer-events-none !opacity-100 !pointer-events-auto z-200"
    >
      <div className="bg-white absolute delay-100 max-w-full inset-0 bg-white">
        <div className="shadow-card flex items-center px-10 md:px-20 relative sm-s:landscape:hidden">
          <div className="flex-1 min-w-0 pt-30 flex items-end pr-30">
            <div
              className="gap-x-20 whitespace-nowrap overflow-auto flex"
              id="tag-wrap"
            >
              <button
                type="button"
                className="border-b-4 text-lg pb-22 border-transparent text-black"
                id="tag-all"
              >
                <span className="hover:bg-neutral-1 px-10 h-20 flex place-items-center rounded-[100px] whitespace-nowrap text-base">
                  All<span className="ml-4 text-sm text-neutral-5">(31)</span>
                </span>
              </button>
              <button
                type="button"
                className="border-b-4 text-lg pb-22 border-primary text-primary"
                id="tag-living-room-2"
              >
                <span className="hover:bg-neutral-1 px-10 h-20 flex place-items-center rounded-[100px] whitespace-nowrap text-base">
                  Living room<span className="ml-4 text-sm">(2)</span>
                </span>
              </button>
              <button
                type="button"
                className="border-b-4 text-lg pb-22 border-transparent text-black"
                id="tag-bedroom-2"
              >
                <span className="hover:bg-neutral-1 px-10 h-20 flex place-items-center rounded-[100px] whitespace-nowrap text-base">
                  Bedroom
                  <span className="ml-4 text-sm text-neutral-5">(2)</span>
                </span>
              </button>
              <button
                type="button"
                className="border-b-4 text-lg pb-22 border-transparent text-black"
                id="tag-bathroom-1"
              >
                <span className="hover:bg-neutral-1 px-10 h-20 flex place-items-center rounded-[100px] whitespace-nowrap text-base">
                  Bathroom
                  <span className="ml-4 text-sm text-neutral-5">(1)</span>
                </span>
              </button>
              <button
                type="button"
                className="border-b-4 text-lg pb-22 border-transparent text-black"
                id="tag-exterior-9"
              >
                <span className="hover:bg-neutral-1 px-10 h-20 flex place-items-center rounded-[100px] whitespace-nowrap text-base">
                  Exterior
                  <span className="ml-4 text-sm text-neutral-5">(9)</span>
                </span>
              </button>
              <button
                type="button"
                className="border-b-4 text-lg pb-22 border-transparent text-black"
                id="tag-aerial-view-1"
              >
                <span className="hover:bg-neutral-1 px-10 h-20 flex place-items-center rounded-[100px] whitespace-nowrap text-base">
                  Aerial view
                  <span className="ml-4 text-sm text-neutral-5">(1)</span>
                </span>
              </button>
              <button
                type="button"
                className="border-b-4 text-lg pb-22 border-transparent text-black"
                id="tag-others-16"
              >
                <span className="hover:bg-neutral-1 px-10 h-20 flex place-items-center rounded-[100px] whitespace-nowrap text-base">
                  Others
                  <span className="ml-4 text-sm text-neutral-5">(16)</span>
                </span>
              </button>
            </div>
          </div>
          <button
            type="button"
            className="cursor-pointer w-32 h-32 flex items-center justify-center group absolute right-10 top-28 lg:static"
            data-noprogress="true"
            aria-label="close button"
            onClick={closeDialog}
          >
            <CloseOutlined className="icon icon-close text-primary transition-transform pointer-events-none group-hover:rotate-90 font-bold !text-lg" />
          </button>
        </div>
      </div>
    </dialog>
  );
});

export default Dialog;
