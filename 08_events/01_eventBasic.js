// Events  in js 

 /*
  -> In js all the events run sequentially. but 
      remember some expection are there.

  -> discuss about browser events
    // Note:- Here we are in purely js so writing code of
              browser events( like click , scroll etc) in html file is 
              not right way for scalable code.
              BUT in react scenrio is diffrent there is a scalable code ..(so dont confuse)
          
    So 2 approch is we write in script section

         document.getElementById('owl').onclick = function(){
         alert("owl clicked") // but this approch also have problem(it may happen some problem in onclick event)
           /*  Instead event listener because along with onclick functionlity it also give ability of propagation 
               ability also.. (in onclick it give less features compare to event listener)
            *
        }

    so ***** 3 approch(best) is we write here....
        // By addEventListener (it is powerful)  it can listen so many events(mouse , keyboard, drag and drop etc)
        
         document.getElementById('owl').addEventListener('click', function(){
          alert("owl is clicked again")
    }, false) // addEventListener have 3 parameter (event, function , false) // bydefault also false
     
 */

 /*   

     document.getElementById('owl').addEventListener('click',function(e){  //  e is event object
       console.log(e) // in console (when we click on owl we get)
// output ->   PointerEvent {isTrusted: true, pointerId: 3, width: 1, height: 1, pressure: 0, …}
   }, false)

   // To Study..
   /*
     1-> type :(keyboard , mouse events etc)
     2-> timeStamp : time , data activites
     3-> defaultPrevented : to change default beahivor(ex in form (submit button(taki submit na hu jaya)))
     4-> target
     5-> toElement
     6-> srcElement
     7-> currentTarget
     // interview (poistion related)
     8-> clientX, clientY , screenX, screenY
     9-> altKey , ctrlKey, shiftKey, keyCode
     */
    
    // ********** What is event propogation ******** 
   //   what is this above false and true
   /*
      If we set true and print console.log(e) and 
      if we set false and print console.log(e) 
      -> so no difference in both value in console (output will be same)
      ** so event propogation have two context
       1-> Event bubbling    (false (bydefault)) in project we use this
       2-> Event capturing   (true)

       In some scenrio Event capturing also we will use...

   */

    /*
    // event bubbling

    document.getElementById('images').addEventListener('click', function(e){
        console.log("Clicked inside the ul");
    },false) // this will print when you click inside images (in ul ka andar)


    document.getElementById('owl').addEventListener('click', function(e){
        console.log("owl Clicked");
    },false) // this will print when we click on owl (owl is inside ul so ul wala 
    // bhi tu activate hoga hena) ul -> li -> images ha ( so top wala code bhi tu activate hona chaiya)

   */

    // so phela kya print hoga owl Clicked ya Clicked inside the ul ?
     /*
      case 1: on clicking every images (not owl) so output we get is-> clicked inside the ul
      case 2: on clicking owl so output we get -> 
             owl clicked 
             clicked inside the ul
     */

     // so we study that in event propogation.... 
       /* In bubbling (nicha sa upper jata ha)
        so you click on inner element(which is images then li then ul) so
        it is event propagation (which is bubbling)
       */
      // correct spelling is propagtion
      


    // -> event propagtion capturing Mode (true)
    /*    
    document.getElementById('images').addEventListener('click', function(e){
        console.log("Clicked inside the ul");
    },true)

    document.getElementById('owl').addEventListener('click', function(e){
        console.log("owl Clicked");
    },true)

    */
 
// output
  /*
     case 1 : when you click all images (not owl so we get) -> clicked inside the ul
     case 2 : when you click in owl image so output we get ->
             click inside the ul 
             owl clicked
  */
 
 // now new concept -> we want event ki bubbling naa hu so inner aur outer element alag-alag hu..
    // so with help of event capture 'e' it have method .stopPropagation()
    /*
    document.getElementById('images').addEventListener('click', function(e){
        console.log("Clicked inside the ul");
    },false)

    document.getElementById('owl').addEventListener('click', function(e){
        console.log("owl Clicked");
        e.stopPropagation()
    },false)
    */
  
    // output owl clicked (bubble hoga upper ka element par nahi jayega)

  
// new concept -> preventDefault (want to not run google website on clicking)  
 /*
 document.getElementById('google').addEventListener('click', function(e){
    e.preventDefault() // 1 (see output down)
    e.stopPropagation()  // 2 (see output down)
    console.log("google click")
 }, false)

 */
   
// output 1
   /* 
        google click 
        clicked inside the ul
   */
// you want add only google click should come so add stopPropagation
 // output 2
   /*
        google click
   */
//-------------------------------------------------//             

/* .target
 document.querySelector('#images').addEventListener('click', function(e){
     console.log(e.target);
 }, false) 
 */

// output (first image we click in console):-
/*  <img width="200px" id="photoshop" 
src="https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
 alt="photoshop">
*/ 

// ---------------------------------------------

/* .parentNode
 document.querySelector('#images').addEventListener('click', function(e){
     console.log(e.target.parentNode);
 }, false)
*/
// output-> 
/* <li>…</li>
   // if we try to open this li in console so we get
 
   <li>
   ::marker
   <img width="200px" id="photoshop" 
   src="https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
   alt="photoshop">
   </li>
*/
//------------------------------------------------------------------
 /* .tagName
  document.querySelector('#images').addEventListener('click', function(e){
     console.log(e.target.tagName);
  }, false)

 */ 
  // output
  /* on clicking any image we get
     IMG (output)
  */
 /* on clicking dot (which is li) or near google so we get 
     LI (output)
 */
  // so we have to select IMG not LI... (in mini project we are seeing this(.tagName))(below)

//-----------------------------------------------------------
// -> mini project
// we want all images so we click on them so they should disappear
  
/*
 document.querySelector('#images').addEventListener('click', function(e){
     console.log(e.target.parentNode); // in parentNode na 'li' sa 'ul' diya.
     let removeIt = e.target.parentNode
  // removeIt.remove(); // 1 approch
     removeIt.parentNode.removeChild(removeIt) // 2 approch
}, false)  // both approch will work same 

*/

// output -> 
 /* 
 when you click on images so it will remove that particular images.
 */

// **** Now the problem come that when you click near google link (down ma ha link) so 
//      all images will disappear.....because listitem(li) ka parent kon 'ul' 
//      In parentNode ma aya 'li' ka parent 'ul'
//      and you tell remove the ul so puri 'li' he remove hu gayi. (ya kisi li par click kiya tu
//      sab disapper hu gaya)

//  so we use strict checks


  document.querySelector('#images').addEventListener('click', function(e){
     console.log(e.target.tagName);
     if(e.target.tagName === 'IMG'){
        console.log(e.target.id); // on 1 photo click so we get photoshop
        let removeIt = e.target.parentNode
        removeIt.remove();
     }
    
}, false) 
// so we have to select IMG not LI
