import React from "react";
import {
  ViewIcon,
  TrashIcon,
} from "../../../Components/Icon.jsx";

import Table from "../../../Components/Table/Table.jsx";

const PostLists = () => {
  const data = [
    {
      id: 1,
      name: "علی",
      age: 28,
      job: "توسعه‌دهنده",
      city: "تهران",
      country: "ایران",
      score: 95,
      status: { title: "enable", color: "lime" },
      date: "1402/05/15",
    },
    {
      id: 2,
      name: "سارا",
      age: 32,
      job: "طراح",
      city: "مشهد",
      country: "ایران",
      score: 88,
      status: { title: "disable", color: "gray" },
      date: "1402/04/22",
    },
    {
      id: 3,
      name: "جان",
      age: 45,
      job: "مدیر",
      city: "نیویورک",
      country: "آمریکا",
      score: 76,
      status: { title: "deleted", color: "red" },
      date: "1401/12/03",
    },
  ];
  return (
    <>
      <div className="relative z-5">
        <Table
          id={"mohammad"}
          data={data}
          links={{
            create:"/admin/posts/create-post"
          }}
          customColumnConfig={{
            id: { title: "id", sortable: false, baseWidth: 50 },
          }}
          actions={[
            {
              title: "delete",
              action: (id) => console.log("Delete item with id:", id),
              type: "delete",
              color: "bg-red-500",
              icon: (
                <TrashIcon className={"w-5 h-5 text-white dark:text-white"} />
              ),
            },
            {
              title: "view",
              action: (item) => console.log("View item:", item),
              type: "view",
              color: "bg-yellow-500",
              icon: (
                <ViewIcon className={"w-5 h-5 text-white dark:text-white"} />
              ),
            },
            {
              title: "edit",
              action: (item) => console.log("Edit item:", item),
              type: "edit",
              color: "bg-green-500",
              icon: (
                <ViewIcon className={"w-5 h-5 text-white dark:text-white"} />
              ),
            },
          ]}
        />
      </div>
    </>
  );
};

export default PostLists;
