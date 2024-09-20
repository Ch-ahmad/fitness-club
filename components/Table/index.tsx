"use client";
import React, { type ReactNode, useState } from "react";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type RowData = Record<string, any>;
type IColumnProps = {
	render: (rowData: RowData) => ReactNode;
	className?: string;
	title: string;
};
interface ITablePaginationProps {
	headers: string[];
	columns: IColumnProps[];
	data: RowData[];
	isLoading?: boolean;
}
const TablePagination = ({
	headers,
	columns,
	data,
	isLoading,
}: ITablePaginationProps) => {
	const [currentPage, setCurrentPage] = useState<number>(1);
	const rowsPerPage = 7;
	const totalRows = data?.length;
	const totalPages = Math.ceil(totalRows / rowsPerPage);

	const onNext = () => {
		if (currentPage < totalPages) {
			setCurrentPage((prevPage) => prevPage + 1);
		}
	};

	const onPrev = () => {
		if (currentPage > 1) {
			setCurrentPage((prevPage) => prevPage - 1);
		}
	};

	const startIndex = (currentPage - 1) * rowsPerPage;
	const endIndex = startIndex + rowsPerPage;

	const currentData = data?.slice(startIndex, endIndex);
	if (isLoading) {
		return <>Loading</>;
	}
	return (
		<>
			<Table>
				<TableHeader>
					<TableRow>
						{headers.map((header) => (
							<TableHead key={header}>{header}</TableHead>
						))}
					</TableRow>
				</TableHeader>
				<TableBody>
					{currentData?.length === 0 ? (
						<TableRow>
							<TableCell colSpan={headers.length} className="h-24 text-center">
								No data found
							</TableCell>
						</TableRow>
					) : (
						// biome-ignore lint/suspicious/noExplicitAny: <explanation>
						currentData?.map((row: any, rowIndex: number) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<TableRow key={rowIndex}>
								{columns.map((column, colIndex) => (
									<TableCell
										// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
										key={colIndex}
										className={cn(column.className)}
									>
										{column.render(row)}
									</TableCell>
								))}
							</TableRow>
						))
					)}
				</TableBody>
			</Table>
			{totalPages > 1 ? (
				<div className="flex items-center justify-end space-x-2 py-4">
					<div className="flex-1 text-sm text-muted-foreground">
						{currentPage} / {totalPages}
					</div>
					<div className="space-x-2">
						<Button
							variant="outline"
							size="sm"
							onClick={onPrev}
							disabled={currentPage === 1}
						>
							Previous
						</Button>
						<Button
							variant="outline"
							size="sm"
							onClick={onNext}
							disabled={currentPage === totalPages}
						>
							Next
						</Button>
					</div>
				</div>
			) : null}
		</>
	);
};

export default TablePagination;
