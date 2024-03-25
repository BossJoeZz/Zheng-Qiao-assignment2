import {useState, useEffect} from "react"
import "./GridGenerator.css"
import ToolBar from "../ToolBar/ToolBar.jsx";
import {getRandomCells, getHeatLevel, getLiveCells} from "../../utils/GridUtilities.js";
import getNextGrid from "../../utils/GridUtilities.js";

export default function Grid() {
    const [gridWidth, setGridWidth] = useState(20);
    const [gridHeight, setGridHeight] = useState(20);
    const [Cells, setCells] = useState(gridWidth, gridHeight);
    const [heatMap, setHeatMap] = useState(getHeatLevel(gridWidth, gridHeight, Cells, Array(40 * 40).fill(0)));
    const [liveCell, setLiveCell] = useState(getLiveCells(gridWidth, gridHeight, Cells));
    const [AutoRun, setAutoRun] = useState(false);
    const [Pattern, setPattern] = useState(false);
    useEffect(() => {
        setCells(getRandomCells(gridWidth, gridHeight));
    }, [gridWidth, gridHeight]);
    useEffect(() => {
        let interval;
        if (AutoRun) {
            interval = setInterval(() => {
                setCells((preGrid) => getNextGrid(gridWidth, gridHeight, preGrid));
            }, 100);
        }
        return () => clearInterval(interval);
    }, [AutoRun, gridHeight, gridWidth]);
    useEffect(() => {
        setLiveCell(getLiveCells(gridWidth, gridHeight, Cells));
    }, [Cells, gridHeight, gridWidth]);

    useEffect(() => {
        setHeatMap(getHeatLevel(gridWidth, gridHeight, Cells, heatMap));
    }, [Cells]);

    function resetGrid() {
        setAutoRun(false);
        setCells(Array(40 * 40).fill('box'));
        setHeatMap(Array(40 * 40).fill(0));
    }

    function handleAutoRun() {
        setAutoRun(prev => !prev);
    }

    function handleHeatMap() {
        setPattern(prev => !prev);
    }

    function StartNextStep() {
        setAutoRun(false);
        setCells(getNextGrid(gridWidth, gridHeight, Cells));
    }

    function randomizeLiveCell(width, height) {
        setHeatMap(Array(40 * 40).fill(0));
        setAutoRun(false);
        setCells(getRandomCells(width, height));
    }

    function changeWidth(event) {
        const newWidth = parseInt(event.target.value);
        if (isNaN(newWidth)) {
            setGridWidth(NaN)
        } else if (newWidth < 3) {
            setGridWidth(3);
        } else if (newWidth > 40) {
            setGridWidth(40);
        } else {
            setGridWidth(newWidth);
        }

        resetGrid()
    }

    function changeHeight(event) {
        const newHeight = parseInt(event.target.value);
        if (isNaN(newHeight)) {
            setGridHeight(NaN);
        } else if (newHeight < 3) {
            setGridHeight(3);
        } else if (newHeight > 40) {
            setGridHeight(40);
        } else {
            setGridHeight(newHeight);
        }
        resetGrid()
    }

    function handleMouseDown(index) {
        if (AutoRun === false) {
            const update = [...Cells];
            update[index] = update[index] === 'box' ? 'box live' : 'box';
            setCells(update);
        }
    }

    function renderGrid() {
        const Boxes = [];
        for (let h = 0; h < gridHeight; h++) {
            let boxRow = []
            for (let r = 0; r < gridWidth; r++) {
                let i = r + h * gridWidth
                let suffix = Pattern ? " " + "heatLevel" + heatMap[i].toString() : "";
                let boxElement =
                    <div key={i} className={Cells[i] + suffix} onMouseDown={() => handleMouseDown(i)}></div>;
                boxRow.push(boxElement);
            }
            Boxes.push(<div key={h} className={"gridRow"}>{boxRow}</div>);
        }
        return Boxes;
    }

    return (
      <>
          <div id="outer">
              <div id="gridIndex">
                  <div id="gridColumn">
                      {renderGrid()}
                  </div>
              </div>
              <ToolBar
                  Pattern={Pattern}
                  AutoRun={AutoRun}
                  gridHeight={gridHeight}
                  gridWidth={gridWidth}
                  handleHeatMap={handleHeatMap}
                  handleAutoRun={handleAutoRun}
                  randomizeLiveCell={randomizeLiveCell}
                  resetGrid={resetGrid}
                  StartNextStep={StartNextStep}
                  changeHeight={changeHeight}
                  changeWidth={changeWidth}
              />
              <div className="cellInfo">
                  <span>There are {liveCell} Live Cells</span>
              </div>
          </div>
      </>
    )
}
