


 function addRow () {
    document.querySelector('#content').insertAdjacentHTML(
      'afterbegin',
      `<div class="row">
        <input type="text" name="name" value="" placeholder="Enter Date Here" />
        <br>
        <br>
        <textarea cols="100" rows ="5" placeholder="Enter Announcement Here"  name = "value"></textarea><br>
        <input type="button" value="-" onclick="removeRow(this)">
      </div>`      
    )
  }
  
  function removeRow (input) {
    input.parentNode.remove()
  }



  
    