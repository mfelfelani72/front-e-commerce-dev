import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

// Components

import { InputCheckBoxButton, InputRadioButton, InputSearch } from "../Input.jsx";
import StatusBox from "./StatusBox.jsx";
import { ButtonNoLink } from "../../../../Components/Button.jsx";

// Functions

import { cn } from "../../../../Utils/Libs/cn.js";
import navigate from "../../../../Utils/Libs/navigate.js"

// Zustand

import useAppStore from "../../../../Stores/AppStore.js";

const Table = ({
  data = [],
  customColumnConfig = {},
  defaultSort = { key: "id", direction: "asc" },
  onDelete = () => {},
  onView = () => {},
  onEdit = () => {},
  ...props
}) => {
  // hooks
  const { t } = useTranslation();
 
  // State management
  const initialData = data;
  const [displayData, setDisplayData] = useState(initialData);
  const [columns, setColumns] = useState();
  const [sortConfig, setSortConfig] = useState(defaultSort);
  const [searchTerm, setSearchTerm] = useState("");
  const [columnWidths, setColumnWidths] = useState({});
  const [selectedRows, setSelectedRows] = useState([]);

  const [selectAll, setSelectAll] = useState("empty");

  const themeColor = useAppStore((state) => state.themeColor);

  // refs
  const tableRef = useRef(null);
  const firstColRef = useRef(null);
  const lastColRef = useRef(null);

  // Generate columns from data keys
  const generateColumns = () => {
    if (initialData.length === 0) return [];

    const firstItemKeys = Object.keys(initialData[0]);

    return firstItemKeys.map((key) => {
      const defaultConfig = {
        key,
        title: key,
        sortable: true,
        baseWidth: 120,
      };
      return { ...defaultConfig, ...customColumnConfig[key] };
    });
  };

  // Row selection handlers
  const handleRowSelect = (rowId) => {
    setSelectedRows((prev) =>
      prev.includes(rowId)
        ? prev.filter((id) => id !== rowId)
        : [...prev, rowId]
    );
  };

  const handleSelectAll = () => {
    if (selectedRows.length === displayData.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(displayData.map((row) => row.id));
    }
    setSelectAll("empty");
  };

  // Sorting functionality
  const requestSort = (key) => {
    if (!columns.find((col) => col.key === key)?.sortable) return;

    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    setSortConfig({ key, direction });

    const sortedData = [...filteredData()].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setDisplayData(sortedData);
  };

  // Search functionality
  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const filteredData = () => {
    if (!searchTerm) return initialData;
    return initialData.filter((item) => {
      return Object.values(item).some((value) =>
        String(value).toLowerCase().includes(searchTerm)
      );
    });
  };

  // Sort indicator icon
  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return "↕";
    return sortConfig.direction === "asc" ? "↑" : "↓";
  };

  // Empty state
  if (initialData.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500">No data available</div>
    );
  }

  // Initialize columns
  useEffect(() => {
    setColumns(generateColumns());
  }, []);

  // Apply search filter
  useEffect(() => {
    setDisplayData(filteredData());
  }, [searchTerm]);

  // Calculate column widths
  useEffect(() => {
    const updateWidths = () => {
      if (
        tableRef.current &&
        firstColRef.current &&
        lastColRef.current &&
        columns?.length > 0
      ) {
        const tableWidth = tableRef.current.offsetWidth;
        const firstColWidth = firstColRef.current.offsetWidth;
        const lastColWidth = lastColRef.current.offsetWidth;
        const availableWidth = tableWidth - firstColWidth - lastColWidth;

        const totalBaseWidth = columns.reduce(
          (sum, col) => sum + col.baseWidth,
          0
        );
        const expandFactor = Math.max(1, availableWidth / totalBaseWidth);

        const newWidths = {};
        columns.forEach((col) => {
          newWidths[col.key] = Math.floor(col.baseWidth * expandFactor);
        });

        setColumnWidths(newWidths);
      }
    };

    updateWidths();
    window.addEventListener("resize", updateWidths);
    return () => window.removeEventListener("resize", updateWidths);
  }, [columns]);

  useEffect(() => {
    if (selectAll !== "empty") {
      handleSelectAll();
    }
  }, [selectAll]);

  return (
    <>
      <div
        className="w-full bg-Background-light dark:bg-Background-dark overflow-hidden rounded-lg shadow shadow-Shadows-light-100 dark:shadow-Shadows-dark-100"
        ref={tableRef}
      >
        <div className="flex flex-row justify-between items-center">
          {/* Search input */}
          <div className="w-96 p-3">
            <InputSearch
              placeholder={t("Search in all fields...")}
              onChange={(e) => handleSearch(e.target.value)}
              value={searchTerm}
            />
          </div>

          <div className="flex flex-row gap-2 px-4">
            <ButtonNoLink
              onClick={() => {
                console.log(selectedRows);
              }}
              className={"h-8 rounded-md bg-Error-500 dark:bg-Error-500"}
            >
              {t("delete")}
            </ButtonNoLink>
            <ButtonNoLink
              onClick={() => {
                navigate(props?.links?.create,"get");
              }}
              className={
                "h-8 rounded-md bg-Success-500 dark:bg-Success-500 hover:bg-Success-600"
              }
            >
              {t("create")}
            </ButtonNoLink>
          </div>
        </div>

        {/* Table structure */}
        <div className="flex w-full">
          {/* Fixed checkbox column */}
          <div
            ref={firstColRef}
            className="flex-shrink-0 sticky left-0 z-10 bg-Background-light dark:bg-Background-dark"
            style={{ width: 50 }}
          >
            <div className="h-full flex flex-col items-start justify-between">
              <div className="p-3 bg-Background-light dark:bg-Background-dark font-bold text-Text-light dark:text-Text-dark border-b border-Line-light dark:border-Line-dark sticky top-0 z-20">
                <InputRadioButton
                  id={"sort-table-" + props?.id}
                  name={"check-all"}
                  setSortRadio={setSelectAll}
                  index={"selected"}
                  onChange={() => {}}
                  checked={
                    selectedRows.length === displayData.length &&
                    displayData.length > 0
                  }
                  className={"w-3.5 h-3.5"}
                />
              </div>

              {displayData.map((item, index) => (
                <div
                  key={`checkbox-${item.id || index}`}
                  className="p-3 text-Text-light dark:text-Text-dark"
                >
                  <InputCheckBoxButton
                    id={"sort-table-" + index}
                    checked={selectedRows.includes(item.id)}
                    onChange={() => handleRowSelect(item.id)}
                    className={"w-3.5 h-3.5"}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Main data columns */}
          <div className="flex-1 overflow-x-auto scrollbar">
            <div className="flex flex-col h-full justify-between">
              <div className="flex">
                {columns?.map((column) => (
                  <div
                    key={`header-${column.key}`}
                    className="flex-shrink-0 p-3 bg-Background-light dark:bg-Background-dark font-bold text-Text-light dark:text-Text-dark border-b border-Line-light dark:border-Line-dark sticky top-0 z-10"
                    style={{
                      width: columnWidths[column.key] || column.baseWidth,
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-md select-none font-bold">
                        {t(column.title)}
                      </span>
                      {column.sortable && (
                        <button
                          onClick={() => requestSort(column.key)}
                          className={cn(
                            "text-Text-light dark:text-Text-dark focus:outline-none cursor-pointer text-sm select-none",
                            "hover:text-" + themeColor,
                            "dark:hover:text-" + themeColor
                          )}
                        >
                          {getSortIcon(column.key)}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {displayData.map((item, rowIndex) => (
                <div
                  key={`row-${item.id || rowIndex}`}
                  className="flex hover:bg-BackgroundSecondary-light dark:hover:bg-BackgroundSecondary-dark"
                >
                  {columns?.map((column) => (
                    <div
                      key={`cell-${item.id || rowIndex}-${column.key}`}
                      className="flex-shrink-0 p-3 text-Text-light dark:text-Text-dark text-sm font-medium"
                      style={{
                        width: columnWidths[column.key] || column.baseWidth,
                      }}
                    >
                      {column.key === "status" ? (
                        <StatusBox status={item[column.key]} />
                      ) : (
                        item[column.key]
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Fixed action column */}
          <div
            ref={lastColRef}
            className="flex-shrink-0 sticky right-0 z-10 bg-Background-light dark:bg-Background-dark flex flex-col justify-between"
            style={{ width: 180 }}
          >
            <div className="p-3 bg-Background-light dark:bg-Background-dark font-bold text-Text-light dark:text-Text-dark border-b border-Line-light dark:border-Line-dark sticky top-0 z-20">
              {t("actions")}
            </div>

            {displayData.map((item, index) => (
              <div
                key={`action-${item.id || index}`}
                className="p-3 dark:text-white grid grid-cols-3 justify-between  items-center gap-2 ltr:border-l rtl:border-r border-Line-light dark:border-Line-dark"
              >
                {props.actions?.map((action, index) => (
                  <div
                    key={index}
                    className={cn(
                      "action-item flex mx-1 items-center justify-center rounded-md cursor-pointer w-10 h-5",
                      action.color
                    )}
                  >
                    <button
                      onClick={() => {
                        action.action(item.id);
                      }}
                      className={`cursor-pointer`}
                    >
                      {action.icon}
                    </button>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
