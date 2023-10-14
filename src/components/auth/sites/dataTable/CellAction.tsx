import { ConfirmModal } from "@/components/modals/confirmModal";
import { SiteColumn } from "./Columns"
import { useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Edit, MoreHorizontal, Trash } from "lucide-react";

interface  CellActionProps {
    data: SiteColumn;
}

export const SiteCellAction: React.FC<CellActionProps> = ({
data
}) => {
    const [openDeleteSiteModal, setOpenDeleteSiteModal] = useState(false);
    const [loading, setLoading] = useState(false);

    const onConfirm = () => {

    };
    
    return (
        <>
        <ConfirmModal 
        isOpen={openDeleteSiteModal}
        onClose={() => setOpenDeleteSiteModal(false)}
        onConfirm={onConfirm}
        loading={loading}
        />
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4"/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem 
                className="cursor-pointer">
                    <Edit className="mr-2 h-4 w-4" />
                    Update
                </DropdownMenuItem>
                <DropdownMenuItem 
                className="cursor-pointer"
                onClick={() => setOpenDeleteSiteModal(true)}>
                    <Trash className="mr-2 h-4 w-4" />
                    Delete
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        </>
    )
}