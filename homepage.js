let homeRun = () => {
    document.getElementById('Homepage').style.display = 'inline';

    document.getElementById('Homepage').className = 'active';
    
    document.getElementById('Contact').style.display = 'none';
    document.getElementById('About').style.display = 'none';
}
let contactRun = () => {
    document.getElementById('Contact').style.display = 'inline';
    document.getElementById('Contact').className = 'active';
    document.getElementById('Homepage').style.display = 'none';
    document.getElementById('About').style.display = 'none';
}
let aboutRun = () => {
    document.getElementById('About').style.display = 'inline';
    document.getElementById('Homepage').style.display = 'none';
    document.getElementById('About').className = 'active';
    document.getElementById('Contact').style.display = 'none';
}

document.getElementById('home').addEventListener('click', homeRun);
document.getElementById('contacts').addEventListener('click', contactRun);
document.getElementById('right').addEventListener('click', aboutRun);
