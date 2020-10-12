const xlsx = require('xlsx')
const fs = require('fs')

const tables = xlsx.readFile('r.xlsx')['Sheets']
const data = {}

Object.keys(tables).forEach((key)=>{
    const temp = fillSchedule(tables[key])
    data[key] = temp
})

fs.appendFileSync('data.json', JSON.stringify(data))

function fillSchedule(table){
    if(!table || !Object.keys(table).length) return
    const merges = table['!merges']
    const groups = {}
    const schedule = {}
    const weekdays= {}
    let firstWeekdayX = 0

    fillWeekdays()
    fillGroups(firstWeekdayX + 3)
    console.log(groups)
    fillSchedule('even')
    fillSchedule('odd')

    function fillGroups(i = 3){
        let j = transformIdToCords(Object.keys(weekdays)[0])['y'] - 1
        let id = transformCordsToId(i, j)
        console.log(i, j, id)
        while (table[id] && i < 200){
            groups[id] = table[id]['v']
            i++
            id = transformCordsToId(i, j)
        }
    }
    function fillWeekdays(){
        let id = 'A10'
        let i = 0
        while (!table[onIncludes(id)]){
            firstWeekdayX++
            id = transformCordsToId(firstWeekdayX, 10)
        }
        while (Object.keys(weekdays).length < 5){
            id = transformCordsToId(firstWeekdayX, i)
            i++
            if(table[id] && table[id]['v'].length > 3){
                weekdays[id] = table[id]['v']
            }
        }
    }
    function fillSchedule(key = 'even'){
        let searchI = Object.keys(groups).length
        if (key === 'odd'){
            while (!table[transformCordsToId(searchI + 4, 4)]){
                searchI++
            }
        }
        Object.keys(groups).forEach((id) => {
            let {x} = transformIdToCords(id)
            if(key === 'odd'){
                x += searchI + 1
            }
            schedule[groups[id]] = schedule[groups[id]] || {}
            Object.keys(weekdays).forEach(dayKey => {
                const parseDay = transformIdToCords(dayKey)
                for (let i = parseDay['y']; i < parseDay['y'] + 15; i += 3){
                    schedule[groups[id]][weekdays[dayKey]] = schedule[groups[id]][weekdays[dayKey]] || {}
                    if(table[transformCordsToId(x, i)] || onIncludes(transformCordsToId(x, i))){
                        const mainCellId = onIncludes(transformCordsToId(x, i)) ||
                            transformCordsToId(x, i)
                        const mainCell1Id = onIncludes(transformCordsToId(x, i + 1)) ||
                            transformCordsToId(x, i + 1)
                        const mainCell2Id = onIncludes(transformCordsToId(x, i + 2)) ||
                            transformCordsToId(x, i + 2)
                        const lecture = {
                            lectureName: table[mainCellId] ? table[mainCellId]['v'] : '',
                            teacher: table[mainCell1Id] ? table[mainCell1Id]['v'] : '',
                            classroom: table[mainCell2Id] ? table[mainCell2Id]['v'] : ''
                        }
                        schedule[groups[id]][weekdays[dayKey]][key] =
                            schedule[groups[id]][weekdays[dayKey]][key] || {}
                        schedule[groups[id]][weekdays[dayKey]][key][( i - parseDay['y'] ) / 3 + 1] = lecture
                    }
                }
            })
        })
    }
    function onIncludes(cell) {
        let {x, y} = transformIdToCords(cell)
        const res = merges.filter(el => el['s'].c <= x && el['s'].r <= y && el['e'].c >= x && el['e'].r >= y)
        return res.length ? transformCordsToId(res[0]['s']['c'], res[0]['s']['r']) : false
    }
    return schedule
}

function transformIdToCords(id) {
    let x = 0,
        y = ''
    const firstNumId = id.split('').findIndex(el => isNaN(+el) === false)
    const idWordPart = id.slice(0, firstNumId)
    const idNumPart = id.slice(firstNumId)
    const xPart = ABToNum(idWordPart)
    id.split('').forEach(el => isNaN(+el) ? x += letterNumberInAlphabet(el) : y += el)
    return { x : xPart - 1, y : +idNumPart - 1 }
}

function transformCordsToId(x, y) {
    return numToAB(x) + ++y
}

function ABToNum(AB){
    return AB.split('').reduce((acc, current, index) => {
        return acc + letterNumberInAlphabet(current) * 26 ** (AB.length - index - 1)
    }, 0)
}

function numToAB(num) {
    num++
    const nums = []
    while (num){
        nums.push(num % 26 + 64)
        num = Math.floor(num / 26)
    }
    nums.reverse()
    return String.fromCharCode(...nums)
}

function letterNumberInAlphabet(letter){
    return letter.charCodeAt(0) - 64
}
