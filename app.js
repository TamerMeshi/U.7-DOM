const createChapter = (name , page, ulList, i ) =>{
    const tag = document.createElement('li')
    tag.innerText = `${name}.......................................${page}`
     tag.addEventListener('click', function(){
        console.log(this.innerText)
     })
    if(i % 2 !== 0){
        tag.classList.add('list-color')
    }
    

    ulList.append(tag)
    
    }
     
    const chapter= [  
                      {name: 'Chapter 1', page: 1},
                      {name: 'Chapter 2', page: 4},
                      {name: 'Chapter 3', page: 9},
                      {name: 'Chapter 4', page: 12},
                      {name: 'Chapter 5', page: 15},
                      {name: 'Chapter 6', page: 24},
                      {name: 'Chapter 7', page: 29},
                      {name: 'Chapter 8', page: 32},
                      {name: 'Chapter 9', page: 35},
                      {name: 'Chapter 10', page: 44}
                      
                    ]
    
    const ulChapters = document.querySelector('.chapters')
    
   const chp =  chapter.forEach(({name, page}, i) => {
        createChapter(name,page,ulChapters, i)
        
    }
    )
    
    const cls = document.querySelector('.cls')
    
  
    cls.addEventListener('click', function () {  
       document.querySelector('.chapters').hidden = !document.querySelector('.chapters').hidden

          
      })

      
      
       
     

      
       
    
    
    
    