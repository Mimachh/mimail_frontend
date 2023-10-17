import { ColumnDef } from "@tanstack/react-table";
import { SiteCellAction } from "./CellAction";
import { useTranslation } from "react-i18next";
import { dateOptions } from "@/lib/dateOptions";
import { Link } from "react-router-dom";

export type SiteColumn = {
    index: number;
    id: number;
    name: string;
    monthly_mail?: number;
    created_at?: string;
}




export const getSiteColumns: () => ColumnDef<SiteColumn>[] = () => {
    const { t } = useTranslation();
  
    return [
      {
        accessorKey: "index",
        header: "ID",
      },
      {
        accessorKey: "name",
        header: t('site:site_name'),
        cell: ({ row }) => {
          const siteData = row.original as SiteColumn; // Assurez-vous que SiteColumn correspond au type des données d'origine
          const id = siteData.id;
          const link = siteData.name;
          return <Link to={`/sites/${id}`} className="underline text-blue-800">{link} {id}</Link>;
        }
      },
      {
        accessorKey: "monthly_mail",
        header: t('site:monthly_mail'),
      },
      {
        accessorKey: "created_at",
        header: t('site:monthly_mail'),
        cell: ({ row }) => {
          const date = new Date(row.getValue("created_at"));
          return date.toLocaleString(t('common:date_format'), dateOptions);
        },
      },
      {
        id: "actions",
        cell: ({ row }) => <SiteCellAction data={row.original} />,
      },
    ];
  };