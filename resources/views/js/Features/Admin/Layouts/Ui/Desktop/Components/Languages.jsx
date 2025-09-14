import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../../../../Utils/Services/i18n/index";

// Components

import { InputRadioButton } from "../../../../../../Components/Input";
import { IranIcon, USIcon } from "../../../../../../Components/Icon";

// Zustand

import useAppStore from "../../../../../../Stores/AppStore";

const Languages = ({ className, ...props }) => {
  // hooks
  const { t } = useTranslation();

  //   states
  const [language, setLanguage] = useState("empty");

  const languageApp = useAppStore((state) => state.languageApp);
  const setLanguageApp = useAppStore((state) => state.setLanguageApp);

  // constants
  const languageList = [
    {
      id: "fa",
      flag: <IranIcon className={"w-15 h-15"} />,
      dir: "rtl",
      name: t("persion"),
    },
    {
      id: "en",
      flag: <USIcon className={"w-15 h-15"} />,
      dir: "ltr",
      name: t("english"),
    },
  ];

  //   function
  const changeLanguage = (id, dir) => {
    try {
      i18n.changeLanguage(id);
      const rootHtml = document.getElementById("root-html");
      const prevLang = localStorage.getItem("currentLngId");

      if (rootHtml) {
        localStorage.setItem("currentLngId", id);
        localStorage.setItem("currentLngDir", dir);
        rootHtml.setAttribute("lang", id);
        rootHtml.setAttribute("dir", dir);
      }
      setLanguageApp(id);
      //   setIsOpen(false);
    } catch (error) {
      console.error("Failed to change language:", error);
    }
  };

  useEffect(() => {
    if (language !== "empty")
      changeLanguage(
        language,
        languageList?.find((item) => item?.id === language)?.dir
      );
  }, [language]);
  return (
    <>
      <div className="absolute top-12 ltr:-right-7 rtl:-left-7 inline-flex flex-col gap-4 bg-Background-light dark:bg-Background-dark z-[20] p-5 border border-Line-light dark:border-Line-dark rounded-xl">
        {languageList?.map((item, index) => (
          <div key={index} className="flex flex-row justify-between w-48">
            <div className="flex flex-row gap-2 items-center">
              <div className="relative w-10 h-10 rounded-full border dark:border-Line-light border-Line-dark overflow-hidden">
                <div className="absolute top-[-0.65rem] right-[-0.675rem]">
                  {item?.flag}
                </div>
              </div>
              <div className="font-bold text-TextSecondary-light dark:text-TextSecondary-dark">{item?.name}</div>
            </div>
            <div className="flex items-center">
              <InputRadioButton
                id={index}
                name={"language"}
                setSortRadio={setLanguage}
                index={item?.id}
                checked={languageApp == item?.id}
                onChange={()=>{}}
                className={""}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Languages;
