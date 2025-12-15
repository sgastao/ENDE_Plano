import React from 'react';
import { PillarData } from '../types';
import { SectionTitle, Paragraph, DataTable } from './ReportUI';

export const PillarSection: React.FC<{ data: PillarData; index: number }> = ({ data, index }) => {
  const objectiveRows = data.objectives.map(obj => [
    obj.objective,
    obj.status,
    obj.meta,
    obj.strategicTarget
  ]);

  const measureRows = data.measures.map(m => [
    <span className="font-bold text-[#004080] whitespace-nowrap">{m.id} <br/><span className="font-normal text-xs text-black">{m.name}</span></span>,
    m.description,
    m.start,
    m.meta
  ]);

  return (
    <div className="mb-12 print-break-inside-avoid">
      <SectionTitle number={`P${index + 1}:`}>{data.title}</SectionTitle>
      <Paragraph>{data.description}</Paragraph>

      <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2 mt-4">Objetivos Operacionais e Metas</h4>
      <DataTable 
        headers={['Objetivo Operacional (2026-2028)', 'Estado Atual (2024/2025)', 'Meta (2027/2028)', 'Alvo Estratégico (2036)']}
        rows={objectiveRows}
      />

      <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2 mt-4">Medidas de Intervenção</h4>
      <DataTable 
        headers={['Medida', 'Descrição', 'Início', 'Meta (2027/2028)']}
        rows={measureRows}
      />
    </div>
  );
};