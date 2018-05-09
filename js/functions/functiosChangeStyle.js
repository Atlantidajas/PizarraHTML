/* Change Style */
function ChangeStyleBoardTiza(){
    document.getElementById("typeBoardSelectionRotulador").checked = false;
    var typeBoardSelectionTiza = document.getElementById("typeBoardSelectionTiza").value;
    var url = "css/figures/board/boardTiza.css";
    document.getElementById("styleBoard").href = url;
}
function ChangeStyleBoardRotulador(){
    document.getElementById("typeBoardSelectionTiza").checked = false;
    var typeBoardSelectionRotulador = document.getElementById("typeBoardSelectionRotulador").value;
    var url = "css/figures/board/boardMarkingPen.css";
    document.getElementById("styleBoard").href = url;
}
