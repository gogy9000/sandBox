import React from "react";


const LessonII = () => {


    let solution = (number) => {

        let arr = []

        for (let i = 1; i < number; i++) {


            arr.push(i)
        }

        let sum = 0

        for (let z = 0; z <= arr.length; z++) {

            if (arr[z] % 3 === 0 || arr[z] % 5 === 0) {

                sum += arr[z]
            }

        }

        if (sum < 0) {
            return 0
        } else { return sum }

    }







    // solution(10)

    return (
        <>

            {solution(20)}



        </>
    )
}
export default LessonII