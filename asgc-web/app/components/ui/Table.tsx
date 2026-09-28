import {
  HTMLAttributes,
  TableHTMLAttributes,
  TdHTMLAttributes,
  ThHTMLAttributes,
} from "react";

export function TableContainer({
  children,
  className = "",
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`w-full overflow-x-auto border border-border rounded-xl bg-surface ${className}`}>
      {children}
    </div>
  );
}

function TableRoot({
  className = "",
  children,
  ...props
}: TableHTMLAttributes<HTMLTableElement>) {
  return (
    <table className={`w-full text-left text-sm text-foreground ${className}`} {...props}>
      {children}
    </table>
  );
}

export function TableHeader({
  className = "",
  children,
  ...props
}: HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <thead className={`bg-surface-hover text-text-secondary border-b border-border text-xs uppercase tracking-wider ${className}`} {...props}>
      {children}
    </thead>
  );
}

export function TableBody({
  className = "",
  children,
  ...props
}: HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <tbody className={`divide-y divide-border ${className}`} {...props}>
      {children}
    </tbody>
  );
}

export function TableRow({
  className = "",
  children,
  ...props
}: HTMLAttributes<HTMLTableRowElement>) {
  return (
    <tr className={`hover:bg-surface-hover/50 transition-colors ${className}`} {...props}>
      {children}
    </tr>
  );
}

export function TableHead({
  className = "",
  children,
  ...props
}: ThHTMLAttributes<HTMLTableCellElement>) {
  return (
    <th className={`px-4 py-3 font-semibold ${className}`} {...props}>
      {children}
    </th>
  );
}

export function TableCell({
  className = "",
  children,
  ...props
}: TdHTMLAttributes<HTMLTableCellElement>) {
  return (
    <td className={`px-4 py-3 text-sm ${className}`} {...props}>
      {children}
    </td>
  );
}

// Anexa os subcomponentes para suportar o acesso <Table.Header />, <Table.Row />, etc.
export const Table = Object.assign(TableRoot, {
  Header: TableHeader,
  Body: TableBody,
  Row: TableRow,
  Head: TableHead,
  Cell: TableCell,
  Container: TableContainer,
});