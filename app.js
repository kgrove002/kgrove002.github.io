const app = Vue.createApp({
    data() {
    return {
        currentYear:new Date().getFullYear(),
        languages: [
            {
              language: 'HTML5/CSS',
              rating: 5,
              stars: (
                '★★★★★'
              ),
              link: 'https://github.com/kgrove002/kgrove002.github.io',
            },
            {
              language: 'JavaScript',
              rating: 4,
              stars: (
                '★★★★'
              ),
              link: 'https://github.com/kgrove002/Boiler-App',
            },
            {
              language: 'React.js',
              rating: 4,
              stars: (  
                '★★★★'

              ),
              link: 'https://kgrove002.github.io/todoapp',
            },
            {
              language: 'PHP/SQL',
              rating: 4,
              stars: (
                '★★★★'

              ),
              link: 'https://github.com/kgrove002/Example-of-PHP-Ability',
            },
            {
              language: 'Java',
              rating: 3,
              stars: (
                '★★★'

              ),
              link: "https://github.com/kgrove002/Example_of_Java",
            },
            {
              language: 'C++',
              rating: 4,
              stars: (
                '★★★★'

              ),
              link: 'https://github.com/kgrove002/KG-To-Do-App',
            },
            {
              language: 'Python',
              rating: 4,
              stars: (
                '★★★★'

              ),
              link: 'https://github.com/kgrove002/Example-of-Python',
            },
            {
              language: 'R',
              rating: 2,
              stars: (
                '★★'

              ),
              link: null,
            },
            {
              language: 'A++',
              rating: 4,
              stars: (
                '★★★★'
              ),
              link: "images/Certificate.pdf"
            },
            {
              language: 'Tableau',
              rating: 3,
              stars: (
                '★★★'

              ),
              link: "https://public.tableau.com/app/profile/kevin.grove2493/viz/SuperstoreAnalysis_17390433577340/Story1?publish=yes",
            },
            {
              language: 'Unity/C#',
                rating: 4,
                stars: (
                  '★★★★'
                ),
                link: "https://khtechgroup.itch.io/frog-games-free-to-play"
            }
          ]
        }
    }
});

app.mount('#app')
