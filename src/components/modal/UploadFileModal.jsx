"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import FileUploadIcon from "@/assets/images/header-icons/File-Upload.svg";
import closeIcon from "@/assets/images/header-icons/closeIcon.svg";
import excelIcon from "@/assets/images/header-icons/excel-icon.svg";
import deleteIcon from "@/assets/images/header-icons/deleteIcon.svg"; 

export function FileUploadComponent({ isOpen, onClose }) {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);
  const uploadIntervalRef = useRef(null);

  if (!isOpen) return null;

const handleFileSelect = (event) => {
  const selectedFile = event.target.files[0];
  if (selectedFile) {
    setFile(selectedFile);
    simulateUpload(selectedFile);
  }
};

  const simulateUpload = (file) => {
    setIsUploading(true);
    let uploaded = 0;
    const total = file.size;

    const interval = setInterval(() => {
      uploaded += total / 60;
      const percent = Math.min(100, Math.round((uploaded / total) * 100));
      setUploadProgress(percent);

      if (percent >= 100) {
        clearInterval(interval);
        uploadIntervalRef.current = null;
        setIsUploading(false);
        setUploadComplete(true);
      }
    }, 50);
    uploadIntervalRef.current = interval;
  };

  const handleChooseFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = null; 
      fileInputRef.current.click();
    }
  };

  const handleRemoveFile = () => {
    if (uploadIntervalRef.current) {
      clearInterval(uploadIntervalRef.current); 
      uploadIntervalRef.current = null;
    }
  
    setFile(null);
    setUploadProgress(0);
    setIsUploading(false);
    setUploadComplete(false);
  
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };
  
  

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/20">
      <div className="bg-white shadow-xl w-[650px] p-[32px] rounded-[8px] relative">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-[#242424] font-[Poppins] font-medium text-[24px] leading-[136%]">
            Upload Files
          </h2>
          <button
            onClick={onClose}
            className=" border border-[#E2E6EE] rounded-[6px] hover:bg-gray-100 transition"
          >
            <Image src={closeIcon} alt="Close Icon" width={48} height={48} />
          </button>
        </div>
        <div
          className="border-[#C4D4EC] px-4 py-[43px] text-center mb-8 w-[586px] h-[182px] rounded-[8px] border-dashed border-2 cursor-pointer"
          onClick={handleChooseFile}
        >
          <div className="flex flex-col items-center">
            <Image
              src={FileUploadIcon}
              alt="Upload Icon"
              width={32}
              height={32}
              className="mb-3"
            />
            <p className="text-[#242424] font-[Poppins] font-medium text-[18px] leading-[24px]">
              Drag & Drop or{" "}
              <span className="text-[#0085FF] underline">Choose file</span> to upload
            </p>
            <input
              type="file"
              className="hidden"
              ref={fileInputRef}
              onChange={handleFileSelect}
            />
            <p className="text-[#676767] mt-2 font-[Poppins] text-[16px]">
              Supported formats: PDF, Doc
            </p>
          </div>
        </div>
        {file && (
          <div className="w-full border border-[#E2E6EE] rounded-[8px] px-4 py-4 flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Image src={excelIcon} alt="File" width={40} height={40} />
              <div>
                <p className="font-[Poppins] font-medium text-[#242424] text-[18px] leading-[24px] tracking-[0] mb-[4px]">
                  {file.name}
                </p>
                <p className="text-[16px] font-normal font-[Poppins] leading-[24px] text-[#676767]">
                  {Math.round(file.size / 1024)} kb of {Math.round(file.size / 1024)} kb{" "} <span className="text-[#D9D9D9] w-[4px]h-[4px]">•</span>{" "}
                  <span className={uploadComplete ? "text-[#0ADA6A]" : "text-[#0085FF]"}>
                     {uploadComplete ? "Uploaded" : "Uploading..."}
                  </span>
                </p>
                {!uploadComplete &&(
                  <div className="w-[100%] bg-[#24242433] rounded-full h-[6px] mt-4">
                    <div
                      className="bg-[#0085FF] h-[6px] w-full rounded-full"
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                )}
              </div>
            </div>
            <button onClick={handleRemoveFile}>
              <Image
                src={uploadComplete ? deleteIcon: closeIcon}
                alt="Remove"
                width={24}
                height={24}
                className="cursor-pointer align-top"
              />
            </button>
      
          </div>
        )}
        <button
        onClick={onClose}
          disabled={!uploadComplete}
          className={`w-full text-white font-[Poppins] font-medium py-[16px] px-[24px] rounded-[8px] cursor-pointer ${
            uploadComplete ? "bg-[#0085FF]" : "bg-[#0085FF] opacity-30 cursor-not-allowed"
          }`}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
