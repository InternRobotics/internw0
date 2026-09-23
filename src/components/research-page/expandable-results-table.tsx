"use client";

import { ChevronRight } from "lucide-react";
import { Fragment, useState } from "react";

import { projectInfo, type BenchmarkResult, type TableRow } from "@/data/project-page";

function DetailTable({
  columns,
  rows,
}: {
  columns: string[];
  rows: TableRow[];
}) {
  return (
    <div className="results-table-shell results-detail-table-shell">
      <table className="results-table results-detail-table">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index} scope="col">{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr className={row.highlight ? "is-ours" : undefined} key={`${row.cells[0]}-${rowIndex}`}>
              {row.cells.map((cell, cellIndex) => (
                <td key={`${cell}-${cellIndex}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ExpandableResultsTable({
  results,
}: {
  results: BenchmarkResult[];
}) {
  const [openId, setOpenId] = useState<string | null>(null);
  const toggleResult = (id: string) => {
    setOpenId((currentId) => (currentId === id ? null : id));
  };

  return (
    <div className="results-table-shell">
      <table className="results-table results-summary-table">
        <thead>
          <tr>
            <th>Benchmark</th>
            <th>Metric</th>
            <th>{projectInfo.name}</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => {
            const isOpen = openId === result.id;
            const detailId = `results-detail-${result.id}`;

            return (
              <Fragment key={result.id}>
                <tr className={isOpen ? "is-expanded is-ours" : "is-ours"}>
                  <td>
                    <button
                      aria-controls={detailId}
                      aria-expanded={isOpen}
                      className="results-expand-button"
                      onClick={() => toggleResult(result.id)}
                      type="button"
                    >
                      <ChevronRight aria-hidden className="results-expand-icon" />
                      <span>{result.benchmark}</span>
                    </button>
                  </td>
                  <td>{result.metric}</td>
                  <td>{result.value}</td>
                </tr>
                {isOpen ? (
                  <tr className="results-detail-row" key={`${result.id}-detail`}>
                    <td colSpan={3}>
                      <div className="results-detail-panel" id={detailId}>
                        <div className="results-detail-heading">
                          <p>{result.detailCaption}</p>
                        </div>
                        <DetailTable columns={result.detailColumns} rows={result.detailRows} />
                      </div>
                    </td>
                  </tr>
                ) : null}
              </Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
