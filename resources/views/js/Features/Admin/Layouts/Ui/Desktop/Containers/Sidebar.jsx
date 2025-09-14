import { useTranslation } from "react-i18next";

// Components

import DropListBox from "../../../../Components/DropListBox.jsx";
import {
  DashboardIcon,
  HomeIcon,
  ListIcon,
  PostsIcon,
} from "../../../../../../Components/Icon.jsx";

// Functions

import { cn } from "../../../../../../Utils/Libs/cn.js";

// Zustand

import useAppStore from "../../../../../../Stores/AppStore.js";

const Sidebar = () => {
  // hooks
  const { t } = useTranslation();

  // states
  const themeColor = useAppStore((state) => state.themeColor);

  return (
    <>
      <div className="w-[16rem] h-screen fixed bg-Background-light dark:bg-Background-dark flex flex-col py-5 px-3 border-x border-Line-light dark:border-Line-dark">
        <div className="flex flex-row w-full gap-4 justify-center items-center">
          <DashboardIcon
            className={cn(
              "w-8 h-8",
              "text-" + themeColor,
              "dark:text-" + themeColor
            )}
          />
          <div className="text-2xl font-bold text-Text-light dark:text-Text-dark">{t("dashboard")}</div>
        </div>
        <div className="flex flex-col py-4">
          <DropListBox
            id={"home"}
            to="/admin"
            icon={<HomeIcon className={`text-${themeColor} dark:text-${themeColor}`}/>}
            title={"home"}
          />
          <DropListBox
            id={"posts"}
            icon={<PostsIcon className={`text-${themeColor} dark:text-${themeColor}`}/>}
            title={"posts"}
            items={[
              {
                name: "posts_list",
                icon: <ListIcon className={`w-5 h-5 text-${themeColor} dark:text-${themeColor}`} />,
                link: "/admin/posts/list-post",
              },
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
