/**
 * Author: Stefan Haack (https://shaack.com)
 * Date: 2021-12-10
 *
 * An ES6 wrapper for the ployglot part of https://github.com/johnfontaine/chess-tools
 */

import {Book} from "../stakelbase/Book.js"
import {KeyGenerator} from "../stakelbase/KeyGenerator.js"

export class Polyglot {

    constructor(url) {
        // const bookEntry = new BookEntry()
        this.book = null
        this.initialisation = new Promise((resolve) => {
            /** @var book Book */
            this.readOpeningBook(url).then((book) => {
                this.book = book
                resolve()
            })
        })
        this.keyGenerator = new KeyGenerator()
    }

    rawMoveToSan(rawMove) {

    }

    async getMovesFromFen(fen) {
        return new Promise((resolve) => {
            this.initialisation.then(() => {
                const hash = this.keyGenerator.compute_fen_hash(fen)
                const bookEntries = this.book.get_all_moves(hash)
                for (const bookEntry of bookEntries) {
                    console.log("from", bookEntry.get_from_col(), bookEntry.get_from_row(),
                            "to", bookEntry.get_to_col(), bookEntry.get_to_row(), "weight", bookEntry.weight)
                }
                resolve()
            })
        })
    }

    readOpeningBook(url) {
        return new Promise((resolve, reject) => {
            fetch(url).then((response) => {
                response.blob().then((blob) => {
                    let reader = new FileReader()
                    reader.readAsBinaryString(blob)
                    reader.onload = () => {
                        resolve(new Book(reader.result))
                    }
                    reader.onerror = () => {
                        reject(reader.error)
                    }
                })
            })
        })
    }

}

