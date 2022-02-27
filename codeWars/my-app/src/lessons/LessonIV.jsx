import React from "react";

const LessonIV = () => {

    const highAndLow = (numbers) => {

        let nubersNoSpaces = numbers.replace(/^ +| +$|()  +/, "$1")

        let arr = nubersNoSpaces.split(' ')

        let arrDigits = []

        arr.map(el => arrDigits.push(+el))

        function getMaxOfArray(arrDigits) {
            return Math.max.apply(null, arrDigits)
        }

        function getMinOfArray(arrDigits) {
            return Math.min.apply(null, arrDigits)
        }

        return getMaxOfArray(arrDigits) + " " + getMinOfArray(arrDigits)

    }



    return (
        <>
            {highAndLow("-14 0   3")}
        </>
    )
}
export default LessonIV