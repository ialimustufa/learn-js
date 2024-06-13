function generateTask() {
    const webSeries = document.getElementById('webSeries').value;
    let task = '';
    let duration = '';
    let className = '';

    if (webSeries === 'threeIdiots') {
        task = 'Make Virus generator';
        duration = 'Duration: 5 days';
        className = 'threeIdiots';
    } else if (webSeries === 'leLagaan') {
        task = 'Score 20 runs in 4 balls';
        duration = 'Duration: 15 mins';
        className = 'leLagaan';
    } else if (webSeries === 'wrDangal') {
        task = 'Win Gold medal in championship';
        duration = 'Duration: 7 days';
        className = 'wrDangal';
    }

    const outputDiv = document.getElementById('output');
    outputDiv.className = `container ${className}`;
    outputDiv.innerHTML = `
        <div class="task">${task}</div>
        <div class="duration">${duration}</div>
    `;
}
