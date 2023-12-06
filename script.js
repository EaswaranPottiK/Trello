function deleteBoard(){
    console.log('delete board')
}
document.getElementsByClassName
function deleteBoard(event){
    event.target.parentElement.parentElement.parentElement.remove();
}

function deleteCard(event){
    event.target.parentElement.parentElement.remove()
}

function addCardPartOne(event){
    //console.log(event.target.parentElement.getElementsByClassName('addCard')[0])
    event.target.parentElement.getElementsByClassName('addCard')[0].style.display='none'
    event.target.parentElement.getElementsByClassName('cardDetails')[0].style.display='block'
    
}

//from here
function addCardPartOneReverse(event){
    const parentPos =event.target.parentElement.parentElement.parentElement.parentElement;
    const childPos =event.target.parentElement.parentElement.parentElement;
    childPos.remove()
    parentPos.innerHTML += 
    `
    <div class="flex flex-col items-center justify-center shadow-xl bg-white py-[9px] rounded-lg border hover:bg-[#cccccc] transition ease-in-out delay-350">
    <div onclick="addCardPartOne(event)" class="addCard"> + Add Card</div>
    <div class="cardDetails hidden">
        <input type="text" placeholder="Enter Card Title" class="border-[#0079BF] border-2 rounded-md">
        <div class="flex justify-start items-center gap-[5px] mt-[10px]">
            <button onclick="addCardPartTwo(event)" class="bg-[#0079BF] px-[7px] py-[5px] text-white rounded-md">Add</button>
            <svg onclick="addCardPartOneReverse(event)" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="closeIcon"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </div>
    </div>
</div>
    `
}

function addCardPartTwo(event){
    let inputText = event.target.parentElement.parentElement.getElementsByTagName('input')[0].value;
    let select = event.target.parentElement.parentElement.parentElement.parentElement
    let htmlToBeAdded =
    `
    <div class="data bg-[#f8f8f8] rounded-[5px] flex flex-col gap-[10px] opacity-100">
    <div class="taskToDo p-[10px] flex flex-col gap-[10px] rounded-md border shadow-xl cursor-pointer">

        <div class="flex justify-between">
            <div class="tag bg-[#999966] text-[white] rounded-full px-[3%] py-[1%] mw-auto">
                Frontend
            </div> 
            <p onclick="deleteCard(event)">Delete Card</p>
        </div>
        

        <div class="taskHeading font-bold">
            ${inputText}
        </div>

        <div class="taskContent">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line></svg>
        </div>

        <div class="lastPartOfACard flex bg-[#f8f8f8] text-[14px] flex justify-between px-[15px]">
            <div class="clockAndDate flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="card-footer-icon"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                <p>&nbsp;03 Dec</p>
            </div>
            <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="card-footer-icon"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
                &nbsp;<p>0/2</p>
            </div>
        </div>

    </div>
</div>
    `

    select.insertAdjacentHTML("afterbegin",htmlToBeAdded)

}
document.getElementById
function popUp(event){
    event.target.innerHTML += 
    `
    <button id="open" onclick="addPopUp(event)"> </button>
    <div class="modal-container" >
        <div class="modal flex flex-col items-start font-bold">
            
            <div class="flex mb-[15px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line></svg>
                <p>&nbsp;&nbsp;Title</p>
            </div>
            <div><input type="text" placeholder="Add card title here" class="border-solid"></div>
            <br>

            <div class="flex mb-[15px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                <p>&nbsp;&nbsp;Description</p>
            </div>
            <div><input type="text" placeholder="Add a description"></div>
            <br>

            <div class="flex mb-[15px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                <p>&nbsp;&nbsp;Date</p>
            </div>
            <div><input type="date" ></div>
            <br>

            <div class="flex mb-[15px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
                <p>&nbsp;&nbsp;Labels</p>
            </div>
            <div class="mb-[5px]"><ul class="flex gap-[10px]"><li class="" style="background-color: rgb(168, 25, 61);"></li><li class="" style="background-color: rgb(79, 204, 37);"></li><li class="li-active" style="background-color: rgb(30, 191, 250);"></li><li class="" style="background-color: rgb(141, 163, 119);"></li><li class="" style="background-color: rgb(153, 117, 189);"></li><li class="" style="background-color: rgb(207, 97, 161);"></li><li class="" style="background-color: rgb(36, 9, 89);"></li></ul></div>
            <div><input type="text" placeholder="Enter label name"></div>
            <br>

            <div class="flex mb-[15px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
                <p>&nbsp;&nbsp;Tasks</p>
            </div>
            <div><input type="text" placeholder="Task pending"></div>
            <div><input type="text" placeholder="Total no of task"></div>
            <br>



            <button id="close" onclick="removePopUp(event)">Save & Close</button>
        </div>
    </div>
    `
}

function removePopUp(event){
    console.log(event.target)
    event.target.getElementsByClassName('modal-container')[0].remove()
}