"use client";
import React, { createContext, useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}

interface IWebsiteContext {
  websiteData: any;
  setWebsiteData: (data: any) => void;
  openImgPopup: boolean;
  setOpenImgPopup: React.Dispatch<React.SetStateAction<boolean>>;
  image: string | string[];
  setImage: React.Dispatch<React.SetStateAction<string | string[]>>;
  currentIndex: number | null;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number | null>>;
  roomName: string;
  setRoomName: React.Dispatch<React.SetStateAction<string>>;
}

export const WebsiteContext = createContext<IWebsiteContext>({
  websiteData: {},
  setWebsiteData: () => {},
  openImgPopup: false,
  setOpenImgPopup: () => {},
  image: "",
  setImage: () => {},
  currentIndex: null,
  setCurrentIndex: () => {},
  roomName: "",
  setRoomName: () => {},
});

export const WebsiteProvider = ({ children }: Props) => {
  const [websiteData, setWebsiteData] = useState({});
  const [openImgPopup, setOpenImgPopup] = useState(false);
  const [image, setImage] = useState<string | string[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [roomName, setRoomName] = useState<string>("");

  useEffect(() => {
    const fetchWebsiteData = async () => {
      try {
        const response = await fetch(
          "https://nexon.eazotel.com/cms/get/website/anandvardhanresort"
        );
        const data = await response.json();
        setWebsiteData(data);
      } catch (error) {
        console.error("Failed to fetch website data:", error);
      }
    };

    fetchWebsiteData();
  }, []);

  return (
    <WebsiteContext.Provider
      value={{
        websiteData,
        setWebsiteData,
        openImgPopup,
        setOpenImgPopup,
        image,
        setImage,
        currentIndex,
        setCurrentIndex,
        roomName,
        setRoomName,
      }}
    >
      {children}
    </WebsiteContext.Provider>
  );
};