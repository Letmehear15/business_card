var getList = document.querySelectorAll('a');

for(var i = 0; i < getList.length - 1; i++) {
    addLine(getList[i]);
}
function addLine(list) {
    list.addEventListener('click', function(){
        clear(list);
    });
}
function clear(list){
   for(var i = 0; i < getList.length - 1; i++) {
    getList[i].classList.remove('active');
   }
   list.classList.add('active');
}