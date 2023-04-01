# cm-polyglot

This is an ES6 port of the polyglot reading and handling parts of
https://github.com/evilwan/stakelbase.

It allows the reading of chess opening books in the polyglot (.bin) format. It is used in 
the [cm-engines-runner](https://github.com/shaack/cm-engine-runner) to handle opening books.

## Usage

```javascript
import {Polyglot} from "./src/cm-polyglot/Polyglot.js"

const polyglot = new Polyglot("./assets/books/openings.bin")
const startingPosition = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
console.log(startingPosition, await polyglot.getMovesFromFen(startingPosition))
```

## References

- https://github.com/evilwan/stakelbase
- Polyglot book format http://hgm.nubati.net/book_format.html
- https://shinkarom.github.io/zobrist/
- https://javascript.hotexamples.com/de/examples/chess/js.Chess/fen/javascript-js.chess-fen-method-examples.html
- https://github.com/Bobcat/bobcat/blob/master/src/Book.h
