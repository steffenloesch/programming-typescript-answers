type Color = 'Black' | 'White'
type ChessFile = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'
type ChessRank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

class Position {
    constructor(private file: ChessFile, private rank: ChessRank) {}

    distanceFrom(position: Position) {
        return {
            rank: Math.abs(position.rank - this.rank),
            file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0))
        }
    }
}

abstract class Piece {
    protected position: Position
    constructor(private readonly color: Color, file: ChessFile, rank: ChessRank) {
        this.position = new Position(file, rank)
    }

    moveTo(position: Position) {
        this.position = position
    }

    abstract canMoveTo(position: Position): boolean
}

class King extends Piece {
    canMoveTo(position: Position): boolean {
        let distance = this.position.distanceFrom(position)
        return distance.rank < 2 && distance.file < 2
    }
}

class Queen extends Piece {
    canMoveTo(position: Position): boolean {
        let distance = this.position.distanceFrom(position)
        return distance.rank == distance.file || distance.rank == 0 || distance.file == 0
    }
}
//class Bishop extends Piece {}
//class Knight extends Piece {}
//class Rook extends Piece {}

class Game {
    private pieces = Game.makePieces()

    private static makePieces() {
        return [
            new King('White', 'E', 1),
            new King('Black', 'E', 8),

            new Queen('White', 'D', 1),
            new Queen("Black", 'D', 8),
        ]
    }
}