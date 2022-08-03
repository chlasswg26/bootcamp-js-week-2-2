const searchName = (stringValue, amount, callback) => {
    const name = [
        "Abigail", "Alexandra", "Alison",
        "Amanda", "Angela", "Bella",
        "Carol", "Caroline", "Carolyn",
        "Deirdre", "Diana", "Elizabeth",
        "Ella", "Faith", "Olivia", "Penelope"]

    let data = {}
    data.arrayName = name
    data.stringValue = stringValue
    data.amount = amount
    data.callback = callback

    return callback(data)
}

const searchValidation = (data) => {
    try {
        if (!data) throw 'Data tidak boleh kosong!'
        
        const { arrayName, stringValue, amount, callback } = data

        if (!arrayName) throw 'Daftar nama tidak boleh kosong!'
        if (!stringValue) throw 'Kata kunci pencarian tidak boleh kosong!'
        if (!amount) throw 'Limit tidak boleh kosong!'
        if (!callback) throw 'Callback tidak boleh kosong!'
        if (typeof arrayName !== 'object') throw 'Daftar nama harus berupa ARRAY!'
        if (typeof stringValue !== 'string') throw 'Kata kunci pencarian harus berupa STRING!'
        if (typeof amount !== 'number') throw 'Limit harus berupa ANGKA!'
        if (typeof callback !== 'function') throw 'Callback harus berupa function!'
        if (amount < 1) throw 'Limit tidak boleh kurang dari satu!'
        if (amount > arrayName.length) throw 'Limit tidak boleh lebih dari jumlah Daftar nama!'

        let newData = {}
        newData.arrayName = arrayName
        newData.stringValue = stringValue
        newData.amount = amount

        return newData
    } catch (error) {
        return error
    }
}

const searchLogicCallback = (data) => {
    const validationResult = searchValidation(data)

    if (typeof validationResult !== 'object') return validationResult

    const { arrayName, stringValue, amount } = validationResult

    const filterAndSortArray = arrayName
        .filter(value => value
            .toLowerCase()
            .includes(stringValue))
        .sort()

    if (filterAndSortArray.length < amount) return `Hasil pencarian dari "${stringValue}" tidak ditemukan!`

    const result = filterAndSortArray.slice(0, amount)

    return JSON.stringify(result)
}

console.log(`Searching program:
${searchName('an', 3, searchLogicCallback)}`)
