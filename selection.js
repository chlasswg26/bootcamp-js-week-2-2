const selectionValueValidation = (data) => {
    try {
        if (!data) throw 'Data tidak boleh kosong!'

        const { firstValue, secondValue, arrayData } = data

        if (!firstValue) throw 'Nilai awal tidak boleh kosong!'
        if (!secondValue) throw 'Nilai akhir tidak boleh kosong!'
        if (!arrayData) throw 'Data tidak boleh kosong!'
        if (typeof firstValue !== 'number') throw 'Nilai awal harus berupa ANGKA!'
        if (typeof secondValue !== 'number') throw 'Nilai akhir harus berupa ANGKA!'
        if (typeof arrayData !== 'object') throw 'Data harus berupa ARRAY!'
        if (firstValue < 1 || secondValue < 1) throw 'Nilai awal atau Nilai akhir tidak boleh kurang dari satu!'
        if ((firstValue > secondValue) || (secondValue < firstValue)) throw 'Nilai akhir harus lebih besar dari nilai awal!'
        if (arrayData.length <= 5) throw 'Jumlah angka dalam Data harus lebih dari 5!'

        let newData = {}
        newData.firstValue = firstValue
        newData.secondValue = secondValue
        newData.arrayData = arrayData

        return newData
    } catch (error) {
        return error
    }
}

const seleksiNilai = (first, second, array) => {
    let data = {}
    data.firstValue = first
    data.secondValue = second
    data.arrayData = array

    const validationResult = selectionValueValidation(data)

    if (typeof validationResult !== 'object') return validationResult

    const { firstValue, secondValue, arrayData } = validationResult

    const mappingArrayData = arrayData.map(value => {
        let printOnlyNumberOrElseFalse = (value > firstValue && value < secondValue) && value

        return printOnlyNumberOrElseFalse
    })

    const result = mappingArrayData
        .filter(value => typeof value === 'number')
        .sort((a, b) => a - b)

    if (!result.length || result.length < 1) return 'Nilai tidak ditemukan'

    return JSON.stringify(result)
}

console.log(`Selection value program:
${seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8])}
${seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8])}
${seleksiNilai(5, 17, [2, 25, 4])}
${seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18])}`)
