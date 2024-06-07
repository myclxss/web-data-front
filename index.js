window.addEventListener('load', async () => {
    const playerStatsDiv = document.getElementById('playerStats');

    try {
        const response = await fetch('https://web-data-back.vercel.app/api/playerstats');
        if (!response.ok) {
            throw new Error('Error al obtener los datos del servidor');
        }
        const playerStats = await response.json();

        playerStats.forEach(stat => {
            const playerStatElement = document.createElement('div');
            playerStatElement.innerHTML = `
        <h3>${stat.playerName}</h3>
        <p>Kills: ${stat.kills}</p>
        <p>Deaths: ${stat.deaths}</p>
        <!-- Agregar otros campos de estadísticas aquí -->
      `;
            playerStatsDiv.appendChild(playerStatElement);
        });
    } catch (err) {
        console.error('Error al obtener datos del servidor:', err);
        playerStatsDiv.innerHTML = 'Error al obtener estadísticas de jugadores';
    }
});