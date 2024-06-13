function generateTask() {
    const webSeries = document.getElementById('webSeries').value;
    let task = '';
    let duration = '';
    let className = '';

    if (webSeries === 'moneyHeist') {
        task = 'Task: Plan a Money Heist';
        duration = 'Duration: 70 minutes';
        className = 'moneyHeist';
    } else if (webSeries === 'strangerThings') {
        task = 'Task: Fight the Demogorgon';
        duration = 'Duration: 60 minutes';
        className = 'strangerThings';
    } else if (webSeries === 'breakingBad') {
        task = 'Task: Cook in the RV';
        duration = 'Duration: 55 minutes';
        className = 'breakingBad';
    } else if (webSeries === 'suits') {
        task = 'Task: Win a Criminal Case';
        duration = 'Duration: 20 minutes';
        className = 'suits';
    }

    const outputDiv = document.getElementById('output');
    outputDiv.className = `container ${className}`;
    outputDiv.innerHTML = `
        <div class="task">${task}</div>
        <div class="duration">${duration}</div>
    `;
    outputDiv.style.display = 'block'; // Show the output container
}
