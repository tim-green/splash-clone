import React from "react";
import { distanceInWordsToNow } from "date-fns";

import closeIcon from "../images/close-icon-white.svg";

const ImageModal = ({ handleClose, modalObj }) => {
  //console.log(modalObj.urls)

  let showHideClassName = modalObj.show
    ? "modal block z-50 h-screen w-screen fixed inset-0 flex flex-col lg:flex-row items-center justify-center p-4 lg:p-16"
    : "modal hidden";

  // const mainImg = modalObj.urls.regular !== undefined ? modalObj.urls.regular : (modalObj.urls.regular === 'none');
  // console.log("in modal comp "+ modalObj.user.id)

  return (
    <div
      className={showHideClassName}
      style={{ backgroundColor: `rgba(125,125,125,.7)` }}
    >
      {/* display version for mobile */}
      <div className="max-w-sm h-full rounded overflow-hidden bg-gray-900 p-4 shadow-lg relative lg:hidden">
        <button
          className="inline-block text-sm p4 leading-none border rounded text-white border-black bg-black hover:border-transparent hover:text-gray-500 hover:bg-transparent hover:border-black absolute top-0 right-0 m-2"
          onClick={handleClose}
        >
          <img src={closeIcon} alt="close button" className="w-3"/>
        </button>

        <img
          className="w-full cover"
          src={modalObj.urls.regular}
          alt={modalObj.alt_description}
        />

        <div className="px-6 py-4 pl-0">
          <div className="text-white font-bold text-xl mb-2 capitalize">
            {modalObj.alt_description}
          </div>
          <p className="text-gray-700 text-base">{modalObj.description}</p>
        </div>

        <div>
          <a
            href={modalObj.links.download}
            rel="noreferrer noopener"
            target="_blank"
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
              <i class="fas fa-arrow-to-bottompr-2"></i> Download
          </a>
        </div>

        <div className="flex items-center rounded-lg p-4 mt-6 bg-gray-800 border rounded text-black border-black">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src={modalObj.user.profile_image.small}
            alt={modalObj.user.name}
          />
          <div className="text-sm "> 
            <p className="text-white leading-none">{modalObj.user.name}</p>
            <p className="text-white leading-none">
              {modalObj.user.location}
            </p>
            <p className="text-gray-600">
              {distanceInWordsToNow(modalObj.created_at, {
                includeSeconds: true
              })}{" "}
              ago
            </p>
          </div>
        </div>
      </div>

      {/* display version for desktop */}

      <section className="modal-main bg-gray-900 h-full w-full p4 relative rounded p-4 shadow-lg hidden lg:block">
        <button
          className="inline-block text-sm p4 leading-none border rounded text-white border-black bg-black hover:border-transparent hover:text-gray-500 hover:bg-transparent hover:border-black absolute top-0 right-0 m-2"
          onClick={handleClose}
        >
          <img src={closeIcon} alt="close button" className="w-5" />
        </button>
        
        <div className="max-w-sm w-full h-full lg:max-w-full lg:flex">
          <div
            className="w-3/4 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden border-solid border-black border-2"
            style={{ backgroundImage: `url(${modalObj.urls.regular})` }}
            title={modalObj.alt_description}
          />

          <div className="p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <div className="text-white font-bold text-xl mb-2 capitalize">
                {modalObj.alt_description}
              </div>
              <p className="text-gray-100 text-base">{modalObj.description}</p>
            </div>

            <div>
              <a
                href={modalObj.links.download}
                rel="noreferrer noopener"
                target="_blank"
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                  <i class="fas fa-arrow-to-bottom pr-2"></i> Download
              </a>
            </div>

            <div className="flex items-center rounded-lg p-3 bg-gray-800 border rounded text-black border-black">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src={modalObj.user.profile_image.medium}
                alt={modalObj.user.name}
              />
              <div className="text-sm">
                <p className="text-white leading-none">
                  {modalObj.user.name}
                </p>
                <p className="text-white leading-none">
                  {modalObj.user.location}
                </p>
                <p className="text-gray-600">
                  {distanceInWordsToNow(modalObj.created_at, {
                    includeSeconds: true
                  })}{" "}
                  ago
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImageModal;
