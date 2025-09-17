"use client";
import { createContext, useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}

interface IWebsiteContext {
  websiteData: any;
  setWebsiteData: (data: any) => void;
}

export const WebsiteContext = createContext<IWebsiteContext>({
  websiteData: {},
  setWebsiteData: () => {},
});

export const WebsiteProvider = ({ children }: Props) => {
  const [websiteData, setWebsiteData] = useState({});
  useEffect(() => {
    const fetchWebsiteData = async () => {
      const response = await fetch(
        "https://nexon.eazotel.com/cms/get/website/anandvardhanresort"
      );

      const data = await response.json();

      setWebsiteData(data);
    };

    fetchWebsiteData();
  }, []);


  console.log("websiteData", websiteData);

  return (
    <WebsiteContext.Provider
      value={{
        websiteData,
        setWebsiteData,
      }}
    >
      {children}
    </WebsiteContext.Provider>
  );
};
