const validSolution = matrix => {
    return isValidByRows(matrix) && isValidByRows(colsToRows(matrix)) && isValidByRows(gridsToRows(matrix))
}

const isValidArray = array => {
    let isValid = false

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] === array[j] && i != j) {
                return isValid
            }
        }
    }

    return !isValid
}

const isValidByRows = matrix => {
    let isValid = false

    for (let i = 0; i < matrix.length; i++) {
        if (isValidArray(matrix[i]) === false) {
            return isValid
        }
    }

    return !isValid
}

const colsToRows = matrix => {
    const matrixRows = []

    for (let i = 0; i < matrix.length; i++) {
        const array = []
        for (let j = 0; j < matrix.length; j++) {
            array[j] = matrix[j][i]
        }
        matrixRows[i] = array
    }

    return matrixRows
}

const gridsToRows = matrix => {
    const matrixRows = []

    for (let h = 0; h < 3; h++) {
        for (let i = 0; i < 3; i++) {
            const array = [] 
            for (let j = 0; j < 3; j++) {
                for (let k = 0; k < 3; k++) {
                    array[3*j+k] = matrix[3*h+j][3*i+k]
                }
            }
            matrixRows[3*h+i] = array
        }
    }

    return matrixRows
}

module.exports = { validSolution, isValidArray, isValidByRows, colsToRows }