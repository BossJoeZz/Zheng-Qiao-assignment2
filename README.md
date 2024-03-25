## Conwey's life game

==Conway's Game of Life== is a well-known cellular automaton in which each generation of a population "evolves" from the previous one according to a set of predefined rules.

 The Game of Life is defined on an infinite Boolean grid, but usually, only finite patterns, where all 1 values fit in a finite Boolean matrix, are studied. Because it involves interactions between adjacent elements of the matrix and can take advantage of APL's convenient and fast Boolean handling, implementing the Game of Life is a popular activity for APLers. APL implementations have appeared in the APL Quote-Quad since 1971, a year after the rules of the Game of Life were first published. More recently, it is sometimes seen as a use case for the Stencil operator, which provides a concise way to work on three-by-three neighborhoods as used by the Game of Life.

### Run

> cd Zheng-Qiao-assignment2
>
> npm install
>
> npm run dev

### WriteUp

> ●    What were some challenges you faced while making this app?
>
> 1. When determining the next state in a complex state machine or decision-making process, there may be boundary issues here. I have to optimize this algorithm to meet various requirements
> 2. Controlling value propagation between two components simultaneously, especially when dealing with asynchronous updates or bidirectional data flow, I encountered a situation where values could not be read between them. The problem of parent-child transmission has been solved by changing it to the props component

> ●    Given more time, what additional features, functional, or design changes would you make?
>
> I will change the data structure of the grid and use map traversal for initialization, combined with mouse down and mouse over in the front-end to obtain the initial sliding life block. At the same time, I plan to optimize the functions retained in each file to reduce their coupling

> ●    What assumptions did you make while working on this assignment?
>
> I assumed the boundary conditions:
>
> Cells outside the grid boundaries are considered dead. This assumption impacts how neighbor cells are counted at the edges of the grid.
> The grid does not wrap around. That is, the right edge is not connected to the left edge, and the top edge is not connected to the bottom edge (no toroidal array assumption).

> How long did this assignment take to complete? 
>
> It took about 4 days and 4 hours of investment per day

### Bonus Points

> Autoplay Feature - 3pts
>
> I completed the automatic playback function by using the timing function set interval to define 100 milliseconds for each next life motion operation.
