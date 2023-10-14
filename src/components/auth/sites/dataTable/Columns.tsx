import { ColumnDef } from "@tanstack/react-table";
import { SiteCellAction } from "./CellAction";
import { useTranslation } from "react-i18next";

export type SiteColumn = {
    id: number;
    name: string;
    monthly_mail?: number;
}

export const getSiteColumns: () => ColumnDef<SiteColumn>[] = () => {
    const { t } = useTranslation();
  
    return [
      {
        accessorKey: "name",
        header: t('site:site_name'),
      },
      {
        accessorKey: "monthly_mail",
        header: t('site:monthly_mail'),
      },
      {
        id: "actions",
        cell: ({ row }) => <SiteCellAction data={row.original} />,
      },
    ];
  };