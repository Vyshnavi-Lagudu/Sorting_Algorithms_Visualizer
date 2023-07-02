async function insertion(){
    console.log('In insertion()');
    const ele = document.querySelectorAll(".bar");
    // changing color of first element
    ele[0].style.background = 'green';
    for(let i = 1; i < ele.length; i++){
        let j = i - 1;
        let key = ele[i].style.height;
        // changing color of the comparing ith and jth elements
        ele[i].style.background = '#8EA7E9';
        await wait(delay);
        while(j >= 0 && (parseInt(ele[j].style.height) > parseInt(key))){
            ele[j].style.background = '#8EA7E9';
            ele[j + 1].style.height = ele[j].style.height;
            j--;
            await wait(delay);
            // changing color of elements before ith element considering them as sorted
            for(let k = i; k >= 0; k--){
                ele[k].style.background = 'green';
            }
        }
        ele[j + 1].style.height = key;
        // changing color of ith element since it is sorted now
        ele[i].style.background = 'green';
    }
}

const inSortbtn = document.querySelector(".insertionSort");
inSortbtn.addEventListener('click', async function(){
    disableSortBtns();
    disableSize();
    disableNewArray();
    await insertion();
    enableSortBtns();
    enableSize();
    enableNewArray();
});