function PlaceOrder() {
    //generate a new order
    var order = new Array

    var name= document.getElementById("Name").value;
    order.push(name);

    var phone= document.getElementById("phoneNumber").value;
    order.push(phone);
    //get the only checked element and put them into order
    var engine= document.getElementsByName("Engines");
    for (var i=0;i<engine.length;i++){
        if ( engine[i].checked ) {
          order.push(engine[i].value);
        }
      }

    var size= document.getElementsByName("BodySize");
    for (var i=0;i<size.length;i++){
        if ( size[i].checked ) {
          order.push(size[i].value);
        }
      }

    var wheel= document.getElementsByName("Wheels");
    for (var i=0;i<wheel.length;i++){
        if ( wheel[i].checked ) {
          order.push(wheel[i].value);
        }
      }

    var BColor= document.getElementsByName("BColor");
    for (var i=0;i<BColor.length;i++){
        if ( BColor[i].checked ) {
          order.push(BColor[i].value);
        }
      }

    var WColor= document.getElementsByName("WColor");
    for (var i=0;i<WColor.length;i++){
        if ( WColor[i].checked ) {
          order.push(WColor[i].value);
        }
      }
    //send request and order to server
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("order").style.display='block';
            document.getElementById("detail").innerHTML=this.response;
        }
    };
    request.open("GET","server.php?order=" + order ,true);
    request.send();
}
