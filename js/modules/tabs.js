function tabs (tabsSelector, tabsContentSelector, tabsParentSelector, activeClass){
 // Tabs
    const tabs = document.querySelectorAll(tabsSelector),
        tabsContent = document.querySelectorAll(tabsContentSelector),
        tabsParent = document.querySelector(tabsParentSelector);

    function hideTabContent (){
        tabsContent.forEach(item => {
        //     item.style.display = 'none'; 	       	//инлайн стили 
        // });
            item.classList.add('hide');                  // для CSS
            item.classList.remove('show', 'fade');      //для CSS
        });
        tabs.forEach(item => {
            item.classList.remove (activeClass); 
        });
    }

    function showTabContent(i = 0) {
        // tabsContent[i].style.display = 'block';             //инлайн стили 
        // tabs[i].classList.add('tabheader__item_active');    //инлайн стили 
    
        tabsContent[i].classList.add('show', 'fade');       //для CSS
        tabsContent[i].classList.remove('hide');            // для CSS
        tabs[i].classList.add(activeClass);
    }
    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains(tabsSelector.slice(1))){
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }  
            });
        }
    });
}

export default tabs;