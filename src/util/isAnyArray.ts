/**
 * Compares elements in two arrays and returns any duplicates
 * EXAMPLE: returnDuplicateElements(arr1, arr2, false)
 * @author Hershraj
 * @param arr1 The first array
 * @param arr2 The second array
 * @param returnDuplicates If you want to return multiple duplicate values in any of the arrays - Defaults false if not given
 * @return <b>returnObj[]</b> An array containing returnObjs if any are found
**/

export function returnDuplicateElements(arr1: any[], arr2: any[], returnDuplicates = false): any[] {
    let returnObj = [];
    let Arr1Set = new Set();

    for(let i = 0; i < arr1.length; i++) {
        let arr1Item = arr1[i];
        Arr1Set.add(arr1Item);
    }

    for (let i = 0; i < arr2.length; i++) {
        let arr2Item = arr2[i];
        if (Arr1Set.has(arr2Item)) {
            if (returnObj.includes(arr2Item) && returnDuplicates) returnObj.push(arr2Item);
            else if(returnObj.includes(arr2Item) &&! returnDuplicates) continue;
            else returnObj.push(arr2Item);
        }
    }

    return returnObj;
}

/**
 * Compares elements in two arrays and returns true if there are any duplicates
 * EXAMPLE: isAnyArray(arr1, arr2)
 * @author Hershraj
 * @param arr1 The first array
 * @param arr2 The second array
 * @return <b>boolean</b> If any duplicates are found between the arrays
**/

export function isAnyArray(arr1: any[], arr2: any): boolean {
    let Arr1Set = new Set();

    for(let i = 0; i < arr1.length; i++) {
        let arr1Item = arr1[i];
        Arr1Set.add(arr1Item);
    }

    for (let i = 0; i < arr2.length; i++) {
        let arr2Item = arr2[i];
        if (Arr1Set.has(arr2Item)) {
            return true;
        }
    }

    return false;
}