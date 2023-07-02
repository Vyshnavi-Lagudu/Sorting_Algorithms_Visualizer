async function bubble() {
    console.log('In bubbe()');
    const ele = document.querySelectorAll(".bar");
    for(let i = 0; i < ele.length-1; i++){
        console.log('In ith loop');
        for(let j = 0; j < ele.length-i-1; j++){
            console.log('In jth loop');
            // changing color of the comparing elements 
            ele[j].style.background = '#8EA7E9';
            ele[j+1].style.background = '#8EA7E9';
            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
                console.log('In if condition');
                await wait(delay);
                swap(ele[j], ele[j+1]);
            }
            // changing back to original color since comparision is done
            ele[j].style.background = '#7F669D';
            ele[j+1].style.background = '#7F669D';
        }
        // changing color of sorted part in the array
        ele[ele.length-1-i].style.background = 'green';
    }
    ele[0].style.background = 'green';
}

const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener('click', async function(){
    disableSortBtns();
    disableSize();
    disableNewArray();
    await bubble();
    enableSortBtns();
    enableSize();
    enableNewArray();
});