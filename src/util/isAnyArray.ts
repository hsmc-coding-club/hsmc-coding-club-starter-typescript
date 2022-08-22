export interface returnObj {
    val: any;
    indexArrOne: number;
    indexArrTwo: number;

}

/**
 * Compares elements in two arrays and returns any duplicates
 * EXAMPLE: isAny(arr1, arr2)
 * @author Hershraj
 * @param arr1 The first array
 * @param arr2 The second array
 * @param listDuplicates If you want to return multiple duplicate values in any of the arrays - Defaults false if not given
 * @return <b>returnObj[]</b> An array containing returnObjs if any are found
**/

export function isAny(arr1: any[], arr2: any[], listDuplicates?: boolean): returnObj[] {
    if(!listDuplicates) listDuplicates = false;
    let loop = true;
    let results: returnObj[] = [];

    let incArrOne = 0;
    let incArrTwo = 0;
    while(loop){
        if(incArrOne == arr1.length){
            incArrOne = 0;
            incArrTwo++;
        }
        else {
            incArrOne++;
        }

        // console.log(`Inc Arr 1: ${incArrOne}\nInc Arr 2: ${incArrTwo}`)
        if(incArrTwo == arr2.length && incArrOne == arr1.length) {
            loop = false;
            return results;
        }

        if(arr1[incArrOne] == arr2[incArrTwo]){
            let push = true;
            if(!listDuplicates){
                results.forEach(result => {
                    if(result.val == arr1[incArrOne]) push = false;
                });
            }
            if(push) results.push({
                val: arr1[incArrOne],
                indexArrOne: incArrOne,
                indexArrTwo: incArrTwo
            });
        }
        else {
            continue;
        }

    }
}