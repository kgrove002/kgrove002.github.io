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
              link: "https://github.com/kgrove002/KG-To-Do-App",
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
              link: "https://github.com/kgrove002/Example_of_Data_Analyst/tree/main/Data%20Analyst%20-%20Tableau",
            }
          ]
        }
    }
});

app.mount('#app')
