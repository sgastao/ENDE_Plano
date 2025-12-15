import React from 'react';

export const SectionTitle = ({ children, number }: { children?: React.ReactNode; number?: string }) => (
  <h2 className="text-2xl font-serif font-bold text-[#004080] mb-6 mt-8 border-b-2 border-[#004080] pb-2 print-break-inside-avoid">
    {number && <span className="mr-2 text-gray-500">{number}</span>}
    {children}
  </h2>
);

export const SubSectionTitle = ({ children, number }: { children?: React.ReactNode; number?: string }) => (
  <h3 className="text-xl font-serif font-bold text-gray-800 mb-4 mt-6 print-break-inside-avoid">
    {number && <span className="mr-2 text-[#004080]">{number}</span>}
    {children}
  </h3>
);

export const Paragraph = ({ children }: { children?: React.ReactNode }) => (
  <p className="text-gray-700 leading-relaxed mb-4 text-justify font-sans text-sm">
    {children}
  </p>
);

export const Callout = ({ children, title }: { children?: React.ReactNode; title?: string }) => (
  <div className="bg-blue-50 border-l-4 border-[#004080] p-4 my-6 print-break-inside-avoid">
    {title && <h4 className="text-[#004080] font-bold mb-2">{title}</h4>}
    <div className="text-gray-700 italic text-sm">{children}</div>
  </div>
);

export const List = ({ items }: { items: string[] }) => (
  <ul className="list-disc pl-5 space-y-2 mb-4 text-gray-700 text-sm">
    {items.map((item, idx) => (
      <li key={idx} className="pl-2">{item}</li>
    ))}
  </ul>
);

export const DataTable = ({ headers, rows }: { headers: string[], rows: (string | React.ReactNode)[][] }) => (
  <div className="overflow-x-auto mb-8 print-break-inside-avoid border border-gray-200">
    <table className="min-w-full text-sm text-left">
      <thead className="bg-[#004080] text-white">
        <tr>
          {headers.map((h, i) => (
            <th key={i} className="px-4 py-2 font-semibold border-r border-blue-800 last:border-r-0">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {rows.map((row, rIdx) => (
          <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
            {row.map((cell, cIdx) => (
              <td key={cIdx} className="px-4 py-3 align-top border-r border-gray-100 last:border-r-0 text-gray-800">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const PageBreak = () => <div className="print-break-before h-0" />;