import React from "react";

const LessonIII = () => {

    const squareDigits = (num) => {

        let stringDigits = ''
        let Digits = 0
        let sumStringDigits = ''

        for (let i = 0; i < String(num).length; i++) {

            stringDigits = String(num)[i]

            Digits = parseInt(stringDigits)

            Digits *= Digits

            sumStringDigits += String(Digits)

        }
        return parseInt(sumStringDigits)



    }



    return (
        <>
            {squareDigits(8.9)}
        </>
    )
}

export default LessonIII