


 function addRow () {
    document.querySelector('#content').insertAdjacentHTML(
      'afterbegin',
      `<div class="row">
      
        <input type="text" name="value" value="" placeholder="Enter Instrcutor's Name" size = "25" />
        <input type="text" name="name" value="" placeholder="Enter Course Name" size = "50"/>
        

        
        <input type="button" value="-" onclick="removeRow(this)">
      </div>`      
    )
  }
  
  function removeRow (input) {
    input.parentNode.remove()
  }



  
    