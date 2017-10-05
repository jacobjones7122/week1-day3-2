document.addEventListener('DOMContentLoaded', function(){

    var button = document.createElement("button");   
    console.log(button);
    button.innerHTML = 'Add Square!';
    document.body.appendChild(button);     
    
    var container = document.createElement('div');
    document.body.appendChild(container);
    console.log(container);
    
    button.addEventListener('click', function() { 
        
        var div = document.createElement('div'); 
        div.className = 'blocks';
        var count = document.getElementsByClassName('blocks').length + 1;
        div.id = count;
        var stuff = document.createTextNode(count);
        var para = document.createElement('p');
        var disappear = document.createTextNode(count);
        para.id = disappear

        //hidden text function
        div.addEventListener('pointerenter', function(){
            para.appendChild(stuff);
            div.appendChild(para);       
            para.style.display = "block";
        });
        div.addEventListener('pointerleave', function(){
            stuff.className = 'hideMe'
            para.style.display = "none";
        });  

        //color function
        div.addEventListener('click', function(){
            var color = 'rgb(' + (Math.floor(Math.random() * 256)) + ', ' + (Math.floor(Math.random() * 256)) + ', ' + (Math.floor(Math.random() * 256)) + ')';    
            console.log(color);
            div.style.backgroundColor = color;
        })

        //erase function
        div.addEventListener('dblclick', function(){
            if (count % 2 == 0) {
            div.nextSibling.remove(div);
            } else {
            div.previousSibling.remove(div);
            }
        })
        
        container.appendChild(div);  
    });
});