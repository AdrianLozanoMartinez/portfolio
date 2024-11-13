document.addEventListener('DOMContentLoaded', function() { 
    const container = document.getElementById('container');
    const aboutMeID = document.getElementById('aboutMeID');
    const studyID = document.getElementById('studyID');
    const workID = document.getElementById('workID');
    const KnowID = document.getElementById('KnowID');
    const projectID = document.getElementById('projectID');
    const tabsWithFullHeight = [studyID, workID];
    const tabsWithoutFullHeight = [aboutMeID, KnowID, projectID];

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
    
});
