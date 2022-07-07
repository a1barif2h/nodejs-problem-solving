process.stdin.resume()
process.stdin.setEncoding('utf-8')

let standardInputString = ''
let currentLine = 0

function readLine() {
    return standardInputString[currentLine++]
}

process.stdin.on('data', rawData => {
    standardInputString += rawData
})

process.stdin.on('end', _ => {
    standardInputString = standardInputString.trim().split('\n').map(line => line.trim())
    main()
})

function main() {
    const n = parseInt(readLine())
    let count = 0;
    for (let i = 0; i < n; i++) {
        const input = readLine().split(" ");
        let total = 0;
        for (let i = 0; i < input.length; i++) {

            total += parseInt(input[i]);

        }

        if (total >= 2) {
            count++
        }

    }
    console.log(count)
}