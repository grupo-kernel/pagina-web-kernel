export function onNavigate(nav, navigate){
        nav.addEventListener('click', (e) => {
                const item = e.target.closest(["[data-route]"]);
                if(!item) return;
                e.preventDefault();
                navigate(item.dataset.route);
        });
        

}