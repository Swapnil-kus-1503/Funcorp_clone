

    document.querySelector("#btn1").addEventListener("click",function (){
      var data = document.querySelector("#btn1").value
      getdata(data);
    })
    document.querySelector("#btn2").addEventListener("click",function (){
      var data = document.querySelector("#btn2").value
      getdata(data);
    })

    document.querySelector("#btn3").addEventListener("click",function (){
      var data = document.querySelector("#btn3").value
      getdata(data);
    })

    document.querySelector("#btn4").addEventListener("click",function (){
      var data = document.querySelector("#btn4").value
      getdata(data);
    })

    document.querySelector("#btn5").addEventListener("click",function (){
      var data = document.querySelector("#btn5").value
      getdata(data);
    })

    document.querySelector("#btn6").addEventListener("click",function (){
      var data = document.querySelector("#btn6").value
      getdata(data);
    })

    var price = 0;

    function getdata(data){
    event.preventDefault();
    price = data
    
    }
     var age = "";
    document.querySelector("#submit").addEventListener("click",submit)
   
    function submit(){
      event.preventDefault();
       age = document.querySelector("#ageselect").value
      console.log(age,price)

      localStorage.setItem('Age', age);
      localStorage.setItem('Price', price);

      window.location.href="sorted.html";
    }

    