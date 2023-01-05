import React from 'react'

import classNames from 'classnames'

import classes from './Table.module.scss'

export interface TableProps {
  header: string[]
  rows?: string[][]
  render?: () => {}
}

export const Table: React.FunctionComponent<TableProps> = ({
  header,
  rows = [],
  render,
}) => {
  const isCustomRender = !!render

  return (
    <div className={classes.container}>
      <table className={classNames(classes.table)}>
        <thead>
          <tr>
            {header.map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {/* @ts-ignore */}
          {isCustomRender
            ? render?.()
            : rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell) => (
                    <td key={cell}>{cell}</td>
                  ))}
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  )
}
