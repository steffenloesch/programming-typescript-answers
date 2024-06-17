class Game {}

type Color = 'Black' | 'White'
type ChessFile = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'
type ChessRank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

class Position {
    constructor(private file: ChessFile, private rank: ChessRank) {}
}

class Piece {
    protected position: Position
    constructor(private readonly color: Color, file: ChessFile, rank: ChessRank) {
        this.position = new Position(file, rank)
    }
}

class King extends Piece {}
class Queen extends Piece {}
class Bishop extends Piece {}
class Knight extends Piece {}
class Rook extends Piece {}
class Pawn extends Piece {}