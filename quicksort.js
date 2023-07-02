async function partition(ele, l, r){
    console.log('In partition()');
    let i = l - 1;
    // changing color of pivot element
    ele[r].style.background = '#FA877F';
    for(let j = l; j <= r - 1; j++){
        console.log('In partitionLomuto for j');
        // changing color of current jth element
        ele[j].style.background = '#F0F696';
        // pausing function 
        await wait(delay);
        if(parseInt(ele[j].style.height) < parseInt(ele[r].style.height)){
            console.log('In if condition comparing height');
            i++;
            swap(ele[i], ele[j]);
            // changing color of the elements after swapping 
            ele[i].style.background = '#FFAD87';
            if(i != j) ele[j].style.background = '#FFAD87';      
            // pausing function
            await wait(delay);
        }
        else{
            // changing colour of the element if it is not less than pivot element
            ele[j].style.background = '#F5B0CB';
        }
    }
    i++; 
    // pause function before swapping
    await wait(delay);
    swap(ele[i], ele[r]); 
    // changing color after swapping elements
    ele[r].style.background = '#F5B0CB';
    ele[i].style.background = 'green';
    // pausing function after swapping
    await wait(delay);   
    // changing color of sorted elements to green and rest of them to #7F669D
    for(let k = 0; k < ele.length; k++){
        if(ele[k].style.background != 'green')
            ele[k].style.background = '#7F669D';
    }
    return i;
}

async function quickSort(ele, l, r){
    if(l < r){
        let pivot_index = await partition(ele, l, r);
        await quickSort(ele, l, pivot_index - 1);
        await quickSort(ele, pivot_index + 1, r);
    }
    else{
        if(l >= 0 && r >= 0 && l <ele.length && r <ele.length){
            ele[r].style.background = 'green';
            ele[l].style.background = 'green';
        }
    }
}


const quickSortbtn = document.querySelector(".quickSort");
quickSortbtn.addEventListener('click', async function(){
    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = ele.length - 1;
    disableSortBtns();
    disableSize();
    disableNewArray();
    await quickSort(ele, l, r);
    enableSortBtns();
    enableSize();
    enableNewArray();
});