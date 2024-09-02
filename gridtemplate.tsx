import React, { useState } from 'react';

const GridCheatsheet = () => {
  const [columns, setColumns] = useState('1fr 1fr 1fr');
  const [rows, setRows] = useState('100px 100px');
  const [rowGap, setRowGap] = useState(10);
  const [columnGap, setColumnGap] = useState(10);
  const [itemArea, setItemArea] = useState('2 / 2 / 3 / 3');

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: columns,
    gridTemplateRows: rows,
    rowGap: `${rowGap}px`,
    columnGap: `${columnGap}px`,
    backgroundColor: '#f0f0f0',
    padding: '20px',
    borderRadius: '8px',
  };

  const itemStyle = {
    backgroundColor: '#3498db',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    gridArea: itemArea,
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Интерактивная шпаргалка по CSS Grid</h1>
      
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">grid-template-columns и grid-template-rows</h2>
        <p className="mb-2">Определяют количество и размеры колонок и строк сетки.</p>
        <div className="flex space-x-4 mb-2">
          <input
            type="text"
            value={columns}
            onChange={(e) => setColumns(e.target.value)}
            className="border p-2 rounded"
            placeholder="grid-template-columns"
          />
          <input
            type="text"
            value={rows}
            onChange={(e) => setRows(e.target.value)}
            className="border p-2 rounded"
            placeholder="grid-template-rows"
          />
        </div>
        <p className="text-sm text-gray-600">Попробуйте ввести значения, например: "1fr 2fr 1fr" для колонок и "100px 200px" для строк</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">gap (row-gap и column-gap)</h2>
        <p className="mb-2">Задают пространство между строками и колонками сетки.</p>
        <div className="flex space-x-4 mb-2">
          <input
            type="number"
            value={rowGap}
            onChange={(e) => setRowGap(Number(e.target.value))}
            className="border p-2 rounded"
            placeholder="row-gap"
          />
          <input
            type="number"
            value={columnGap}
            onChange={(e) => setColumnGap(Number(e.target.value))}
            className="border p-2 rounded"
            placeholder="column-gap"
          />
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">grid-area</h2>
        <p className="mb-2">Шорткат для grid-row-start, grid-column-start, grid-row-end, grid-column-end.</p>
        <input
          type="text"
          value={itemArea}
          onChange={(e) => setItemArea(e.target.value)}
          className="border p-2 rounded w-full mb-2"
          placeholder="grid-area"
        />
        <p className="text-sm text-gray-600">Формат: "row-start / column-start / row-end / column-end". Попробуйте "1 / 1 / 3 / 3" для растягивания элемента.</p>
      </div>

      <div style={gridStyle} className="mb-6">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="bg-green-500 p-4 text-white text-center">
            Item {index + 1}
          </div>
        ))}
        <div style={itemStyle}>Интерактивный элемент</div>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Теория CSS Grid</h2>
        <ul className="list-disc pl-5">
          <li><strong>grid-template</strong>: шорткат для определения grid-template-columns и grid-template-rows в одной строке.</li>
          <li><strong>grid-row-start</strong> и <strong>grid-row-end</strong>: определяют, по каким строкам сетки распространяется элемент.</li>
          <li><strong>grid-column-start</strong> и <strong>grid-column-end</strong>: определяют, по каким колонкам сетки распространяется элемент.</li>
          <li>Используйте ключевые слова <code>span</code> с grid-row/column-start/end для указания, сколько строк/колонок должен занимать элемент.</li>
          <li>Отрицательные значения отсчитываются от конца сетки.</li>
        </ul>
      </div>
    </div>
  );
};

export default GridCheatsheet;
