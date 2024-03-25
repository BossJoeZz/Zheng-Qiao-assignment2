import "./GameInfo.css"

export function GameInfo() {
    const content =
        "Conway's Game of Life is a well-known cellular automaton in which each generation of a population \"evolves\" from the previous one according to a set of predefined rules. The Game of Life is defined on an infinite Boolean grid, but usually only finite patterns, where all 1 values fit in a finite Boolean matrix, are studied. Because it involves interactions between adjacent elements of the matrix, and can take advantage of APL's convenient and fast Boolean handling, implementing the Game of Life is a popular activity for APLers. APL implementations have appeared in the APL Quote-Quad since 1971, a year after the rules of the Game of Life were first published. More recently, it is sometimes seen as a use case for the Stencil operator, which provides a concise way to work on three-by-three neighborhoods as used by the Game of Life."
    let introBlcok = <div className="introBlock">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{content}</div>
    let headtingText = <h1>Introduction to Conway's Game of Live</h1>

    function ruleList() {
        return (
            <div>
                <ul>
                    <h3>Here are some rules of this game:</h3>
                    <li>A living cell with less than two living neighbours dies.</li>
                    <li>A living cell with two or three live neighbours lives.</li>
                    <li>A living cell with more than three live neighbours dies.</li>
                    <li>A dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.</li>
                </ul>
            </div>
        )
    }

    return (
        <div className="introContainer">
            {headtingText}
            {introBlcok}
            {ruleList()}
        </div>
    )
}
