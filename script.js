document.addEventListener('DOMContentLoaded', function() {
    const computer = document.getElementById('computer'); 
    const technician = document.getElementById('technician');
    const attention = document.getElementById('attention'); 
    const public = document.getElementById('public');
    const security = document.getElementById('security'); 
    const securityShow = document.getElementById('securityShow');  
    const container = document.getElementById('container');
    const aboutMeID = document.getElementById('aboutMeID');
    const studyID = document.getElementById('studyID');
    const workID = document.getElementById('workID');
    const KnowID = document.getElementById('KnowID');
    const projectID = document.getElementById('projectID');
    const tabsWithFullHeight = [aboutMeID, studyID, workID];
    const tabsWithoutFullHeight = [KnowID, projectID];

    technician.style.display = "none";
    public.style.display = "none";
    securityShow.style.display = "none";

    computer.addEventListener('click', function() {
        if (technician.style.display === "none") {
            technician.style.display = "block"; 
            computer.innerHTML = '<i class="fa fa-eye-slash" aria-hidden="true"></i>';
        } else {
            technician.style.display = "none"; 
            computer.innerHTML = '<i class="fa fa-eye" aria-hidden="true"></i>';
        }
        
        showContainer();
    });

    attention.addEventListener('click', function() {
        if (public.style.display === "none") {
            public.style.display = "block"; 
            attention.innerHTML = '<i class="fa fa-eye-slash" aria-hidden="true"></i>';
        } else {
            public.style.display = "none"; 
            attention.innerHTML = '<i class="fa fa-eye" aria-hidden="true"></i>';
        }

        showContainer();
    });

    security.addEventListener('click', function() {
        if (securityShow.style.display === "none") {
            securityShow.style.display = "block"; 
            security.innerHTML = '<i class="fa fa-eye-slash" aria-hidden="true"></i>';
        } else {
            securityShow.style.display = "none"; 
            security.innerHTML = '<i class="fa fa-eye" aria-hidden="true"></i>';
        }

        showContainer();
    });

    tabsWithFullHeight.forEach(tab => {
        tab.addEventListener('click', function() {
            container.classList.add('vh-100');
        });
    });
    
    tabsWithoutFullHeight.forEach(tab => {
        tab.addEventListener('click', function() {
            container.classList.remove('vh-100');
        });
    });
    
    function showContainer() {
        if (technician.style.display === "none" && securityShow.style.display === "none" && public.style.display === "none") {
            container.classList.add('vh-100');
        } else {
            container.classList.remove('vh-100');
        }
    }

    
});
