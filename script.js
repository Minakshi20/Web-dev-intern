document.addEventListener('DOMContentLoaded', () => {
    const trendingContent = document.getElementById('trendingContent');
    const recommendedContent = document.getElementById('recommendedContent');
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    const contentDetails = document.getElementById('contentDetails');
    const closeBtn = document.querySelector('.closeBtn');
    const detailsContent = document.getElementById('detailsContent');

    const trendingMovies = [
        { title: '3 Idiots', description: 'The fictitious Imperial College of Engineering (ICE) is the site where most of the interesting scenes in the movie were filmed.' },
        { title: 'Chhichhore', description: 'The films college section is reportedly inspired from Hostels real life rivalry for the GC in IIT Bombay. Nitesh Tiwari was himself a resident of H4 during the 90s and this story line was loosely based on his time spent in the institute.' },
        // Add more movies
        { title: 'Yeh Jawaani Hai Deewani', description: 'Description A' },
        { title: 'Zindagi Na Milegi Dobara', description: 'Description B' },
        { title: 'Yeh Jawaani Hai Deewani', description: 'Description A' },
        { title: 'Zindagi Na Milegi Dobara', description: 'Description B' },
    ];

    const recommendedMovies = [
        { title: 'Yeh Jawaani Hai Deewani', description: 'Description A' },
        { title: 'Zindagi Na Milegi Dobara', description: 'Description B' },
        { title: 'Wake Up Sid', description: 'Description A' },
        { title: 'Tamashas', description: 'Description B' },
        { title: 'Yeh Jawaani Hai Deewani', description: 'Description A' },
        { title: 'Zindagi Na Milegi Dobara', description: 'Description B' },
        // Add more movies
    ];

    function displayContent(contentArray, container) {
        contentArray.forEach(content => {
            const contentDiv = document.createElement('div');
            contentDiv.textContent = content.title;
            contentDiv.addEventListener('click', () => {
                showDetails(content);
            });
            container.appendChild(contentDiv);
        });
    }

    function showDetails(content) {
        detailsContent.innerHTML = `<h2>${content.title}</h2><p>${content.description}</p>`;
        contentDetails.style.display = 'block';
    }

    closeBtn.addEventListener('click', () => {
        contentDetails.style.display = 'none';
    });

    window.onclick = (event) => {
        if (event.target == contentDetails) {
            contentDetails.style.display = 'none';
        }
    };

    searchBtn.addEventListener('click', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const searchResults = trendingMovies.concat(recommendedMovies).filter(movie => movie.title.toLowerCase().includes(searchTerm));
        trendingContent.innerHTML = '';
        recommendedContent.innerHTML = '';
        displayContent(searchResults, trendingContent);
    });

    displayContent(trendingMovies, trendingContent);
    displayContent(recommendedMovies, recommendedContent);
});
