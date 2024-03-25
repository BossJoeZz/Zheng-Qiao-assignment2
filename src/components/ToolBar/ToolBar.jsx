import "./ToolBar.css"

export default function ToolBar(props) {
    const Pattern = props.Pattern;
    const AutoRun = props.AutoRun;
    const gridHeight = props.gridHeight;
    const gridWidth = props.gridWidth;
    const handleHeatMap = props.handleHeatMap;
    const handleAutoRun = props.handleAutoRun;
    const randomizeLiveCell = props.randomizeLiveCell;
    const resetGrid = props.resetGrid;
    const StartNextStep = props.StartNextStep;
    const changeHeight = props.changeHeight;
    const changeWidth = props.changeWidth;
    return (
        <div className="toolBarContainer">
            <button className="toolItem"
                    onClick={() => handleHeatMap()}>{Pattern ? "Common" : "Heatmap"}</button>
            <button className="toolItem" onClick={() => handleAutoRun()}>{AutoRun ? "Stop" : "Run"}</button>
            <button className="toolItem" onClick={() => randomizeLiveCell(gridWidth, gridHeight)}>Random</button>
            <button className="toolItem" onClick={() => resetGrid()}>Reset</button>
            <button className="toolItem" onClick={() => StartNextStep()}>Next Step</button>
            <label className="toolItem" htmlFor="gridWidth">
                Grid Width: <input type="number" id="gridWidth" name="gridWidth" value={gridWidth}
                                   onChange={(gridWidth) => changeWidth(gridWidth)}/>
            </label>
            <label className="toolItem" htmlFor="gridHeight">
                Grid Height: <input type="number" id="gridHeight" name="gridHeight" value={gridHeight}
                                    onChange={(gridHeight) => changeHeight(gridHeight)}/>
            </label>

        </div>
    )
}
